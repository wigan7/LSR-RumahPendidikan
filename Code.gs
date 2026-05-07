const SPREADSHEET_ID = '1AtaIRw4NkTyNYfL7kmka0QKVYYWT_RW551sF6qxJbWk';
const SINGLE_SHEET = 'singleplayer';
const MULTI_SHEET = 'multiplayer';

function doGet(e) {
  try {
    const mode = (e && e.parameter && e.parameter.mode) ? String(e.parameter.mode).toLowerCase() : 'singleplayer';

    if (mode === 'multiplayer') {
      const leaderboard = getMultiplayerLeaderboard();
      return jsonOutput({ result: 'success', mode: 'multiplayer', data: leaderboard });
    }

    const leaderboard = getSingleplayerLeaderboard();
    return jsonOutput({ result: 'success', mode: 'singleplayer', data: leaderboard });
  } catch (err) {
    return jsonOutput({ result: 'error', message: err.message || String(err) });
  }
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Payload kosong');
    }

    const payload = JSON.parse(e.postData.contents);
    const mode = String(payload.mode || 'singleplayer').toLowerCase();

    if (mode === 'multiplayer') {
      saveMultiplayerScore(payload);
      return jsonOutput({ result: 'success', mode: 'multiplayer', message: 'Skor multiplayer tersimpan' });
    }

    saveSingleplayerScore(payload);
    return jsonOutput({ result: 'success', mode: 'singleplayer', message: 'Skor singleplayer tersimpan' });
  } catch (err) {
    return jsonOutput({ result: 'error', message: err.message || String(err) });
  }
}

function saveSingleplayerScore(payload) {
  const sh = getSheet_(SINGLE_SHEET, [
    'createdAt', 'name', 'province', 'score', 'rank'
  ]);

  sh.appendRow([
    new Date(),
    String(payload.name || ''),
    String(payload.province || ''),
    Number(payload.score || 0),
    String(payload.rank || '')
  ]);
}

function saveMultiplayerScore(payload) {
  const sh = getSheet_(MULTI_SHEET, [
    'createdAt', 'winnerName', 'winnerProvince', 'loserName', 'loserProvince',
    'winnerPoints', 'winnerRank', 'loserPoints', 'loserRank'
  ]);

  sh.appendRow([
    new Date(),
    String(payload.winnerName || ''),
    String(payload.winnerProvince || ''),
    String(payload.loserName || ''),
    String(payload.loserProvince || ''),
    Number(payload.winnerPoints || 0),
    String(payload.winnerRank || ''),
    Number(payload.loserPoints || 0),
    String(payload.loserRank || '')
  ]);
}

function getSingleplayerLeaderboard() {
  const sh = getSheet_(SINGLE_SHEET, [
    'createdAt', 'name', 'province', 'score', 'rank'
  ]);
  const values = sh.getDataRange().getValues();

  if (values.length <= 1) return [];

  const rows = values.slice(1).map(function(r) {
    return {
      name: String(r[1] || ''),
      province: String(r[2] || ''),
      score: Number(r[3] || 0),
      rank: String(r[4] || '')
    };
  });

  rows.sort(function(a, b) { return b.score - a.score; });
  return rows.slice(0, 100);
}

function getMultiplayerLeaderboard() {
  const sh = getSheet_(MULTI_SHEET, [
    'createdAt', 'winnerName', 'winnerProvince', 'loserName', 'loserProvince',
    'winnerPoints', 'winnerRank', 'loserPoints', 'loserRank'
  ]);
  const values = sh.getDataRange().getValues();

  if (values.length <= 1) return [];

  const stats = {};
  values.slice(1).forEach(function(r) {
    const winnerName = String(r[1] || '');
    const winnerProvince = String(r[2] || '');
    const loserName = String(r[3] || '');
    const loserProvince = String(r[4] || '');
    const winnerPoints = Number(r[5] || 0);
    const loserPoints = Number(r[7] || 0);

    if (winnerName) {
      const wk = winnerName + '||' + winnerProvince;
      if (!stats[wk]) stats[wk] = { name: winnerName, province: winnerProvince, points: 0, wins: 0, matches: 0 };
      stats[wk].points = Math.max(stats[wk].points, winnerPoints);
      stats[wk].wins += 1;
      stats[wk].matches += 1;
    }

    if (loserName) {
      const lk = loserName + '||' + loserProvince;
      if (!stats[lk]) stats[lk] = { name: loserName, province: loserProvince, points: 0, wins: 0, matches: 0 };
      stats[lk].points = Math.max(stats[lk].points, loserPoints);
      stats[lk].matches += 1;
    }
  });

  const rows = Object.keys(stats).map(function(k) {
    const row = stats[k];
    row.rank = getMultiplayerRankFromPoints_(row.points);
    return row;
  });
  rows.sort(function(a, b) {
    if (b.points !== a.points) return b.points - a.points;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return b.matches - a.matches;
  });
  return rows.slice(0, 100);
}

function getMultiplayerRankFromPoints_(points) {
  const p = Number(points || 0);
  if (p >= 19) return 'LEGENDA DUEL GALAKSI';
  if (p >= 16) return 'MASTER KOSMIK';
  if (p >= 13) return 'KOMANDAN BINTANG';
  if (p >= 10) return 'PILOT ELITE';
  if (p >= 7) return 'PENJELAJAH TANGGUH';
  return 'KADET ANTARIKSA';
}

function getSheet_(sheetName, headers) {
  if (!SPREADSHEET_ID || SPREADSHEET_ID === 'GANTI_DENGAN_SPREADSHEET_ID') {
    throw new Error('Isi SPREADSHEET_ID di Code.gs terlebih dahulu');
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sh = ss.getSheetByName(sheetName);

  if (!sh) {
    sh = ss.insertSheet(sheetName);
  }

  ensureSheetHeaders_(sh, headers);

  return sh;
}

function ensureSheetHeaders_(sheet, headers) {
  const expectedHeaders = headers.map(function(header) {
    return String(header);
  });

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, expectedHeaders.length).setValues([expectedHeaders]);
    return;
  }

  const currentWidth = Math.max(sheet.getLastColumn(), expectedHeaders.length);
  const currentHeaders = sheet.getRange(1, 1, 1, currentWidth).getValues()[0]
    .slice(0, expectedHeaders.length)
    .map(function(value) {
      return String(value || '').trim();
    });

  const hasValidHeaders = expectedHeaders.every(function(header, index) {
    return currentHeaders[index] === header;
  });

  if (!hasValidHeaders) {
    sheet.getRange(1, 1, 1, expectedHeaders.length).setValues([expectedHeaders]);
  }
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
