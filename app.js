    // --- SOUND MANAGER (Enhanced with BGM & Victory) ---
    const SoundManager = {
        ctx: null,
        bgmNodes: [],
        bgmTimer: null,
      battleBgm: null,
      explorationBgm: null,
      versusBgm: null,
      menuBgm: null,
      winBgm: null,
      gameoverBgm: null,
      musicEnabled: true,
      sfxEnabled: true,
      currentTheme: null,
        init: function() {
          window.AudioContext = window.AudioContext || window.webkitAudioContext;
          if (!this.ctx) this.ctx = new AudioContext();
          if (!this.battleBgm) {
            this.battleBgm = new Audio('./assets/audio/battle-theme.mp3');
            this.battleBgm.loop = true;
            this.battleBgm.preload = 'auto';
            this.battleBgm.volume = 0.35;
          }
          if (!this.explorationBgm) {
            this.explorationBgm = new Audio('./assets/audio/exploration-theme.mp3');
            this.explorationBgm.loop = true;
            this.explorationBgm.preload = 'auto';
            this.explorationBgm.volume = 0.32;
          }
          if (!this.versusBgm) {
            this.versusBgm = new Audio('./assets/audio/versus-theme.mp3');
            this.versusBgm.loop = true;
            this.versusBgm.preload = 'auto';
            this.versusBgm.volume = 0.34;
          }
          if (!this.menuBgm) {
            this.menuBgm = new Audio('./assets/audio/menu-theme.mp3');
            this.menuBgm.loop = true;
            this.menuBgm.preload = 'auto';
            this.menuBgm.volume = 0.3;
          }
          if (!this.winBgm) {
            this.winBgm = new Audio('./assets/audio/win-theme.mp3');
            this.winBgm.loop = true;
            this.winBgm.preload = 'auto';
            this.winBgm.volume = 0.34;
          }
          if (!this.gameoverBgm) {
            this.gameoverBgm = new Audio('./assets/audio/gameover-theme.mp3');
            this.gameoverBgm.loop = true;
            this.gameoverBgm.preload = 'auto';
            this.gameoverBgm.volume = 0.32;
          }
        },
        resume: function() { if (this.ctx && this.ctx.state === 'suspended') { this.ctx.resume(); } if (!this.ctx) this.init(); },
      setMusicEnabled: function(enabled) {
        this.musicEnabled = !!enabled;
        if (!this.musicEnabled) {
          this.stopBGM();
          return;
        }
        if (this.currentTheme === 'multiplayer') this.playMultiplayerTheme();
        else if (this.currentTheme === 'space') this.playSpaceTravelTheme();
        else if (this.currentTheme === 'battle') this.playBattleTheme();
        else if (this.currentTheme === 'adventure') this.playAdventureTheme();
        else if (this.currentTheme === 'menu') this.playMenuTheme();
        else if (this.currentTheme === 'gameover') this.playGameOverTheme();
        else if (this.currentTheme === 'win') this.playWinTheme();
      },
      setSfxEnabled: function(enabled) {
        this.sfxEnabled = !!enabled;
      },
        stopBGM: function() {
            this.bgmNodes.forEach(node => { try { node.stop(); } catch(e){} });
            this.bgmNodes = [];
            if (this.bgmTimer) { clearTimeout(this.bgmTimer); this.bgmTimer = null; }
            if (this.battleBgm) {
              this.battleBgm.pause();
              this.battleBgm.currentTime = 0;
            }
            if (this.explorationBgm) {
              this.explorationBgm.pause();
              this.explorationBgm.currentTime = 0;
            }
            if (this.versusBgm) {
              this.versusBgm.pause();
              this.versusBgm.currentTime = 0;
            }
            if (this.menuBgm) {
              this.menuBgm.pause();
              this.menuBgm.currentTime = 0;
            }
            if (this.winBgm) {
              this.winBgm.pause();
              this.winBgm.currentTime = 0;
            }
            if (this.gameoverBgm) {
              this.gameoverBgm.pause();
              this.gameoverBgm.currentTime = 0;
            }
        },
        playMenuTheme: function() {
            this.currentTheme = 'menu';
            if (!this.musicEnabled) return;
            if (!this.menuBgm) this.init();
          if (this.menuBgm && !this.menuBgm.paused) return;
            this.stopBGM();
            if (!this.menuBgm) return;
            this.menuBgm.currentTime = 0;
            const playPromise = this.menuBgm.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
        },
        playAdventureTheme: function() {
            this.currentTheme = 'adventure';
            if (!this.musicEnabled) return;
            if (!this.explorationBgm) this.init();
            this.stopBGM();
            if (!this.explorationBgm) return;
            this.explorationBgm.currentTime = 0;
            const playPromise = this.explorationBgm.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
        },
        playSpaceTravelTheme: function() {
            this.currentTheme = 'space';
            if (!this.musicEnabled) return;
            if (!this.battleBgm) this.init();
            this.stopBGM();
            if (!this.battleBgm) return;
            this.battleBgm.currentTime = 0;
            const playPromise = this.battleBgm.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
        },
        playBattleTheme: function() {
            this.currentTheme = 'battle';
            if (!this.musicEnabled) return;
            if (!this.versusBgm) this.init();
            this.stopBGM();
            if (!this.versusBgm) return;
            this.versusBgm.currentTime = 0;
            const playPromise = this.versusBgm.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
        },
        playMultiplayerTheme: function() {
            this.currentTheme = 'multiplayer';
            if (!this.musicEnabled) return;
            if (!this.versusBgm) this.init();
            this.stopBGM();
            if (!this.versusBgm) return;
            this.versusBgm.currentTime = 0;
            const playPromise = this.versusBgm.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
        },
        playGameOverTheme: function() {
            this.currentTheme = 'gameover';
            if (!this.musicEnabled) return;
            if (!this.gameoverBgm) this.init();
            this.stopBGM();
            if (!this.gameoverBgm) return;
            this.gameoverBgm.currentTime = 0;
            const playPromise = this.gameoverBgm.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
        },
        playWinTheme: function() {
            this.currentTheme = 'win';
            if (!this.musicEnabled) return;
            if (!this.winBgm) this.init();
            this.stopBGM();
            if (!this.winBgm) return;
            this.winBgm.currentTime = 0;
            const playPromise = this.winBgm.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
        },
        play: function(type) {
            if (!this.ctx) return;
          if (!this.sfxEnabled) return;
            const t = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain); gain.connect(this.ctx.destination);
            switch (type) {
                case 'click': osc.type='sine'; osc.frequency.setValueAtTime(800,t); osc.frequency.exponentialRampToValueAtTime(1200,t+0.1); gain.gain.setValueAtTime(0.1,t); gain.gain.exponentialRampToValueAtTime(0.01,t+0.1); osc.start(t); osc.stop(t+0.1); break;
                case 'shoot': osc.type='square'; osc.frequency.setValueAtTime(880,t); osc.frequency.exponentialRampToValueAtTime(110,t+0.15); gain.gain.setValueAtTime(0.05,t); gain.gain.exponentialRampToValueAtTime(0.01,t+0.15); osc.start(t); osc.stop(t+0.15); break;
                case 'explosion': osc.type='triangle'; osc.frequency.setValueAtTime(120,t); osc.frequency.exponentialRampToValueAtTime(10,t+0.4); gain.gain.setValueAtTime(0.3,t); gain.gain.exponentialRampToValueAtTime(0.01,t+0.4); osc.start(t); osc.stop(t+0.4); break;
                case 'hit': osc.type='sawtooth'; osc.frequency.setValueAtTime(100,t); osc.frequency.linearRampToValueAtTime(50,t+0.1); gain.gain.setValueAtTime(0.2,t); gain.gain.linearRampToValueAtTime(0.01,t+0.1); osc.start(t); osc.stop(t+0.1); break;
                case 'collect': osc.type='sine'; osc.frequency.setValueAtTime(600,t); osc.frequency.setValueAtTime(1200,t+0.1); gain.gain.setValueAtTime(0.1,t); gain.gain.linearRampToValueAtTime(0.01,t+0.2); osc.start(t); osc.stop(t+0.2); break;
                case 'scan': osc.type='sine'; osc.frequency.setValueAtTime(1500,t); gain.gain.setValueAtTime(0.05,t); gain.gain.linearRampToValueAtTime(0.01,t+0.05); osc.start(t); osc.stop(t+0.05); break;
                case 'correct': osc.type='triangle'; osc.frequency.setValueAtTime(440,t); osc.frequency.setValueAtTime(660,t+0.1); osc.frequency.setValueAtTime(880,t+0.2); gain.gain.setValueAtTime(0.1,t); gain.gain.linearRampToValueAtTime(0.01,t+0.4); osc.start(t); osc.stop(t+0.4); break;
                case 'wrong': osc.type='sawtooth'; osc.frequency.setValueAtTime(200,t); osc.frequency.linearRampToValueAtTime(100,t+0.2); gain.gain.setValueAtTime(0.1,t); gain.gain.linearRampToValueAtTime(0.01,t+0.3); osc.start(t); osc.stop(t+0.3); break;
                case 'drill': osc.type='sawtooth'; osc.frequency.setValueAtTime(80+Math.random()*20,t); gain.gain.setValueAtTime(0.08,t); gain.gain.linearRampToValueAtTime(0.01,t+0.15); osc.start(t); osc.stop(t+0.15); break;
                case 'rub': osc.type='triangle'; osc.frequency.setValueAtTime(Math.random()*100+50,t); gain.gain.setValueAtTime(0.05,t); gain.gain.linearRampToValueAtTime(0.01,t+0.05); osc.start(t); osc.stop(t+0.05); break;
                case 'signal_noise': osc.type='square'; osc.frequency.setValueAtTime(200+Math.random()*800,t); gain.gain.setValueAtTime(0.03,t); gain.gain.linearRampToValueAtTime(0.0,t+0.05); osc.start(t); osc.stop(t+0.05); break;
            }
        }
    };

    const assets = {
      startBg: "./assets/images/start-screen.jpg",
      charSelectMale: "./assets/images/char-select-male.png",
      charSelectFemale: "./assets/images/char-select-female.png",
      exploreMale: "./assets/images/explore-male.png",
      exploreFemale: "./assets/images/explore-female.png",
      battleMale: "./assets/images/battle-male.png",
      battleFemale: "./assets/images/battle-female.png",
      alien1: "./assets/images/alien-1.png",
      alien2: "./assets/images/alien-2.png",
      alien3: "./assets/images/alien3.png",
      alien3Critical: "./assets/images/alien3-critical.png",
      asteroid4SType: "./assets/images/asteroid-4-s-type.png",
      asteroid4STypeCritical: "./assets/images/asteroid-4-s-type-critical.png",
      asteroidElite1ArmoredMetallic: "./assets/images/asteroid-elite-1-armored-metallic.png",
      asteroidElite1ArmoredMetallicCritical: "./assets/images/asteroid-elite-1-armored-metallic-critical.png",
      asteroidElite2FracturedSpike: "./assets/images/asteroid-elite-2-fractured-spike.png",
      asteroidElite2FracturedSpikeCritical: "./assets/images/asteroid-elite-2-fractured-spike-critical.png",
      asteroidElite3CarbonFortress: "./assets/images/asteroid-elite-3-carbon-fortress.png",
      asteroidElite3CarbonFortressCritical: "./assets/images/asteroid-elite-3-carbon-fortress-critical.png",
      asteroidElite4IcyHybrid: "./assets/images/asteroid-elite-4-icy-hybrid.png",
      asteroidElite4IcyHybridCritical: "./assets/images/asteroid-elite-4-icy-hybrid-critical.png",
      ship0: "./assets/images/ship-level-0.png",
      ship1: "./assets/images/ship-level-1.png",
      ship2: "./assets/images/ship-level-2.png",
      ship3: "./assets/images/ship-level-3.png",
      upgradeBg: "./assets/images/upgrade-bg.jpg",
      planetMerkurius: "./assets/images/planet-merkurius.png",
      planetVenus: "./assets/images/planet-venus.png",
      planetBumi: "./assets/images/planet-bumi.png",
      planetMars: "./assets/images/planet-mars.png",
      planetJupiter: "./assets/images/planet-jupiter.png",
      planetSaturnus: "./assets/images/planet-saturnus.png",
      planetUranus: "./assets/images/planet-uranus.png",
      planetNeptunus: "./assets/images/planet-neptunus.png"
    };

    const images = {};
    for (let key in assets) { images[key] = new Image(); images[key].src = assets[key]; }

    const planetSpriteKeyByName = {
      Merkurius: 'planetMerkurius',
      Venus: 'planetVenus',
      Bumi: 'planetBumi',
      Mars: 'planetMars',
      Jupiter: 'planetJupiter',
      Saturnus: 'planetSaturnus',
      Uranus: 'planetUranus',
      Neptunus: 'planetNeptunus'
    };

    function getPlanetSpriteImage(planetName) {
      const key = planetSpriteKeyByName[planetName];
      if (!key) return null;
      return images[key] || null;
    }

    const planetVisualConfig = {
      Merkurius: { roadmap: 26, approach: 620, leaving: 620, leavingOffset: 0.32 },
      Venus: { roadmap: 34, approach: 760, leaving: 720, leavingOffset: 0.3 },
      Bumi: { roadmap: 36, approach: 780, leaving: 740, leavingOffset: 0.3 },
      Mars: { roadmap: 30, approach: 680, leaving: 660, leavingOffset: 0.31 },
      // 4 planet terakhir memiliki cincin pada aset, jadi ukuran kanvas sprite dibuat lebih besar.
      // Leaving scene memakai diameter dan offset khusus supaya badan planet tetap terlihat, bukan hanya cincinnya.
      Jupiter: { roadmap: 56, approach: 980, leaving: 860, leavingOffset: 0.19 },
      Saturnus: { roadmap: 72, approach: 1120, leaving: 920, leavingOffset: 0.17 },
      Uranus: { roadmap: 58, approach: 920, leaving: 820, leavingOffset: 0.18 },
      Neptunus: { roadmap: 56, approach: 900, leaving: 820, leavingOffset: 0.19 }
    };

    function getPlanetVisualSize(planetName) {
      return planetVisualConfig[planetName] || { roadmap: 34, approach: 780, leaving: 720, leavingOffset: 0.3 };
    }

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let playerData = { name: "Petualang", gender: "male" };

    let notificationTimer = null;
    function showInGameNotification(message, duration = 1800) {
      const el = document.getElementById('in-game-notification');
      if (!el) return;
      el.textContent = message;
      el.classList.add('show');
      if (notificationTimer) clearTimeout(notificationTimer);
      notificationTimer = setTimeout(() => {
        el.classList.remove('show');
      }, duration);
    }

    function openCharSelect() { SoundManager.play('click'); SoundManager.playMenuTheme(); document.getElementById('main-menu').style.display = 'none'; document.getElementById('char-select-menu').style.display = 'flex'; }
    function closeCharSelect() { SoundManager.play('click'); SoundManager.playMenuTheme(); document.getElementById('char-select-menu').style.display = 'none'; document.getElementById('main-menu').style.display = 'flex'; }
    function chooseCharacter(gender) { SoundManager.play('click'); playerData.gender = gender; document.getElementById('current-char-img').src = (gender === 'male') ? assets.charSelectMale : assets.charSelectFemale; closeCharSelect(); }

    const badWordsList = ["anjing", "bangsat", "babi", "monyet", "kunyuk", "bajingan", "asu", "kontol", "memek", "ngentot", "pantek", "puki", "kimak", "jancok", "cuk", "coeg", "njir", "kampret", "tolol", "bego", "goblok", "idiot", "setan", "iblis", "lonte", "pelacur", "bencong", "banci", "sialan", "brengsek", "taik", "tai", "bgst", "anjg", "kntl", "mmk", "anying", "jembut", "toket", "itil", "ngewe", "sange", "pepek", "peler", "titit", "entot", "bokep", "porno"];
    function filterProfanity(text) { let filtered = text; badWordsList.forEach(word => { const regex = new RegExp(word, "gi"); if (regex.test(filtered)) { filtered = filtered.replace(regex, (match) => "*".repeat(match.length)); } }); return filtered; }

    function submitMainMenu() {
      SoundManager.play('click');
      let nameInput = document.getElementById('player-name').value;
      if (!nameInput) { showInGameNotification("Yuk, isi dulu nama Petualangmu!"); return; }
      nameInput = filterProfanity(nameInput);
      const difficultyValue = (document.getElementById('difficulty-select')?.value || 'sedang');
      applyDifficulty(difficultyValue);
      playerData.name = nameInput;
      document.getElementById('main-menu').style.display = 'none';
      startGame();
    }

    function openMinigameTestMenu() {
      SoundManager.play('click');
      SoundManager.playMenuTheme();
      const panel = document.getElementById('minigame-test-menu');
      const select = document.getElementById('test-planet-select');
      if (!panel || !select) return;

      if (select.options.length === 0) {
        planets.forEach((planet, index) => {
          const option = document.createElement('option');
          option.value = String(index);
          option.textContent = `${index + 1}. ${planet.name}`;
          select.appendChild(option);
        });
      }

      const defaultIndex = Math.max(0, Math.min(planets.length - 1, currentPlanetIndex || 0));
      select.value = String(defaultIndex);
      panel.style.display = 'flex';
    }

    function closeMinigameTestMenu() {
      SoundManager.play('click');
      SoundManager.playMenuTheme();
      const panel = document.getElementById('minigame-test-menu');
      if (panel) panel.style.display = 'none';
    }

    function startMinigameTestMode() {
      SoundManager.play('click');
      SoundManager.resume();
      let nameInput = document.getElementById('player-name').value || 'Tester';
      nameInput = filterProfanity(nameInput);
      const difficultyValue = (document.getElementById('difficulty-select')?.value || 'sedang');
      const selectedPlanet = parseInt(document.getElementById('test-planet-select')?.value || '0', 10);
      const safePlanetIndex = Number.isFinite(selectedPlanet)
        ? Math.max(0, Math.min(planets.length - 1, selectedPlanet))
        : 0;
      applyDifficulty(difficultyValue);
      playerData.name = nameInput;
      const panel = document.getElementById('minigame-test-menu');
      if (panel) panel.style.display = 'none';
      document.getElementById('main-menu').style.display = 'none';
      currentPlanetIndex = safePlanetIndex;
      playerHP = 100;
      score = 0;
      isPaused = false;
      gameState = GameState.EXPLORATION;
      initExploration();
      showInGameNotification(`Mode Minigame aktif di Planet ${planets[safePlanetIndex].name}. Selamat mencoba!`);
    }

    // --- GAME DATA PLANET & QUIZ BANK ---
    const planets = [
      {
        name: "Merkurius",
        color: "#8C7853",
        envType: "heat",
        artifactType: "rock",
        infoFragments: [
          { short: "Orbit 88 hari", detail: "Merkurius mengelilingi Matahari hanya dalam 88 hari Bumi." },
          { short: "Suhu Ekstrem", detail: "Suhu di Merkurius bisa sekitar 430°C pada siang hari dan sekitar -180°C pada malam hari." },
          { short: "Eksosfer Tipis", detail: "Merkurius hampir tidak punya atmosfer, hanya eksosfer sangat tipis, sehingga langit tampak hitam." },
          { short: "Penuh Kawah", detail: "Permukaan Merkurius penuh kawah karena sering terkena hantaman meteoroid." },
          { short: "Hari Sangat Panjang", detail: "Satu hari Matahari di Merkurius sekitar 176 hari Bumi, lebih lama daripada 1 tahunnya." }
        ],
        quiz: [
          { question: "Berapa lama revolusi Merkurius mengelilingi Matahari?", options: ["88 hari Bumi", "365 hari Bumi", "24 jam", "12 tahun Bumi"], correct: 0 },
          { question: "Mengapa suhu siang di Merkurius sangat panas?", options: ["Karena ada banyak api", "Karena dekat dengan Matahari", "Karena gesekan antarbatu", "Karena inti magma terbuka"], correct: 1 },
          { question: "Bagaimana warna langit di Merkurius pada siang hari?", options: ["Biru cerah", "Hitam gelap", "Merah membara", "Putih susu"], correct: 1 },
          { question: "Mengapa permukaan Merkurius memiliki banyak kawah?", options: ["Bekas tambang", "Letusan gunung api aktif", "Sering dihantam meteoroid", "Erosi air hujan"], correct: 2 },
          { question: "Di Merkurius, mana yang lebih lama?", options: ["1 hari Matahari (176 hari Bumi)", "1 tahun Merkurius (88 hari Bumi)", "Keduanya sama", "Tidak bisa dibandingkan"], correct: 0 }
        ]
      },
      {
        name: "Venus",
        color: "#FFC649",
        envType: "heat",
        artifactType: "probe",
        infoFragments: [
          { short: "Atmosfer Beracun", detail: "Atmosfer Venus didominasi karbon dioksida dengan awan asam sulfat." },
          { short: "Suhu 462°C", detail: "Venus adalah planet terpanas karena efek rumah kaca yang sangat kuat." },
          { short: "Tekanan Tinggi", detail: "Tekanan udara Venus sekitar 92 kali tekanan udara di permukaan Bumi." },
          { short: "Rotasi Terbalik", detail: "Venus berputar dari timur ke barat, sehingga Matahari tampak terbit dari barat." },
          { short: "Bintang Kejora", detail: "Venus sering tampak sangat terang saat subuh atau senja dan dijuluki Bintang Kejora." }
        ],
        quiz: [
          { question: "Gas apa yang paling dominan di atmosfer Venus?", options: ["Oksigen", "Karbon dioksida", "Nitrogen", "Hidrogen"], correct: 1 },
          { question: "Berapa suhu rata-rata permukaan Venus?", options: ["100°C", "462°C", "1000°C", "50°C"], correct: 1 },
          { question: "Di Venus, Matahari tampak terbit dari arah mana?", options: ["Timur", "Barat", "Utara", "Selatan"], correct: 1 },
          { question: "Apa julukan Venus saat terlihat sangat terang di langit?", options: ["Planet Merah", "Bintang Kejora", "Raksasa Gas", "Planet Cincin"], correct: 1 },
          { question: "Apa penyebab utama Venus menjadi planet terpanas?", options: ["Paling dekat Matahari", "Efek rumah kaca ekstrem", "Banyak gunung api aktif", "Inti planet terbuka"], correct: 1 }
        ]
      },
      {
        name: "Bumi",
        color: "#4169E1",
        envType: "normal",
        artifactType: "satellite",
        infoFragments: [
          { short: "71% Air", detail: "Sekitar 71% permukaan Bumi tertutup air, terutama lautan." },
          { short: "Ozon Pelindung", detail: "Lapisan ozon membantu melindungi makhluk hidup dari radiasi ultraviolet berlebih." },
          { short: "Satu Bulan", detail: "Bumi memiliki satu satelit alami, yaitu Bulan." },
          { short: "Suhu 15°C", detail: "Suhu rata-rata Bumi sekitar 15°C, mendukung air tetap cair." },
          { short: "Ada Kehidupan", detail: "Bumi adalah satu-satunya planet yang diketahui memiliki kehidupan." }
        ],
        quiz: [
          { question: "Berapa persen permukaan Bumi yang tertutup air?", options: ["30%", "50%", "71%", "90%"], correct: 2 },
          { question: "Apa fungsi utama lapisan ozon di Bumi?", options: ["Menahan meteor", "Menyerap UV berbahaya", "Membentuk hujan", "Menaikkan suhu Bumi"], correct: 1 },
          { question: "Berapa jumlah satelit alami Bumi?", options: ["Satu", "Dua", "Tiga", "Tidak ada"], correct: 0 },
          { question: "Berapa suhu rata-rata permukaan Bumi?", options: ["0°C", "15°C", "30°C", "100°C"], correct: 1 },
          { question: "Apa keunikan utama Bumi dibanding planet lain yang diketahui?", options: ["Paling besar", "Punya cincin", "Memiliki kehidupan", "Berwarna merah"], correct: 2 }
        ]
      },
      {
        name: "Mars",
        color: "#CD5C5C",
        envType: "dust",
        artifactType: "rover",
        infoFragments: [
          { short: "Tanah Berkarat", detail: "Warna merah Mars berasal dari oksida besi (karat) pada permukaannya." },
          { short: "Gunung Tertinggi", detail: "Olympus Mons di Mars adalah gunung tertinggi di Tata Surya, sekitar 22 km." },
          { short: "2 Bulan Kecil", detail: "Mars memiliki dua bulan kecil bernama Phobos dan Deimos." },
          { short: "Badai Debu", detail: "Badai debu di Mars bisa sangat besar dan berlangsung lama." },
          { short: "Robot Rover", detail: "Mars diteliti oleh rover seperti Curiosity dan Perseverance." }
        ],
        quiz: [
          { question: "Mengapa Mars terlihat berwarna merah?", options: ["Karena lava panas", "Karena oksida besi (karat)", "Karena pantulan samudra", "Karena nitrogen tinggi"], correct: 1 },
          { question: "Apa nama gunung tertinggi di Mars sekaligus Tata Surya?", options: ["Everest", "Olympus Mons", "Fuji", "Bromo"], correct: 1 },
          { question: "Apa nama dua bulan milik Mars?", options: ["Titan dan Io", "Phobos dan Deimos", "Luna dan Sol", "Ganymede dan Callisto"], correct: 1 },
          { question: "Fenomena cuaca yang sering terjadi di Mars adalah...", options: ["Hujan asam", "Badai debu", "Tsunami laut", "Hujan salju tebal"], correct: 1 },
          { question: "Salah satu rover penjelajah yang ditugaskan ke Mars adalah...", options: ["Curiosity", "Apollo", "Sputnik", "Voyager"], correct: 0 }
        ]
      },
      {
        name: "Jupiter",
        color: "#DAA520",
        envType: "gas",
        artifactType: "probe",
        infoFragments: [
          { short: "Raksasa Gas", detail: "Volume Jupiter sangat besar, kira-kira setara lebih dari 1.300 Bumi." },
          { short: "Bintik Merah", detail: "Bintik Merah Besar adalah badai raksasa yang bertahan sangat lama di atmosfer Jupiter." },
          { short: "95+ Bulan", detail: "Jupiter memiliki sangat banyak bulan; empat yang terbesar adalah Io, Europa, Ganymede, dan Callisto." },
          { short: "Gas H dan He", detail: "Jupiter didominasi hidrogen dan helium." },
          { short: "Rotasi Cepat", detail: "Satu hari di Jupiter hanya sekitar 10 jam." }
        ],
        quiz: [
          { question: "Kira-kira berapa Bumi yang dapat termuat dalam volume Jupiter?", options: ["Sekitar 10", "Sekitar 100", "Lebih dari 1.300", "Lebih dari 5.000"], correct: 2 },
          { question: "Apa nama badai raksasa di atmosfer Jupiter?", options: ["Mata Setan", "Bintik Merah Besar", "Topan Putih", "Lubang Hitam"], correct: 1 },
          { question: "Berapa lama satu hari (rotasi) di Jupiter?", options: ["24 jam", "Sekitar 10 jam", "100 jam", "1 tahun"], correct: 1 },
          { question: "Gas utama penyusun Jupiter adalah...", options: ["Oksigen dan nitrogen", "Metana dan amonia", "Hidrogen dan helium", "Karbon dioksida"], correct: 2 },
          { question: "Perkiraan jumlah bulan Jupiter yang telah diketahui saat ini adalah...", options: ["1", "Sekitar 10", "Lebih dari 95", "Tidak punya bulan"], correct: 2 }
        ]
      },
      {
        name: "Saturnus",
        color: "#F4A460",
        envType: "gas",
        artifactType: "crystal",
        infoFragments: [
          { short: "Cincin Es", detail: "Cincin Saturnus tersusun dari bongkahan es, batuan, dan debu." },
          { short: "Massa Jenis Rendah", detail: "Massa jenis rata-rata Saturnus lebih rendah dari air." },
          { short: "Bulan Titan", detail: "Titan adalah bulan terbesar Saturnus dan punya atmosfer tebal kaya nitrogen." },
          { short: "Angin Kencang", detail: "Kecepatan angin di Saturnus dapat mencapai sekitar 1.800 km/jam." },
          { short: "Cincin Tipis", detail: "Cincin Saturnus sangat lebar, tetapi umumnya hanya setebal puluhan meter." }
        ],
        quiz: [
          { question: "Cincin Saturnus terutama tersusun dari...", options: ["Emas dan perak", "Es dan batuan", "Gas beracun", "Cahaya murni"], correct: 1 },
          { question: "Secara teoritis, apa yang terjadi jika Saturnus ditempatkan di lautan air raksasa?", options: ["Tenggelam", "Meledak", "Mengapung", "Menguap"], correct: 2 },
          { question: "Apa nama bulan terbesar milik Saturnus?", options: ["Ganymede", "Titan", "Europa", "Phobos"], correct: 1 },
          { question: "Kecepatan angin di atmosfer Saturnus dapat mencapai sekitar...", options: ["100 km/jam", "500 km/jam", "1.800 km/jam", "10 km/jam"], correct: 2 },
          { question: "Ketebalan sebagian besar cincin Saturnus kira-kira...", options: ["Puluhan meter", "1 kilometer", "100 kilometer", "1 juta kilometer"], correct: 0 }
        ]
      },
      {
        name: "Uranus",
        color: "#4FD0E7",
        envType: "ice",
        artifactType: "diamond",
        infoFragments: [
          { short: "Miring 98°", detail: "Sumbu rotasi Uranus sangat miring, sekitar 98°, sehingga tampak seperti berguling." },
          { short: "Warna Biru", detail: "Gas metana di atmosfer Uranus menyerap cahaya merah sehingga planet tampak biru kehijauan." },
          { short: "Sangat Dingin", detail: "Suhu minimum atmosfer Uranus pernah tercatat sekitar -224°C." },
          { short: "Cincin Ikut Miring", detail: "Karena sumbunya sangat miring, sistem cincin Uranus tampak unik saat diamati dari Bumi." },
          { short: "Raksasa Es", detail: "Bagian dalam Uranus kaya campuran air, amonia, dan metana." }
        ],
        quiz: [
          { question: "Apa keunikan utama rotasi Uranus?", options: ["Sangat cepat", "Sumbunya sangat miring", "Berhenti berputar", "Berputar zig-zag"], correct: 1 },
          { question: "Gas apa yang membuat Uranus tampak biru kehijauan?", options: ["Oksigen", "Metana", "Helium", "Nitrogen"], correct: 1 },
          { question: "Berapa suhu minimum atmosfer Uranus yang pernah dicatat?", options: ["-50°C", "-100°C", "-224°C", "0°C"], correct: 2 },
          { question: "Bagaimana orientasi cincin Uranus jika dilihat terkait kemiringan planetnya?", options: ["Selalu datar horizontal", "Tampak sangat miring/nyaris vertikal", "Tidak punya cincin", "Bentuknya spiral"], correct: 1 },
          { question: "Material utama bagian dalam Uranus kaya akan...", options: ["Batu cair saja", "Air, amonia, dan metana", "Gas oksigen murni", "Logam besi"], correct: 1 }
        ]
      },
      {
        name: "Neptunus",
        color: "#4169E1",
        envType: "wind",
        artifactType: "diamond",
        infoFragments: [
          { short: "Planet ke-8", detail: "Neptunus adalah planet kedelapan dari Matahari." },
          { short: "Angin Sangat Cepat", detail: "Neptunus memiliki angin tercepat di Tata Surya, dapat melampaui 2.100 km/jam." },
          { short: "165 Tahun", detail: "Satu tahun Neptunus setara sekitar 165 tahun Bumi." },
          { short: "Hujan Berlian", detail: "Di bagian dalam Neptunus diduga terjadi proses pembentukan hujan berlian." },
          { short: "Bintik Gelap", detail: "Neptunus memiliki badai besar yang dikenal sebagai Bintik Gelap Besar." }
        ],
        quiz: [
          { question: "Neptunus berada pada urutan planet ke berapa dari Matahari?", options: ["Ke-1", "Ke-5", "Ke-8", "Ke-9"], correct: 2 },
          { question: "Rekor cuaca yang dimiliki Neptunus adalah...", options: ["Planet terpanas", "Angin tercepat", "Paling kering", "Paling tenang"], correct: 1 },
          { question: "Berapa lama 1 tahun di Neptunus?", options: ["10 tahun Bumi", "88 hari Bumi", "165 tahun Bumi", "1000 tahun Bumi"], correct: 2 },
          { question: "Fenomena yang diduga terjadi jauh di dalam Neptunus adalah...", options: ["Hujan air", "Hujan asam", "Hujan berlian", "Hujan emas"], correct: 2 },
          { question: "Apa nama badai besar yang pernah diamati di Neptunus?", options: ["Bintik Merah Besar", "Bintik Gelap Besar", "Topan Putih", "Mata Biru"], correct: 1 }
        ]
      }
    ];

    const planetMinigameProgression = [
      ['excavation', 'generator', 'signal'],
      ['excavation', 'signal', 'drill'],
      ['generator', 'drill', 'microscope'],
      ['signal', 'microscope', 'sensorCircuit'],
      ['drill', 'sensorCircuit', 'spectrometer'],
      ['microscope', 'sensorCircuit', 'spectrometer'],
      ['spectrometer', 'sensorCircuit', 'reactor'],
      ['sensorCircuit', 'spectrometer', 'reactor']
    ];

    function getPlanetMinigameTypes(planetIndex) {
      const safeIndex = Math.max(0, Math.min(planets.length - 1, planetIndex));
      return planetMinigameProgression[safeIndex] || planetMinigameProgression[0];
    }

    function getFragmentMinigameSequence(planetIndex, fragmentCount) {
      const availableTypes = getPlanetMinigameTypes(planetIndex);
      const sequence = [];
      for (let i = 0; i < fragmentCount; i++) {
        sequence.push(availableTypes[i % availableTypes.length]);
      }
      return sequence;
    }

    const difficultyConfigs = {
      mudah: {
        travelDuration: 22,
        asteroidSpawnMult: 0.78,
        asteroidSpeedMult: 0.85,
        asteroidHpBonus: 0,
        collisionDamage: 8,
        oxygenDrainPerSec: 2.2,
        oxygenHpTickDamage: 8,
        obstacleCountMin: 8,
        obstacleCountMax: 9,
        oxygenTankCount: 4,
        scanRequired: 68,
        quizWrongDamage: 15,
        excavationTargetCleared: 320,
        excavationBrushRadius: 34,
        signalTolerance: 7,
        signalStabilityGainRate: 34,
        signalStabilityDecayRate: 42,
        drillDepthRate: 17,
        drillHeatGainRate: 21,
        drillCoolRate: 46,
        drillOverheatThreshold: 105
      },
      sedang: {
        travelDuration: 20,
        asteroidSpawnMult: 1,
        asteroidSpeedMult: 1,
        asteroidHpBonus: 0,
        collisionDamage: 10,
        oxygenDrainPerSec: 3,
        oxygenHpTickDamage: 10,
        obstacleCountMin: 10,
        obstacleCountMax: 11,
        oxygenTankCount: 3,
        scanRequired: 80,
        quizWrongDamage: 20,
        excavationTargetCleared: 350,
        excavationBrushRadius: 30,
        signalTolerance: 5,
        signalStabilityGainRate: 30,
        signalStabilityDecayRate: 50,
        drillDepthRate: 15,
        drillHeatGainRate: 25,
        drillCoolRate: 40,
        drillOverheatThreshold: 100
      },
      sulit: {
        travelDuration: 18,
        asteroidSpawnMult: 1.22,
        asteroidSpeedMult: 1.2,
        asteroidHpBonus: 1,
        collisionDamage: 12,
        oxygenDrainPerSec: 3.6,
        oxygenHpTickDamage: 12,
        obstacleCountMin: 12,
        obstacleCountMax: 13,
        oxygenTankCount: 2,
        scanRequired: 92,
        quizWrongDamage: 25,
        excavationTargetCleared: 380,
        excavationBrushRadius: 26,
        signalTolerance: 3,
        signalStabilityGainRate: 26,
        signalStabilityDecayRate: 58,
        drillDepthRate: 13,
        drillHeatGainRate: 29,
        drillCoolRate: 34,
        drillOverheatThreshold: 95
      }
    };

    const planetScienceFacts = {
      Merkurius: { temp: '-180°C sampai 430°C', size: 'Diameter 4.879 km (sekitar 38% Bumi)', composition: 'Batuan silikat + inti besi besar' },
      Venus: { temp: 'Rata-rata 462°C', size: 'Diameter 12.104 km (sekitar 95% Bumi)', composition: 'Batuan silikat + atmosfer CO2 tebal' },
      Bumi: { temp: 'Rata-rata 15°C', size: 'Diameter 12.742 km (patokan 100%)', composition: 'Silikat, besi-nikel, air cair' },
      Mars: { temp: 'Rata-rata -63°C', size: 'Diameter 6.779 km (sekitar 53% Bumi)', composition: 'Batuan beroksida besi + es kutub' },
      Jupiter: { temp: 'Sekitar -145°C', size: 'Diameter 139.820 km (sekitar 11 kali Bumi)', composition: 'Dominan hidrogen + helium' },
      Saturnus: { temp: 'Sekitar -178°C', size: 'Diameter 116.460 km (sekitar 9 kali Bumi)', composition: 'Hidrogen + helium, cincin es-batu' },
      Uranus: { temp: 'Rata-rata sekitar -195°C (minimum ~-224°C)', size: 'Diameter 50.724 km (sekitar 4 kali Bumi)', composition: 'Es air, amonia, metana + H/He' },
      Neptunus: { temp: 'Sekitar -214°C (awan atas)', size: 'Diameter 49.244 km (sekitar 4 kali Bumi)', composition: 'Es air, amonia, metana + H/He' }
    };

    const planetExplorationVisualProfiles = {
      Merkurius: {
        skyTop: '#9b6a3d',
        skyBottom: '#140a08',
        particleColor: '245,185,120',
        particleCount: 30,
        particleSpeedMin: 1.4,
        particleSpeedMax: 4.4,
        particleSizeMin: 0.8,
        particleSizeMax: 3.2,
        particleAlphaMin: 0.24,
        particleAlphaMax: 0.52,
        overlayColor: '255,116,38',
        overlayAlpha: 0.14,
        overlayPulse: 0.045,
        vignetteAlpha: 0.2,
        vignetteRadius: 330,
        windStrengthMult: 1.0
      },
      Venus: {
        skyTop: '#b08534',
        skyBottom: '#160d08',
        particleColor: '255,198,118',
        particleCount: 40,
        particleSpeedMin: 0.9,
        particleSpeedMax: 3.1,
        particleSizeMin: 1.0,
        particleSizeMax: 3.4,
        particleAlphaMin: 0.28,
        particleAlphaMax: 0.56,
        overlayColor: '255,171,84',
        overlayAlpha: 0.16,
        overlayPulse: 0.03,
        vignetteAlpha: 0.26,
        vignetteRadius: 320,
        windStrengthMult: 1.0
      },
      Bumi: {
        skyTop: '#4d88d2',
        skyBottom: '#08131d',
        particleColor: '180,220,255',
        particleCount: 28,
        particleSpeedMin: 0.8,
        particleSpeedMax: 2.4,
        particleSizeMin: 0.8,
        particleSizeMax: 2.5,
        particleAlphaMin: 0.18,
        particleAlphaMax: 0.34,
        overlayColor: '98,176,255',
        overlayAlpha: 0.08,
        overlayPulse: 0.02,
        vignetteAlpha: 0.12,
        vignetteRadius: 350,
        windStrengthMult: 1.0
      },
      Mars: {
        skyTop: '#9a4331',
        skyBottom: '#120807',
        particleColor: '206,118,76',
        particleCount: 38,
        particleSpeedMin: 1.1,
        particleSpeedMax: 3.6,
        particleSizeMin: 1.0,
        particleSizeMax: 3.3,
        particleAlphaMin: 0.24,
        particleAlphaMax: 0.5,
        overlayColor: '195,69,38',
        overlayAlpha: 0.14,
        overlayPulse: 0.03,
        vignetteAlpha: 0.22,
        vignetteRadius: 330,
        windStrengthMult: 1.0
      },
      Jupiter: {
        skyTop: '#8d6744',
        skyBottom: '#120b07',
        particleColor: '219,182,126',
        particleCount: 36,
        particleSpeedMin: 1.0,
        particleSpeedMax: 3.2,
        particleSizeMin: 0.9,
        particleSizeMax: 3.2,
        particleAlphaMin: 0.22,
        particleAlphaMax: 0.44,
        overlayColor: '217,154,82',
        overlayAlpha: 0.14,
        overlayPulse: 0.025,
        vignetteAlpha: 0.86,
        vignetteRadius: 265,
        windStrengthMult: 1.08
      },
      Saturnus: {
        skyTop: '#a5845e',
        skyBottom: '#16100a',
        particleColor: '232,196,142',
        particleCount: 34,
        particleSpeedMin: 0.9,
        particleSpeedMax: 2.9,
        particleSizeMin: 0.9,
        particleSizeMax: 3.0,
        particleAlphaMin: 0.2,
        particleAlphaMax: 0.4,
        overlayColor: '236,195,124',
        overlayAlpha: 0.12,
        overlayPulse: 0.025,
        vignetteAlpha: 0.84,
        vignetteRadius: 275,
        windStrengthMult: 1.05
      },
      Uranus: {
        skyTop: '#4aaac3',
        skyBottom: '#07131e',
        particleColor: '180,236,255',
        particleCount: 42,
        particleSpeedMin: 1.2,
        particleSpeedMax: 3.8,
        particleSizeMin: 0.9,
        particleSizeMax: 3.1,
        particleAlphaMin: 0.24,
        particleAlphaMax: 0.48,
        overlayColor: '140,240,255',
        overlayAlpha: 0.15,
        overlayPulse: 0.03,
        vignetteAlpha: 0.88,
        vignetteRadius: 260,
        windStrengthMult: 1.12
      },
      Neptunus: {
        skyTop: '#2e6cbc',
        skyBottom: '#040b13',
        particleColor: '156,208,255',
        particleCount: 46,
        particleSpeedMin: 1.4,
        particleSpeedMax: 4.2,
        particleSizeMin: 0.9,
        particleSizeMax: 3.2,
        particleAlphaMin: 0.24,
        particleAlphaMax: 0.5,
        overlayColor: '82,132,255',
        overlayAlpha: 0.16,
        overlayPulse: 0.03,
        vignetteAlpha: 0.9,
        vignetteRadius: 245,
        windStrengthMult: 1.2
      }
    };

    function clamp01(value) {
      return Math.max(0, Math.min(1, value));
    }

    function getPlanetExplorationVisualProfile(planetName) {
      return planetExplorationVisualProfiles[planetName] || {
        skyTop: '#2b2b2b',
        skyBottom: '#000000',
        particleColor: '220,220,220',
        particleCount: 28,
        particleSpeedMin: 0.9,
        particleSpeedMax: 2.6,
        particleSizeMin: 0.8,
        particleSizeMax: 2.5,
        particleAlphaMin: 0.16,
        particleAlphaMax: 0.34,
        overlayColor: '255,255,255',
        overlayAlpha: 0.08,
        overlayPulse: 0.02,
        vignetteAlpha: 0.3,
        vignetteRadius: 320,
        windStrengthMult: 1.0
      };
    }

    let selectedDifficulty = 'sedang';
    let gameBalance = { ...difficultyConfigs.sedang };

    function applyDifficulty(level) {
      const safeLevel = difficultyConfigs[level] ? level : 'sedang';
      selectedDifficulty = safeLevel;
      gameBalance = { ...difficultyConfigs[safeLevel] };
    }

    // --- VARIABLES ---
    const GameState = { 
      START:'start', MENU:'menu', ROADMAP:'roadmap', SPACE_TRAVEL:'space_travel', APPROACHING_PLANET: 'approaching_planet', UPGRADE_SCREEN: 'upgrade_screen', LEAVING_PLANET: 'leaving_planet',
      EXPLORATION:'exploration', EXCAVATION:'excavation', SIGNAL:'signal', DRILLING:'drilling', GENERATOR:'generator', SPECTROMETER:'spectrometer', SENSOR_CIRCUIT:'sensor_circuit', MICROSCOPE:'microscope', REACTOR:'reactor', 
      ARTIFACT_INFO:'artifact_info', READING:'reading', BATTLE:'battle', GAME_OVER:'game_over', WIN:'win',
      MULTIPLAYER_BATTLE:'multiplayer_battle', MULTIPLAYER_RESULT:'multiplayer_result',
      CREDITS:'credits'
    };
    let gameState = GameState.START;
    let currentPlanetIndex = 0;
    let playerHP = 100;
    let score = 0;
    let isPaused = false;
    let progressExpanded = false;
    let stats = { asteroidsDestroyed: 0, accuracy: 0, quizCorrect: 0, quizTotal: 0 };
    let creditsY = 0;
    let creditsDragStartY = null;
    let creditsDragLastY = null;
    let creditsAutoScroll = true;

    // Space Travel
    let ship = { x: 400, y: 500, width: 60, height: 60, speed: 300 }; 
    let shipLevel = 0;
    let bullets = [], asteroids = [], travelTime = 0, travelDuration = 20, asteroidKills = 0, stars = [], autoShootTimer = 0, particles = [], combo = 0, maxCombo = 0, floatingTexts = [], comboTimer = 0, phaseHitTaken = false;
    let shipHitFxTimer = 0;
    let approachTimer = 0; let leavingTimer = 0; let leavingShipY = 0; let upgradeTimer = 0;

    // Exploration
    let astronaut = { x: 400, y: 250, width: 50, height: 70, speed: 180 }; 
    let explorationPhase = 'start';
    let infoFragments = [];
    let collectedFragments = 0;
    let collectedFragmentsPlanetIndex = 0;
    let totalFragments = 5;
    let obstacles = [];
    let envParticles = [];
    let currentOxygen = 100;
    let oxygenHpDrainTickTimer = 0;
    let oxygenTanks = [];
    let scanTarget = null;
    let scanProgress = 0;
    let scanRequired = 80;
    let isScanning = false;
    let scanPromptShown = false;
    let scanPromptFlash = 0;
    let scanReleaseHintCooldown = 0;
    let activeObstacleHits = 0; 

    // MINIGAMES
    let artifactInfoTimer = 0;
    let activeFragment = null;
    let excavationGrid = [];
    let excavationCleared = 0;
    let excavationTargetCleared = 350;
    let excavationBrushRadius = 30;

    let signalTarget = 50;
    let signalCurrent = 0;
    let signalStability = 0;

    let drillDepth = 0;
    let drillHeat = 0;
    let isDrilling = false;

    let generatorSwitches = [];
    let generatorSwitchOrder = [];
    let generatorInputOrder = [];

    let activeSliderControl = null;

    let spectrometerTarget = { wave: 50, gain: 50, focus: 50 };
    let spectrometerCurrent = { wave: 30, gain: 30, focus: 30 };
    let spectrometerTolerance = 6;
    let spectrometerCalibratedSteps = 0;
    let spectrometerRequiredSteps = 3;

    let sensorCircuitNodes = [];
    let sensorCircuitEdges = [];
    let sensorCircuitRequiredEdges = [];
    let sensorCircuitAllowedEdges = [];
    let sensorCircuitSelectedNode = -1;
    let sensorCircuitMode = 'activate';
    let sensorCircuitSource = 0;
    let sensorCircuitTarget = 5;
    let sensorCircuitHintText = '';
    let sensorCircuitEnergyUsed = 0;
    let sensorCircuitEnergyBudget = 6;

    let microscopeLens = { x: 480, y: 280, radius: 74 };
    let microscopeMarker = { x: 500, y: 280 };
    let microscopeFocusTarget = 52;
    let microscopeFocusCurrent = 20;
    let microscopeHintPulse = 0;
    let microscopeTolerance = 5;

    let reactorValues = { temp: 35, pressure: 65, flow: 45 };
    let reactorStableSteps = 0;
    let reactorRequiredStableSteps = 3;
    let reactorSafeZones = {
      temp: { min: 44, max: 56 },
      pressure: { min: 47, max: 61 },
      flow: { min: 38, max: 52 }
    };

    // Reading
    let readingTimer = 60;
    let returnState = null;

    function pickWeightedAsteroidVariant(pool) {
      if (!pool || pool.length === 0) return null;
      const totalWeight = pool.reduce((sum, item) => sum + item.weight, 0);
      let roll = Math.random() * totalWeight;
      for (const item of pool) {
        roll -= item.weight;
        if (roll <= 0) return item;
      }
      return pool[pool.length - 1];
    }

    function getBaseAsteroidPool(planetIndex) {
      const variants = {
        sType: {
          key: 'asteroid4SType',
          damageSprites: { retak: null, critical: 'asteroid4STypeCritical' },
          hpMult: 1.08,
          sizeMult: 1.02,
          speedMult: 1.02,
          scoreBonusMult: 1.06,
          scienceLabel: 'S-type (batuan silikat)'
        },
        mType: {
          key: 'asteroidElite1ArmoredMetallic',
          damageSprites: { retak: null, critical: 'asteroidElite1ArmoredMetallicCritical' },
          hpMult: 1.16,
          sizeMult: 1.08,
          speedMult: 0.96,
          scoreBonusMult: 1.12,
          scienceLabel: 'M-type (kaya logam)'
        },
        fractured: {
          key: 'asteroidElite2FracturedSpike',
          damageSprites: { retak: null, critical: 'asteroidElite2FracturedSpikeCritical' },
          hpMult: 1.12,
          sizeMult: 1.07,
          speedMult: 1.04,
          scoreBonusMult: 1.1,
          scienceLabel: 'Fragmen tumbukan (pecahan asteroid)'
        },
        cType: {
          key: 'asteroidElite3CarbonFortress',
          damageSprites: { retak: null, critical: 'asteroidElite3CarbonFortressCritical' },
          hpMult: 1.2,
          sizeMult: 1.12,
          speedMult: 0.92,
          scoreBonusMult: 1.14,
          scienceLabel: 'C-type (karbon gelap)'
        },
        icy: {
          key: 'asteroidElite4IcyHybrid',
          damageSprites: { retak: null, critical: 'asteroidElite4IcyHybridCritical' },
          hpMult: 1.1,
          sizeMult: 1.1,
          speedMult: 0.98,
          scoreBonusMult: 1.1,
          scienceLabel: 'Icy body (es + debu)'
        }
      };

      const byEnvType = {
        heat: [
          { ...variants.sType, weight: 45 },
          { ...variants.mType, weight: 24 },
          { ...variants.fractured, weight: 18 },
          { ...variants.cType, weight: 9 },
          { ...variants.icy, weight: 4 }
        ],
        normal: [
          { ...variants.sType, weight: 40 },
          { ...variants.cType, weight: 24 },
          { ...variants.mType, weight: 15 },
          { ...variants.fractured, weight: 15 },
          { ...variants.icy, weight: 6 }
        ],
        dust: [
          { ...variants.fractured, weight: 34 },
          { ...variants.sType, weight: 28 },
          { ...variants.mType, weight: 20 },
          { ...variants.cType, weight: 14 },
          { ...variants.icy, weight: 4 }
        ],
        gas: [
          { ...variants.cType, weight: 36 },
          { ...variants.sType, weight: 22 },
          { ...variants.icy, weight: 20 },
          { ...variants.fractured, weight: 12 },
          { ...variants.mType, weight: 10 }
        ],
        ice: [
          { ...variants.icy, weight: 42 },
          { ...variants.cType, weight: 28 },
          { ...variants.sType, weight: 12 },
          { ...variants.fractured, weight: 10 },
          { ...variants.mType, weight: 8 }
        ],
        wind: [
          { ...variants.icy, weight: 38 },
          { ...variants.cType, weight: 30 },
          { ...variants.fractured, weight: 18 },
          { ...variants.sType, weight: 8 },
          { ...variants.mType, weight: 6 }
        ]
      };

      const safeIndex = Math.max(0, Math.min(planets.length - 1, planetIndex));
      const envType = planets[safeIndex]?.envType || 'normal';
      return byEnvType[envType] || byEnvType.normal;
    }

    function pickAsteroidVariant(planetIndex) {
      return pickWeightedAsteroidVariant(getBaseAsteroidPool(planetIndex));
    }

    function getExplorationObstaclePool(planetIndex) {
      const byEnvType = {
        heat: [
          { key: 'asteroid4SType', weight: 44, sizeMin: 34, sizeMax: 52, strength: 1.08 },
          { key: 'asteroidElite1ArmoredMetallic', weight: 28, sizeMin: 40, sizeMax: 62, strength: 1.14 },
          { key: 'asteroidElite2FracturedSpike', weight: 18, sizeMin: 38, sizeMax: 58, strength: 1.12 },
          { key: 'asteroidElite3CarbonFortress', weight: 7, sizeMin: 42, sizeMax: 64, strength: 1.18 },
          { key: 'asteroidElite4IcyHybrid', weight: 3, sizeMin: 40, sizeMax: 60, strength: 1.09 }
        ],
        normal: [
          { key: 'asteroid4SType', weight: 40, sizeMin: 34, sizeMax: 54, strength: 1.1 },
          { key: 'asteroidElite3CarbonFortress', weight: 24, sizeMin: 40, sizeMax: 64, strength: 1.16 },
          { key: 'asteroidElite1ArmoredMetallic', weight: 14, sizeMin: 40, sizeMax: 62, strength: 1.15 },
          { key: 'asteroidElite2FracturedSpike', weight: 16, sizeMin: 38, sizeMax: 60, strength: 1.13 },
          { key: 'asteroidElite4IcyHybrid', weight: 6, sizeMin: 38, sizeMax: 58, strength: 1.1 }
        ],
        dust: [
          { key: 'asteroidElite2FracturedSpike', weight: 34, sizeMin: 40, sizeMax: 62, strength: 1.16 },
          { key: 'asteroid4SType', weight: 30, sizeMin: 36, sizeMax: 56, strength: 1.12 },
          { key: 'asteroidElite1ArmoredMetallic', weight: 18, sizeMin: 42, sizeMax: 64, strength: 1.17 },
          { key: 'asteroidElite3CarbonFortress', weight: 14, sizeMin: 44, sizeMax: 66, strength: 1.18 },
          { key: 'asteroidElite4IcyHybrid', weight: 4, sizeMin: 40, sizeMax: 62, strength: 1.12 }
        ],
        gas: [
          { key: 'asteroidElite3CarbonFortress', weight: 36, sizeMin: 46, sizeMax: 72, strength: 1.2 },
          { key: 'asteroid4SType', weight: 22, sizeMin: 38, sizeMax: 58, strength: 1.12 },
          { key: 'asteroidElite4IcyHybrid', weight: 20, sizeMin: 44, sizeMax: 70, strength: 1.18 },
          { key: 'asteroidElite2FracturedSpike', weight: 12, sizeMin: 40, sizeMax: 64, strength: 1.15 },
          { key: 'asteroidElite1ArmoredMetallic', weight: 10, sizeMin: 42, sizeMax: 66, strength: 1.17 }
        ],
        ice: [
          { key: 'asteroidElite4IcyHybrid', weight: 42, sizeMin: 46, sizeMax: 74, strength: 1.2 },
          { key: 'asteroidElite3CarbonFortress', weight: 28, sizeMin: 44, sizeMax: 70, strength: 1.19 },
          { key: 'asteroid4SType', weight: 12, sizeMin: 38, sizeMax: 58, strength: 1.12 },
          { key: 'asteroidElite2FracturedSpike', weight: 10, sizeMin: 40, sizeMax: 62, strength: 1.14 },
          { key: 'asteroidElite1ArmoredMetallic', weight: 8, sizeMin: 42, sizeMax: 64, strength: 1.16 }
        ],
        wind: [
          { key: 'asteroidElite4IcyHybrid', weight: 38, sizeMin: 46, sizeMax: 72, strength: 1.2 },
          { key: 'asteroidElite3CarbonFortress', weight: 30, sizeMin: 44, sizeMax: 70, strength: 1.19 },
          { key: 'asteroidElite2FracturedSpike', weight: 18, sizeMin: 40, sizeMax: 64, strength: 1.16 },
          { key: 'asteroid4SType', weight: 8, sizeMin: 38, sizeMax: 58, strength: 1.12 },
          { key: 'asteroidElite1ArmoredMetallic', weight: 6, sizeMin: 42, sizeMax: 64, strength: 1.16 }
        ]
      };

      const safeIndex = Math.max(0, Math.min(planets.length - 1, planetIndex));
      const envType = planets[safeIndex]?.envType || 'normal';
      return byEnvType[envType] || byEnvType.normal;
    }

    function getAsteroidRenderImage(asteroid) {
      let spriteKey = asteroid.img;
      if (asteroid.damageSprites) {
        const hpRatio = asteroid.maxHp > 0 ? (asteroid.hp / asteroid.maxHp) : 1;
        if (hpRatio <= 0.5 && asteroid.damageSprites.critical && images[asteroid.damageSprites.critical]) {
          spriteKey = asteroid.damageSprites.critical;
        }
      }
      return images[spriteKey] || null;
    }

    // Battle
    let currentAlien = 0;
    let currentQuestion = 0;
    let selectedOption = -1;
    let battleMessage = "";
    let showQuestion = true;
    let battleEffects = [];
    let quizStartTime = 0;
    let battleMistakes = 0;
    let alienAnim = { state: 'idle', y: 0, alpha: 1.0, timer: 0 };
    const battleAlienSequence = [0, 1, 2, 2, 2];
    const battleAlien3MaxHp = 3;
    let alien3Hits = 0;
    let isAlien3Critical = false;
    // NEW: Active Quiz Set for current battle
    let activeQuizSet = []; 

    function getBattleAlienForQuestion(questionIndex) {
      return battleAlienSequence[Math.max(0, Math.min(battleAlienSequence.length - 1, questionIndex))];
    }

    function getRemainingBattleQuestions() {
      return Math.max(0, activeQuizSet.length - currentQuestion);
    }

    function triggerAlien3CriticalTransformation() {
      if (isAlien3Critical) return;
      const bodyX = 600;
      const bodyY = 100 + alienAnim.y;
      const bodyW = 120;
      const bodyH = 160;

      // Ledakan menyebar di seluruh badan sebelum masuk fase critical.
      for (let i = 0; i < 16; i++) {
        battleEffects.push({
          type: 'explosion',
          x: bodyX + (Math.random() * bodyW),
          y: bodyY + (Math.random() * bodyH),
          r: 0,
          mr: 18 + (Math.random() * 18),
          t: 18
        });
      }
      SoundManager.play('explosion');
      isAlien3Critical = true;
      battleMessage = 'ALIEN 3 MEMASUKI FASE CRITICAL!';
    }

    function finishBattlePhase() {
      if (battleMistakes === 0) {
        score += 2000;
        showFloatingText('PERFECT BATTLE +2000', canvas.width/2, canvas.height/2, '#0F0');
      }
      if (currentPlanetIndex === 1 || currentPlanetIndex === 3 || currentPlanetIndex === 5) {
        gameState = GameState.UPGRADE_SCREEN;
        shipLevel++;
        upgradeTimer = 5;
        SoundManager.play('collect');
      } else {
        gameState = GameState.LEAVING_PLANET;
        initLeavingPlanet();
      }
    }

    function advanceBattleQuestion() {
      if (currentQuestion >= activeQuizSet.length - 1) {
        finishBattlePhase();
        return;
      }

      currentQuestion++;
      currentAlien = getBattleAlienForQuestion(currentQuestion);
      selectedOption = -1;
      showQuestion = true;
      quizStartTime = Date.now();

      if (currentAlien === 2 && !isAlien3Critical) {
        const remaining = getRemainingBattleQuestions();
        if (alien3Hits >= 2 || remaining === 1) {
          triggerAlien3CriticalTransformation();
        }
      }
    }

    let mpConfig = {
      p1Gender: 'male',
      p2AlienIndex: 0
    };

    let mpBattle = {
      players: [
        { name: 'Player 1', role: 'astronaut', gender: 'male', hp: 10, maxHp: 10, streak: 0, bestStreak: 0, points: 0, wins: 0 },
        { name: 'Player 2', role: 'alien', alienIndex: 0, hp: 10, maxHp: 10, streak: 0, bestStreak: 0, points: 0, wins: 0 }
      ],
      activeTurn: 0,
      questionPools: [[], []],
      questions: [null, null],
      effects: [],
      feedback: '',
      feedbackColor: '#FFFFFF',
      resultText: ''
    };

    function openMultiplayerMenu() {
      SoundManager.play('click');
      SoundManager.playMenuTheme();
      document.getElementById('main-menu').style.display = 'none';
      document.getElementById('multiplayer-menu').style.display = 'flex';
      gameState = GameState.MENU;
    }

    function closeMultiplayerMenu() {
      SoundManager.play('click');
      document.getElementById('multiplayer-menu').style.display = 'none';
      document.getElementById('main-menu').style.display = 'flex';
      gameState = GameState.MENU;
      SoundManager.playMenuTheme();
    }

    function chooseMpP1Character(gender) {
      mpConfig.p1Gender = gender;
      const maleBtn = document.getElementById('mp-p1-male');
      const femaleBtn = document.getElementById('mp-p1-female');
      if (maleBtn && femaleBtn) {
        maleBtn.classList.toggle('active', gender === 'male');
        femaleBtn.classList.toggle('active', gender === 'female');
      }
      SoundManager.play('click');
    }

    function chooseMpP2Alien(idx) {
      mpConfig.p2AlienIndex = idx;
      ['mp-a1', 'mp-a2', 'mp-a3'].forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.classList.toggle('active', i === idx);
      });
      SoundManager.play('click');
    }

    function getAllQuizQuestions() {
      const allQuestions = [];
      planets.forEach(p => {
        p.quiz.forEach(q => {
          allQuestions.push({
            question: q.question,
            options: [...q.options],
            correct: q.correct
          });
        });
      });
      return allQuestions;
    }

    function getMultiplayerRank(points) {
      if (points >= 19) return 'LEGENDA DUEL GALAKSI';
      if (points >= 16) return 'MASTER KOSMIK';
      if (points >= 13) return 'KOMANDAN BINTANG';
      if (points >= 10) return 'PILOT ELITE';
      if (points >= 7) return 'PENJELAJAH TANGGUH';
      return 'KADET ANTARIKSA';
    }

    function calculateMultiplayerPoints(player) {
      return Math.max(0, player.hp) + Math.max(0, player.bestStreak);
    }

    function getNextMpQuestion(playerIndex) {
      if (mpBattle.questionPools[playerIndex].length === 0) {
        mpBattle.questionPools[playerIndex] = getAllQuizQuestions();
      }
      const idx = Math.floor(Math.random() * mpBattle.questionPools[playerIndex].length);
      const q = mpBattle.questionPools[playerIndex][idx];
      mpBattle.questionPools[playerIndex].splice(idx, 1);
      return q;
    }

    function assignNextUniqueMpQuestion(playerIndex) {
      const otherIndex = playerIndex === 0 ? 1 : 0;
      const otherQuestion = mpBattle.questions[otherIndex];
      let next = getNextMpQuestion(playerIndex);

      if (!otherQuestion || !next) return next;

      let guard = 0;
      while (next.question === otherQuestion.question && guard < 10) {
        next = getNextMpQuestion(playerIndex);
        guard += 1;
      }
      return next;
    }

    function startMultiplayerGame() {
      const p1Name = filterProfanity((document.getElementById('mp-p1-name')?.value || '').trim());
      const p2Name = filterProfanity((document.getElementById('mp-p2-name')?.value || '').trim());

      if (!p1Name || !p2Name) { showInGameNotification('Isi dulu nama kedua pemain, ya!'); return; }

      mpBattle.players[0] = { name: p1Name, role: 'astronaut', gender: mpConfig.p1Gender, hp: 10, maxHp: 10, streak: 0, bestStreak: 0, points: 0, wins: 0 };
      mpBattle.players[1] = { name: p2Name, role: 'alien', alienIndex: mpConfig.p2AlienIndex, hp: 10, maxHp: 10, streak: 0, bestStreak: 0, points: 0, wins: 0 };
      initMultiplayerBattle();
      document.getElementById('multiplayer-menu').style.display = 'none';
      SoundManager.play('click');
    }

    function initMultiplayerBattle() {
      mpBattle.activeTurn = 0;
      mpBattle.questionPools = [getAllQuizQuestions(), getAllQuizQuestions()];
      mpBattle.questions = [getNextMpQuestion(0), null];
      mpBattle.questions[1] = assignNextUniqueMpQuestion(1);
      mpBattle.effects = [];
      mpBattle.feedback = 'Duel dimulai! Keduanya menjawab secara bersamaan.';
      mpBattle.feedbackColor = '#00BFFF';
      mpBattle.resultText = '';
      SoundManager.playMultiplayerTheme();
      gameState = GameState.MULTIPLAYER_BATTLE;
    }

    function handleMultiplayerTouch(pos) {
      const isLeftSide = pos.x < canvas.width / 2;
      const attacker = isLeftSide ? 0 : 1;
      const defender = attacker === 0 ? 1 : 0;
      const activeQuestion = mpBattle.questions[attacker];
      if (!activeQuestion) return;

      const panelX = attacker === 0 ? 18 : canvas.width / 2 + 18;
      const optionX = panelX + 8;
      const optionW = (canvas.width / 2) - 52;
      const optionH = 28;
      const optionStartY = canvas.height - 144;
      const optionGap = 32;

      for (let i = 0; i < 4; i++) {
        const y = optionStartY + (i * optionGap);
        if (pos.x >= optionX && pos.x <= optionX + optionW && pos.y >= y && pos.y <= y + optionH) {
          const correct = i === activeQuestion.correct;

          if (correct) {
            mpBattle.players[defender].hp = Math.max(0, mpBattle.players[defender].hp - 1);
            mpBattle.players[attacker].streak += 1;
            mpBattle.players[attacker].bestStreak = Math.max(mpBattle.players[attacker].bestStreak, mpBattle.players[attacker].streak);
            mpBattle.feedback = attacker === 0 ? 'Astronot menembak Alien!' : 'Alien menembak Astronot!';
            mpBattle.feedbackColor = '#00FF88';
            SoundManager.play('correct');
            SoundManager.play('shoot');

            const sx = attacker === 0 ? 200 : canvas.width - 200;
            const ex = attacker === 0 ? canvas.width - 200 : 200;
            const sy = attacker === 0 ? 168 : 206;
            const ey = attacker === 0 ? 184 : 176;
            const laserColor = attacker === 0
              ? (mpBattle.players[0].gender === 'female' ? '#FF69B4' : '#33B5FF')
              : '#FF5555';
            mpBattle.effects.push({ type: 'laser', sx: sx, sy: sy, ex: ex, ey: ey, t: 16, c: laserColor });
            mpBattle.effects.push({ type: 'explosion', x: ex, y: ey, t: 14, maxT: 14, c: laserColor });

            if (mpBattle.players[defender].hp <= 0) {
              mpBattle.players[0].points = calculateMultiplayerPoints(mpBattle.players[0]);
              mpBattle.players[1].points = calculateMultiplayerPoints(mpBattle.players[1]);
              const winner = mpBattle.players[attacker];
              mpBattle.resultText = `${winner.name} MENANG! (${winner.points} poin, ${getMultiplayerRank(winner.points)})`;
              gameState = GameState.MULTIPLAYER_RESULT;
              return;
            }
          } else {
            mpBattle.players[attacker].streak = 0;
            mpBattle.feedback = `${mpBattle.players[attacker].name} salah jawab! Soal baru muncul untuknya.`;
            mpBattle.feedbackColor = '#FF6666';
            SoundManager.play('wrong');
          }

          mpBattle.players[0].points = calculateMultiplayerPoints(mpBattle.players[0]);
          mpBattle.players[1].points = calculateMultiplayerPoints(mpBattle.players[1]);
          mpBattle.questions[attacker] = assignNextUniqueMpQuestion(attacker);
          break;
        }
      }
    }

    function drawMultiplayerBattle() {
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#1f2a44';
      ctx.fillRect(0, 0, canvas.width / 2, canvas.height);
      ctx.fillStyle = '#3a1f1f';
      ctx.fillRect(canvas.width / 2, 0, canvas.width / 2, canvas.height);

      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();

      const p1Img = mpBattle.players[0].gender === 'female' ? images.battleFemale : images.battleMale;
      if (p1Img && p1Img.complete && p1Img.naturalWidth !== 0) {
        ctx.drawImage(p1Img, 80, 80, 180, 240);
      }

      const alienImgs = [images.alien1, images.alien2, images.alien3];
      const p2Img = alienImgs[mpBattle.players[1].alienIndex] || images.alien1;
      if (p2Img && p2Img.complete && p2Img.naturalWidth !== 0) {
        ctx.drawImage(p2Img, canvas.width - 260, 90, 180, 220);
      }

      mpBattle.players.forEach((p, idx) => {
        const panelX = idx === 0 ? 24 : canvas.width / 2 + 24;
        const hpW = (canvas.width / 2) - 48;
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(panelX, 12, hpW, 58);
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(p.name, panelX + 10, 44);

        ctx.fillStyle = '#333';
        ctx.fillRect(panelX + 10, 56, hpW - 20, 10);
        ctx.fillStyle = '#00FF88';
        ctx.fillRect(panelX + 10, 56, (p.hp / p.maxHp) * (hpW - 20), 10);
      });

      mpBattle.effects.forEach(e => {
        if (e.type === 'laser') {
          e.t -= 1;
          ctx.strokeStyle = e.c;
          ctx.lineWidth = 7;
          ctx.shadowBlur = 12;
          ctx.shadowColor = e.c;
          ctx.beginPath();
          ctx.moveTo(e.sx, e.sy);
          ctx.lineTo(e.ex, e.ey);
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else if (e.type === 'explosion') {
          e.t -= 1;
          const progress = 1 - (e.t / e.maxT);
          const radius = 8 + (progress * 34);
          const alpha = Math.max(0, e.t / e.maxT);

          ctx.fillStyle = `rgba(255, 235, 170, ${0.75 * alpha})`;
          ctx.beginPath();
          ctx.arc(e.x, e.y, radius * 0.55, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = `rgba(255, 130, 80, ${0.95 * alpha})`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
          ctx.stroke();

          ctx.strokeStyle = `rgba(255, 255, 255, ${0.9 * alpha})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(e.x, e.y, radius * 0.78, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
      mpBattle.effects = mpBattle.effects.filter(e => e.t > 0);

      function trimTextToWidth(text, maxWidth) {
        const src = String(text || '');
        if (ctx.measureText(src).width <= maxWidth) return src;
        let out = src;
        while (out.length > 0 && ctx.measureText(`${out}...`).width > maxWidth) {
          out = out.slice(0, -1);
        }
        return `${out}...`;
      }

      function wrapTextToLines(text, maxWidth, maxLines) {
        const words = String(text || '').split(' ');
        const lines = [];
        let current = '';

        for (let i = 0; i < words.length; i++) {
          const candidate = current ? `${current} ${words[i]}` : words[i];
          if (ctx.measureText(candidate).width <= maxWidth) {
            current = candidate;
          } else {
            if (current) lines.push(current);
            current = words[i];
          }
          if (lines.length === maxLines) break;
        }

        if (lines.length < maxLines && current) {
          lines.push(current);
        }

        if (lines.length > maxLines) {
          return lines.slice(0, maxLines);
        }

        if (lines.length === maxLines && words.join(' ').length > lines.join(' ').length) {
          lines[maxLines - 1] = trimTextToWidth(lines[maxLines - 1], maxWidth);
        }

        return lines;
      }

      for (let p = 0; p < 2; p++) {
        const q = mpBattle.questions[p];
        if (!q) continue;

        const panelX = p === 0 ? 18 : canvas.width / 2 + 18;
        const panelY = canvas.height - 188;
        const panelW = (canvas.width / 2) - 36;
        const panelH = 176;
        const strokeColor = p === 0 ? '#00BFFF' : '#FF7A7A';

        ctx.fillStyle = 'rgba(0,0,0,0.82)';
        ctx.fillRect(panelX, panelY, panelW, panelH);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.strokeRect(panelX, panelY, panelW, panelH);

        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        const questionLines = wrapTextToLines(q.question, panelW - 16, 2);
        questionLines.forEach((line, idx) => {
          ctx.fillText(line, panelX + 8, panelY + 22 + (idx * 16));
        });

        q.options.forEach((opt, i) => {
          const x = panelX + 8;
          const y = panelY + 50 + (i * 30);
          const w = panelW - 16;
          const h = 26;
          ctx.fillStyle = 'rgba(20,40,80,0.9)';
          ctx.fillRect(x, y, w, h);
          ctx.strokeStyle = strokeColor;
          ctx.strokeRect(x, y, w, h);
          ctx.fillStyle = '#FFF';
          ctx.font = '13px Arial';
          ctx.textAlign = 'left';
          const optionText = `${['A', 'B', 'C', 'D'][i]}. ${opt}`;
          ctx.fillText(trimTextToWidth(optionText, w - 16), x + 8, y + 17);
        });
      }

      ctx.fillStyle = mpBattle.feedbackColor;
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(mpBattle.feedback, canvas.width / 2, canvas.height - 8);

      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`P1 Kombo: ${mpBattle.players[0].streak} | Poin: ${mpBattle.players[0].points}`, 20, 84);
      ctx.textAlign = 'right';
      ctx.fillText(`P2 Kombo: ${mpBattle.players[1].streak} | Poin: ${mpBattle.players[1].points}`, canvas.width - 20, 84);
    }

    function drawMultiplayerResult() {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('PERTARUNGAN SELESAI!', canvas.width / 2, 150);

      ctx.fillStyle = '#00FF88';
      ctx.font = 'bold 40px Arial';
      ctx.fillText(mpBattle.resultText, canvas.width / 2, 230);

      const btnW = 340;
      const btnH = 64;
      const btnX = canvas.width / 2 - btnW / 2;
      const btnY = 360;
      ctx.fillStyle = '#1E90FF';
      ctx.fillRect(btnX, btnY, btnW, btnH);
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 3;
      ctx.strokeRect(btnX, btnY, btnW, btnH);
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 24px Arial';
      ctx.fillText('KEMBALI KE MENU', canvas.width / 2, btnY + 41);
    }

    // --- INPUT HANDLING ---
    let touchX = null; let touchY = null; let isTouching = false; let isScanButtonPressed = false;
    function getTouchPos(e) { const rect = canvas.getBoundingClientRect(); const scaleX = canvas.width / rect.width; const scaleY = canvas.height / rect.height; let cx = e.touches ? e.touches[0].clientX : e.clientX; let cy = e.touches ? e.touches[0].clientY : e.clientY; return { x: (cx - rect.left) * scaleX, y: (cy - rect.top) * scaleY }; }

    const handleStart = (pos) => {
      SoundManager.resume(); touchX = pos.x; touchY = pos.y; isTouching = true;
      if (gameState === GameState.START) { SoundManager.play('click'); gameState = GameState.MENU; document.getElementById('main-menu').style.display = 'flex'; SoundManager.playMenuTheme(); }
      else if (gameState === GameState.ROADMAP) { if (pos.x > 20 && pos.x < 150 && pos.y > 20 && pos.y < 70) { closeRoadmap(); } }
      else if (gameState === GameState.SPACE_TRAVEL || gameState === GameState.EXPLORATION || gameState === GameState.BATTLE) {
         if (pos.x > canvas.width - 140 && pos.x < canvas.width - 80 && pos.y < 80) { openInGameRoadmap(); return; }
         if (pos.x > canvas.width - 80 && pos.y < 80) { isPaused = !isPaused; SoundManager.play('click'); return; }
      }
      // Tap pada progress indicator (collapsed pill atau expanded panel)
      {
        const _hudVisible = gameState !== GameState.START && gameState !== GameState.MENU && gameState !== GameState.ROADMAP && gameState !== GameState.GAME_OVER && gameState !== GameState.WIN && gameState !== GameState.MULTIPLAYER_BATTLE && gameState !== GameState.MULTIPLAYER_RESULT && gameState !== GameState.CREDITS;
        if (_hudVisible) {
          const _isBottomLeftPhase = gameState === GameState.SPACE_TRAVEL || gameState === GameState.EXPLORATION;
          const _pillW = 180, _pillH = 38;
          const _pillX = _isBottomLeftPhase ? 18 : (canvas.width / 2 - _pillW / 2);
          const _pillY = _isBottomLeftPhase ? (canvas.height - 50) : 8;
          const _panelW = 360, _panelH = 82;
          const _panelX = _isBottomLeftPhase ? 18 : (canvas.width / 2 - _panelW / 2);
          const _panelY = _isBottomLeftPhase ? (canvas.height - 140) : 8;
          const _hx = progressExpanded ? _panelX : _pillX;
          const _hy = progressExpanded ? _panelY : _pillY;
          const _hw = progressExpanded ? _panelW : _pillW;
          const _hh = progressExpanded ? _panelH : _pillH;
          if (pos.x >= _hx && pos.x <= _hx + _hw && pos.y >= _hy && pos.y <= _hy + _hh) {
            progressExpanded = !progressExpanded;
            SoundManager.play('click');
            return;
          }
        }
      }
      if (isPaused) return;
      if (gameState === GameState.ARTIFACT_INFO) { if (pos.y > canvas.height - 100) { closeArtifactInfo(); SoundManager.play('click'); } }
      else if (gameState === GameState.READING) { const btnW = 200, btnH = 50; const btnX = canvas.width/2 - btnW/2; const btnY = canvas.height - 100; if(pos.x>=btnX && pos.x<=btnX+btnW && pos.y>=btnY && pos.y<=btnY+btnH) { SoundManager.play('click'); gameState = GameState.BATTLE; initBattle(); } }
      else if (gameState === GameState.BATTLE && showQuestion) handleBattleTouch(pos);
      else if (gameState === GameState.MULTIPLAYER_BATTLE) handleMultiplayerTouch(pos);
      
      // FIXED END GAME BUTTON LOGIC (Merged GAME_OVER and WIN) -> Now transitions to CREDITS
      else if (gameState === GameState.GAME_OVER || gameState === GameState.WIN) {
          // Check if "LIHAT KREDIT" button is clicked (Visual dimensions: 300x60)
          const btnW = 300; const btnH = 60;
          const btnX = canvas.width/2 - btnW/2; 
          const btnY = canvas.height - 90;
          if (pos.x >= btnX && pos.x <= btnX + btnW && pos.y >= btnY && pos.y <= btnY + btnH) {
              SoundManager.play('click');
              creditsY = 40;
              creditsAutoScroll = true;
              gameState = GameState.CREDITS;
          }
      }
      // Credits: check button or start drag
      else if (gameState === GameState.CREDITS) {
          const btnW = 300, btnH = 60;
          const btnX = canvas.width/2 - btnW/2;
          const btnY = canvas.height - 80;
          if (pos.x >= btnX && pos.x <= btnX + btnW && pos.y >= btnY && pos.y <= btnY + btnH) {
              SoundManager.play('click');
              resetGame();
          } else {
              creditsAutoScroll = false;
              creditsDragStartY = pos.y;
              creditsDragLastY = pos.y;
          }
      }
      
      else if (gameState === GameState.EXPLORATION) {
        if (scanTarget) { const btnX = astronaut.x; const btnY = astronaut.y - 80; const dist = Math.sqrt(Math.pow(pos.x - btnX, 2) + Math.pow(pos.y - btnY, 2)); if (dist < 62) { isScanButtonPressed = true; SoundManager.play('scan'); return; } } isScanButtonPressed = false;
      }
      else if (gameState === GameState.EXCAVATION) handleExcavationRub(pos);
      else if (gameState === GameState.SIGNAL) handleSignalMove(pos);
      else if (gameState === GameState.DRILLING) {
        const btnX = canvas.width / 2;
        const btnY = canvas.height - 90;
        const radius = 70;
        const dist = Math.sqrt(Math.pow(pos.x - btnX, 2) + Math.pow(pos.y - btnY, 2));
        if (dist < radius) isDrilling = true;
      }
      else if (gameState === GameState.GENERATOR) handleGeneratorTap(pos);
      else if (gameState === GameState.SPECTROMETER) handleSpectrometerTap(pos);
      else if (gameState === GameState.SENSOR_CIRCUIT) handleSensorCircuitTap(pos);
      else if (gameState === GameState.MICROSCOPE) handleMicroscopeTap(pos);
      else if (gameState === GameState.REACTOR) handleReactorTap(pos);
      else if (gameState === GameState.MULTIPLAYER_RESULT) {
        const btnW = 340, btnH = 64;
        const btnX = canvas.width / 2 - btnW / 2;
        const btnY = 360;
        if (pos.x >= btnX && pos.x <= btnX + btnW && pos.y >= btnY && pos.y <= btnY + btnH) {
          SoundManager.play('click');
          resetGame();
          document.getElementById('main-menu').style.display = 'flex';
          gameState = GameState.MENU;
          SoundManager.playMenuTheme();
        }
      }
    };

    const handleMove = (pos) => {
      touchX = pos.x; touchY = pos.y; if(isPaused) return;
      if (gameState === GameState.EXPLORATION && scanTarget) { const btnX = astronaut.x; const btnY = astronaut.y - 80; const dist = Math.sqrt(Math.pow(pos.x - btnX, 2) + Math.pow(pos.y - btnY, 2)); isScanButtonPressed = (dist < 62); }
      else if (gameState === GameState.EXCAVATION) handleExcavationRub(pos);
      else if (gameState === GameState.SIGNAL) handleSignalMove(pos);
      else if (gameState === GameState.SPECTROMETER) handleSpectrometerMove(pos);
      else if (gameState === GameState.MICROSCOPE) handleMicroscopeMove(pos);
      else if (gameState === GameState.CREDITS && creditsDragLastY !== null) {
        const dy = pos.y - creditsDragLastY;
        creditsY += dy;
        creditsDragLastY = pos.y;
      }
    };

    const handleEnd = () => {
      isTouching = false;
      touchX = null;
      isScanButtonPressed = false;
      isDrilling = false;
      activeSliderControl = null;
      creditsDragStartY = null;
      creditsDragLastY = null;
      if (gameState === GameState.EXPLORATION) {
        const interruptedScan = scanTarget && scanProgress > 8 && scanProgress < scanRequired;
        if (interruptedScan && scanReleaseHintCooldown <= 0) {
          showInGameNotification('Tahan tombol SCAN sampai lingkaran penuh ya!', 1200);
          scanReleaseHintCooldown = 1.2;
        }
        scanProgress = 0;
        isScanning = false;
      }
    };

    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); handleStart(getTouchPos(e)); }, {passive:false});
    canvas.addEventListener('touchmove', (e) => { e.preventDefault(); if(isTouching) handleMove(getTouchPos(e)); }, {passive:false});
    canvas.addEventListener('touchend', (e) => { e.preventDefault(); handleEnd(); }, {passive:false});
    canvas.addEventListener('mousedown', (e) => handleStart(getTouchPos(e)));
    canvas.addEventListener('mousemove', (e) => { if(isTouching) handleMove(getTouchPos(e)); });
    canvas.addEventListener('mouseup', handleEnd);

    // --- REVISED BATTLE TOUCH LOGIC ---
    function getSingleBattleLayout() {
      const boxY = 280;
      const boxH = canvas.height - boxY;
      const titleH = 34;
      const questionY = boxY + 50;
      const buttonH = 30;
      const buttonGap = 5;
      const buttonsStartY = boxY + 96;
      return { boxY, boxH, titleH, questionY, buttonH, buttonGap, buttonsStartY };
    }

    function handleBattleTouch(pos) {
      if (alienAnim.state === 'dying') return;
      const layout = getSingleBattleLayout();
      for (let i = 0; i < 4; i++) {
        const btnY = layout.buttonsStartY + i * (layout.buttonH + layout.buttonGap);
        const btnX = 20;
        const btnW = canvas.width - 40;
        if (pos.x >= btnX && pos.x <= btnX + btnW && pos.y >= btnY && pos.y <= btnY + layout.buttonH) {
            SoundManager.play('click'); selectedOption = i; checkAnswer(); break; 
        }
      }
    }

    function showFloatingText(text, x, y, color='#FFF') { floatingTexts.push({text, x, y, life: 1.0, color}); }
    function initStars() { stars = []; for(let i=0; i<100; i++) stars.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, size: Math.random()*2, speed: (Math.random()*2+1)*60}); }
    function startGame() { 
        gameState = GameState.SPACE_TRAVEL; 
        initSpaceTravel(); 
    }
    function resetGame() { 
        currentPlanetIndex=0; playerHP=100; score=0; isPaused=false; shipLevel=0; 
        stats={asteroidsDestroyed:0, accuracy:0, quizCorrect:0, quizTotal:0}; 
        gameState=GameState.START; 
        SoundManager.stopBGM(); // Stop music when returning to menu
      SoundManager.currentTheme = null;
        document.getElementById('main-menu').style.display='none'; 
        document.getElementById('char-select-menu').style.display='none'; 
        document.getElementById('multiplayer-menu').style.display='none'; 
        const testMenu = document.getElementById('minigame-test-menu');
        if (testMenu) testMenu.style.display = 'none';
    }
    
    // --- RESTORED MISSING GAME LOGIC FUNCTIONS ---
    function initSpaceTravel() { 
        ship.x=canvas.width/2; ship.y=canvas.height-100; 
        bullets=[]; asteroids=[]; particles=[]; floatingTexts=[]; 
        travelTime=0; asteroidKills=0; combo=0; maxCombo=0; comboTimer=0; phaseHitTaken=false; 
        shipHitFxTimer=0;
        travelDuration=gameBalance.travelDuration; 
      initStars();
      SoundManager.playSpaceTravelTheme();
    }

    function initExploration() {
        astronaut.x = canvas.width / 2;
        astronaut.y = canvas.height / 2;
        explorationPhase = 'start';
        collectedFragments = 0;
      collectedFragmentsPlanetIndex = currentPlanetIndex;
        infoFragments = [];
        obstacles = [];
        currentOxygen = 100;
        oxygenHpDrainTickTimer = 0;
        oxygenTanks = [];
        activeObstacleHits = 0;
        scanTarget = null;
        scanProgress = 0;
        scanRequired = gameBalance.scanRequired;
        isScanning = false;
        isScanButtonPressed = false;
        scanPromptShown = false;
        scanPromptFlash = 0;
        scanReleaseHintCooldown = 0;
        floatingTexts = [];
        SoundManager.playAdventureTheme();

        const p = planets[currentPlanetIndex];
        const visualProfile = getPlanetExplorationVisualProfile(p.name);
        const positions = [{x:150,y:150}, {x:650,y:150}, {x:100,y:450}, {x:700,y:450}, {x:400,y:100}];
        const mgTypes = getFragmentMinigameSequence(currentPlanetIndex, positions.length);
        positions.forEach((pos, i) => infoFragments.push({x: pos.x, y: pos.y, radius: 30, collected: false, data: p.infoFragments[i], pulse: 0, type: p.artifactType, index: i, planetIndex: currentPlanetIndex, minigame: mgTypes[i]}));

        const startPoint = { x: astronaut.x, y: astronaut.y };
        const pathTargets = positions.map(pos => ({ x: pos.x, y: pos.y }));

        function pointSegmentDistance(px, py, ax, ay, bx, by) {
          const abx = bx - ax;
          const aby = by - ay;
          const apx = px - ax;
          const apy = py - ay;
          const abLenSq = (abx * abx) + (aby * aby) || 1;
          const t = Math.max(0, Math.min(1, ((apx * abx) + (apy * aby)) / abLenSq));
          const cx = ax + (abx * t);
          const cy = ay + (aby * t);
          return Math.sqrt(Math.pow(px - cx, 2) + Math.pow(py - cy, 2));
        }

        function hasClearPathToTarget(targetX, targetY, padding = 58) {
          for (const o of obstacles) {
            const cx = o.x + (o.w / 2);
            const cy = o.y + (o.h / 2);
            if (pointSegmentDistance(cx, cy, startPoint.x, startPoint.y, targetX, targetY) < padding) {
              return false;
            }
          }
          return true;
        }

        function canPlaceObstacle(ox, oy, w, h) {
          const cx = ox + (w / 2), cy = oy + (h / 2);
          const radius = Math.max(w, h) / 2;

          if (ox < 60 || ox > canvas.width - 100) return false;
          if (oy < 70 || oy > canvas.height - 110) return false;

          if (Math.sqrt(Math.pow(cx - startPoint.x, 2) + Math.pow(cy - startPoint.y, 2)) < 100 + radius) return false;

          for (const pos of positions) {
            if (Math.sqrt(Math.pow(cx - pos.x, 2) + Math.pow(cy - pos.y, 2)) < 72 + radius) return false;
            if (pointSegmentDistance(cx, cy, startPoint.x, startPoint.y, pos.x, pos.y) < 44 + (radius * 0.5)) return false;
          }

          for (const o of obstacles) {
            const ocx = o.x + (o.w / 2), ocy = o.y + (o.h / 2);
            const minGap = ((Math.max(o.w, o.h) + Math.max(w, h)) * 0.45) + 10;
            if (Math.sqrt(Math.pow(cx - ocx, 2) + Math.pow(cy - ocy, 2)) < minGap) return false;
          }

          return true;
        }

        const obstacleCount = gameBalance.obstacleCountMin + Math.floor(Math.random() * ((gameBalance.obstacleCountMax - gameBalance.obstacleCountMin) + 1));
        const explorationObstaclePool = getExplorationObstaclePool(currentPlanetIndex);
        let obstacleTries = 0;
        while (obstacles.length < obstacleCount && obstacleTries < 1200) {
          obstacleTries++;
          const obstacleVariant = pickWeightedAsteroidVariant(explorationObstaclePool);
          const minSize = obstacleVariant ? (obstacleVariant.sizeMin || 36) : 36;
          const maxSize = obstacleVariant ? (obstacleVariant.sizeMax || 58) : 58;
          const obstacleSize = minSize + (Math.random() * Math.max(2, maxSize - minSize));
          const ox = 60 + (Math.random() * Math.max(1, canvas.width - (obstacleSize + 120)));
          const oy = 70 + (Math.random() * Math.max(1, canvas.height - (obstacleSize + 150)));
          if (!canPlaceObstacle(ox, oy, obstacleSize, obstacleSize)) continue;
          obstacles.push({
            x: ox,
            y: oy,
            w: obstacleSize,
            h: obstacleSize,
            rot: Math.random() * 6,
            rs: (Math.random() - 0.5) * 0.0003,
            strength: obstacleVariant ? (obstacleVariant.strength || 1.0) : 1.0,
            img: obstacleVariant ? obstacleVariant.key : 'asteroid4SType'
          });
        }

        const oxygenCount = gameBalance.oxygenTankCount;
        let oxygenTries = 0;
        while (oxygenTanks.length < oxygenCount && oxygenTries < 800) {
          oxygenTries++;
          const x = 70 + (Math.random() * (canvas.width - 140));
          const y = 80 + (Math.random() * (canvas.height - 160));

          let blockedByObstacle = false;
          for (const o of obstacles) {
            if (x > o.x - 35 && x < o.x + o.w + 35 && y > o.y - 35 && y < o.y + o.h + 35) {
              blockedByObstacle = true;
              break;
            }
          }
          if (blockedByObstacle) continue;

          if (!hasClearPathToTarget(x, y, 56)) continue;

          oxygenTanks.push({ x: x, y: y, r: 15 });
          pathTargets.push({ x: x, y: y });
        }

        // Fallback jika random gagal: tetap taruh oksigen di titik aman agar pasti bisa dijangkau.
        while (oxygenTanks.length < oxygenCount) {
          const fallbackX = startPoint.x + ((oxygenTanks.length - 1) * 120) - 120;
          const fallbackY = Math.min(canvas.height - 80, startPoint.y + 70 + (oxygenTanks.length * 20));
          oxygenTanks.push({ x: Math.max(70, Math.min(canvas.width - 70, fallbackX)), y: fallbackY, r: 15 });
        }

        envParticles = [];
        const particleCount = Math.max(24, Math.min(48, visualProfile.particleCount || 32));
        for (let i = 0; i < particleCount; i++) {
          envParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: (visualProfile.particleSpeedMin || 1) + (Math.random() * ((visualProfile.particleSpeedMax || 3) - (visualProfile.particleSpeedMin || 1))),
            size: (visualProfile.particleSizeMin || 1) + (Math.random() * ((visualProfile.particleSizeMax || 3) - (visualProfile.particleSizeMin || 1))),
            alpha: (visualProfile.particleAlphaMin || 0.18) + (Math.random() * ((visualProfile.particleAlphaMax || 0.4) - (visualProfile.particleAlphaMin || 0.18)))
          });
        }
    }

    function initApproachingPlanet() { approachTimer = 10; }
    
    function updateApproachingPlanet(dt) {
        stars.forEach(s => { s.y += s.speed * dt; if(s.y > canvas.height) { s.y=0; s.x=Math.random()*canvas.width; }});
        approachTimer -= dt;
        if (approachTimer <= 0) { gameState = GameState.EXPLORATION; initExploration(); }
    }

    function initLeavingPlanet() { leavingTimer = 5; leavingShipY = canvas.height - 100; }
    
    function completeActiveMinigame() {
      SoundManager.play('collect');
      initArtifactInfo();
    }

    function startMinigame(fragment) {
      activeFragment = fragment;
      if (fragment.minigame === 'excavation') initExcavation();
      else if (fragment.minigame === 'signal') initSignal();
      else if (fragment.minigame === 'drill') initDrill();
      else if (fragment.minigame === 'generator') initGeneratorMinigame();
      else if (fragment.minigame === 'spectrometer') initSpectrometerMinigame();
      else if (fragment.minigame === 'sensorCircuit') initSensorCircuitMinigame();
      else if (fragment.minigame === 'microscope') initMicroscopeMinigame();
      else if (fragment.minigame === 'reactor') initReactorMinigame();
      else initGeneratorMinigame();
    }

    function initExcavation() {
      gameState = GameState.EXCAVATION;
      excavationGrid = [];
      excavationCleared = 0;
      excavationTargetCleared = gameBalance.excavationTargetCleared;
      excavationBrushRadius = gameBalance.excavationBrushRadius;
      const panelSize = 400;
      const panelX = (canvas.width - panelSize) / 2;
      const panelY = Math.max(84, (canvas.height - panelSize) / 2);
      const gridOffsetX = panelX + 50;
      const gridOffsetY = panelY + 50;
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          excavationGrid.push({ x: i * 15 + gridOffsetX, y: j * 15 + gridOffsetY, active: true });
        }
      }
    }

    function handleExcavationRub(pos) {
      excavationGrid.forEach((dust) => {
        if (!dust.active) return;
        const hit = Math.sqrt(Math.pow(pos.x - dust.x, 2) + Math.pow(pos.y - dust.y, 2)) < excavationBrushRadius;
        if (!hit) return;
        dust.active = false;
        excavationCleared++;
        if (Math.random() < 0.3) SoundManager.play('rub');
        for (let i = 0; i < 2; i++) {
          particles.push({ x: dust.x, y: dust.y, vx: (Math.random() - 0.5) * 300, vy: (Math.random() - 0.5) * 300, life: 0.5, c: '#8B4513' });
        }
      });
      if (excavationCleared > excavationTargetCleared) completeActiveMinigame();
    }

    function initSignal() {
      gameState = GameState.SIGNAL;
      signalTarget = 20 + (Math.random() * 60);
      signalCurrent = 0;
      signalStability = 0;
    }

    function handleSignalMove(pos) {
      const sliderW = Math.min(600, canvas.width - 200);
      const sliderX = (canvas.width - sliderW) / 2;
      const sliderY = canvas.height - 44;
      if (pos.y > sliderY - 24) {
        signalCurrent = Math.max(0, Math.min(100, ((pos.x - sliderX) / sliderW) * 100));
        if (Math.random() < 0.3) SoundManager.play('signal_noise');
      }
    }

    function updateSignal(dt) {
      if (Math.abs(signalCurrent - signalTarget) < gameBalance.signalTolerance) {
        signalStability += dt * gameBalance.signalStabilityGainRate;
        if (signalStability >= 100) completeActiveMinigame();
      } else {
        signalStability = Math.max(0, signalStability - (dt * gameBalance.signalStabilityDecayRate));
      }
    }

    function initDrill() {
      gameState = GameState.DRILLING;
      drillDepth = 0;
      drillHeat = 0;
      isDrilling = false;
    }

    function updateDrill(dt) {
      if (isDrilling) {
        if (drillHeat < gameBalance.drillOverheatThreshold) {
          drillDepth += dt * gameBalance.drillDepthRate;
          drillHeat += dt * gameBalance.drillHeatGainRate;
          if (Math.random() < 0.2) SoundManager.play('drill');
        } else {
          isDrilling = false;
          showFloatingText('OVERHEAT!', canvas.width / 2, canvas.height / 2, '#F00');
          SoundManager.play('hit');
        }
      } else {
        drillHeat = Math.max(0, drillHeat - (dt * gameBalance.drillCoolRate));
      }
      if (drillDepth >= 100) completeActiveMinigame();
    }

    function initGeneratorMinigame() {
      gameState = GameState.GENERATOR;
      generatorSwitches = [
        { id: 0, label: 'A', x: 280, y: 220, active: false },
        { id: 1, label: 'B', x: 430, y: 180, active: false },
        { id: 2, label: 'C', x: 580, y: 220, active: false },
        { id: 3, label: 'D', x: 430, y: 315, active: false }
      ];
      generatorSwitchOrder = [...generatorSwitches]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3 + Math.min(1, Math.floor(currentPlanetIndex / 4)))
        .map((s) => s.id);
      generatorInputOrder = [];
    }

    function handleGeneratorTap(pos) {
      const clickedSwitch = generatorSwitches.find((sw) => Math.sqrt(Math.pow(pos.x - sw.x, 2) + Math.pow(pos.y - sw.y, 2)) <= 34);
      if (!clickedSwitch) return;

      generatorInputOrder.push(clickedSwitch.id);
      clickedSwitch.active = true;

      const expectedIndex = generatorInputOrder.length - 1;
      if (generatorSwitchOrder[expectedIndex] !== clickedSwitch.id) {
        generatorInputOrder = [];
        generatorSwitches.forEach((sw) => { sw.active = false; });
        showFloatingText('Urutan salah, ulangi!', canvas.width / 2, 500, '#FF6666');
        SoundManager.play('wrong');
        return;
      }

      SoundManager.play('click');
      if (generatorInputOrder.length >= generatorSwitchOrder.length) {
        completeActiveMinigame();
      }
    }

    function initSpectrometerMinigame() {
      gameState = GameState.SPECTROMETER;
      activeSliderControl = null;
      spectrometerCalibratedSteps = 0;
      spectrometerRequiredSteps = 2 + Math.min(2, Math.floor(currentPlanetIndex / 3));
      spectrometerTolerance = Math.max(3, 8 - Math.floor(currentPlanetIndex / 2));
      spectrometerTarget = {
        wave: 20 + (Math.random() * 60),
        gain: 20 + (Math.random() * 60),
        focus: 20 + (Math.random() * 60)
      };
      spectrometerCurrent = {
        wave: Math.random() * 100,
        gain: Math.random() * 100,
        focus: Math.random() * 100
      };
    }

    function initSensorCircuitMinigame() {
      gameState = GameState.SENSOR_CIRCUIT;
      sensorCircuitSelectedNode = -1;
      sensorCircuitEdges = [];
      const layouts = [
        [
          { x: 260, y: 180 },
          { x: 420, y: 140 },
          { x: 580, y: 180 },
          { x: 260, y: 360 },
          { x: 420, y: 400 },
          { x: 580, y: 360 }
        ],
        [
          { x: 230, y: 200 },
          { x: 370, y: 140 },
          { x: 560, y: 165 },
          { x: 290, y: 355 },
          { x: 470, y: 380 },
          { x: 640, y: 300 }
        ],
        [
          { x: 230, y: 170 },
          { x: 410, y: 150 },
          { x: 610, y: 190 },
          { x: 250, y: 340 },
          { x: 430, y: 385 },
          { x: 620, y: 340 }
        ]
      ];
      sensorCircuitNodes = layouts[Math.floor(Math.random() * layouts.length)];
      sensorCircuitAllowedEdges = ['0-1', '1-2', '0-3', '1-4', '2-5', '3-4', '4-5', '1-3', '2-4'];
      sensorCircuitMode = Math.random() < 0.5 ? 'activate' : 'route';

      if (sensorCircuitMode === 'activate') {
        const pool = ['0-1', '1-2', '1-4', '3-4', '4-5', '1-3', '2-4'];
        sensorCircuitRequiredEdges = pool.sort(() => Math.random() - 0.5).slice(0, 4 + Math.min(1, Math.floor(currentPlanetIndex / 4)));
        sensorCircuitEnergyBudget = sensorCircuitRequiredEdges.length + 2;
        sensorCircuitHintText = 'Mode Aktivasi: hidupkan semua jalur wajib!';
      } else {
        const pairs = [[0, 5], [3, 2], [0, 2], [3, 5]];
        [sensorCircuitSource, sensorCircuitTarget] = pairs[Math.floor(Math.random() * pairs.length)];
        sensorCircuitRequiredEdges = [];
        sensorCircuitEnergyBudget = 5 + Math.floor(currentPlanetIndex / 3);
        sensorCircuitHintText = `Mode Rute: sambungkan node ${sensorCircuitSource + 1} ke node ${sensorCircuitTarget + 1}!`;
      }

      sensorCircuitEnergyUsed = 0;
    }

    function hasSensorCircuitPath(sourceNode, targetNode) {
      const adjacency = new Map();
      sensorCircuitNodes.forEach((_, idx) => adjacency.set(idx, []));
      sensorCircuitEdges.forEach((edge) => {
        const [a, b] = edge.split('-').map(Number);
        adjacency.get(a).push(b);
        adjacency.get(b).push(a);
      });

      const visited = new Set([sourceNode]);
      const queue = [sourceNode];
      while (queue.length > 0) {
        const current = queue.shift();
        if (current === targetNode) return true;
        (adjacency.get(current) || []).forEach((next) => {
          if (!visited.has(next)) {
            visited.add(next);
            queue.push(next);
          }
        });
      }
      return false;
    }

    function getSensorCircuitConnectableNodes(nodeIndex) {
      const connectable = new Set();
      sensorCircuitAllowedEdges.forEach((edge) => {
        const [a, b] = edge.split('-').map(Number);
        if (a === nodeIndex) connectable.add(b);
        if (b === nodeIndex) connectable.add(a);
      });
      return connectable;
    }

    function initMicroscopeMinigame() {
      gameState = GameState.MICROSCOPE;
      activeSliderControl = null;
      microscopeTolerance = Math.max(3, 8 - Math.floor(currentPlanetIndex / 2));
      microscopeLens = { x: canvas.width / 2, y: 280, radius: 74 };
      microscopeMarker = {
        x: 320 + (Math.random() * 320),
        y: 190 + (Math.random() * 180)
      };
      microscopeFocusTarget = 25 + (Math.random() * 50);
      microscopeFocusCurrent = Math.random() * 100;
      microscopeHintPulse = 0;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * ((max - min) + 1)) + min;
    }

    function buildReactorZone(centerMin, centerMax, halfWidthMin, halfWidthMax) {
      const center = getRandomInt(centerMin, centerMax);
      const halfWidth = getRandomInt(halfWidthMin, halfWidthMax);
      return {
        min: clampValue(center - halfWidth),
        max: clampValue(center + halfWidth)
      };
    }

    function ensureReactorZoneMinSpan(zone, minSpan) {
      if (!zone) return { min: 0, max: 100 };
      const currentSpan = zone.max - zone.min;
      if (currentSpan >= minSpan) return zone;

      const targetSpan = Math.max(minSpan, 2);
      const center = (zone.min + zone.max) / 2;
      const halfSpan = targetSpan / 2;
      let min = clampValue(center - halfSpan);
      let max = clampValue(center + halfSpan);

      const adjustedSpan = max - min;
      if (adjustedSpan < targetSpan) {
        if (min <= 0) {
          max = clampValue(min + targetSpan);
        } else if (max >= 100) {
          min = clampValue(max - targetSpan);
        }
      }

      return { min: Math.round(min), max: Math.round(max) };
    }

    function getReactorMinSpanByDifficulty() {
      if (selectedDifficulty === 'mudah') return 16;
      if (selectedDifficulty === 'sulit') return 12;
      return 14;
    }

    function randomizeReactorValuesOutsideSafeZone() {
      ['temp', 'pressure', 'flow'].forEach((key) => {
        const zone = reactorSafeZones[key];
        let value = 22 + (Math.random() * 56);
        if (value >= zone.min && value <= zone.max) {
          value = Math.random() < 0.5
            ? Math.max(0, zone.min - (6 + (Math.random() * 10)))
            : Math.min(100, zone.max + (6 + (Math.random() * 10)));
        }
        reactorValues[key] = clampValue(value);
      });
    }

    function rerollReactorStepTargets() {
      const shift = Math.min(2, Math.floor(currentPlanetIndex / 3));
      const widthPenalty = Math.min(1, Math.floor(currentPlanetIndex / 4));
      const minSpan = getReactorMinSpanByDifficulty();
      reactorSafeZones = {
        temp: ensureReactorZoneMinSpan(buildReactorZone(46 + shift, 57 - shift, 6 - widthPenalty, 9 - widthPenalty), minSpan),
        pressure: ensureReactorZoneMinSpan(buildReactorZone(48 + shift, 59 - shift, 6 - widthPenalty, 9 - widthPenalty), minSpan),
        flow: ensureReactorZoneMinSpan(buildReactorZone(40 + shift, 54 - shift, 6 - widthPenalty, 10 - widthPenalty), minSpan)
      };
      randomizeReactorValuesOutsideSafeZone();
    }

    function initReactorMinigame() {
      gameState = GameState.REACTOR;
      reactorValues = { temp: 40, pressure: 40, flow: 40 };
      reactorStableSteps = 0;
      reactorRequiredStableSteps = 3 + Math.floor(currentPlanetIndex / 3);
      rerollReactorStepTargets();
    }

    function getSliderInfo() {
      const sliderW = Math.min(540, canvas.width - 260);
      const sliderX = (canvas.width - sliderW) / 2;
      return {
        wave: { x: sliderX, y: 220, w: sliderW },
        gain: { x: sliderX, y: 300, w: sliderW },
        spectFocus: { x: sliderX, y: 380, w: sliderW },
        microFocus: { x: sliderX, y: 470, w: sliderW }
      };
    }

    function updateSliderFromPosition(controlKey, posX, targetObject, sliderLookupKey = controlKey) {
      const slider = getSliderInfo()[sliderLookupKey];
      if (!slider) return;
      targetObject[controlKey] = Math.max(0, Math.min(100, ((posX - slider.x) / slider.w) * 100));
    }

    function isWithinTolerance(currentValue, targetValue, tolerance) {
      return Math.abs(currentValue - targetValue) <= tolerance;
    }

    function handleSpectrometerMove(pos) {
      if (!activeSliderControl) return;
      const sliderLookupKey = activeSliderControl === 'focus' ? 'spectFocus' : activeSliderControl;
      updateSliderFromPosition(activeSliderControl, pos.x, spectrometerCurrent, sliderLookupKey);
      if (Math.random() < 0.22) SoundManager.play('signal_noise');
    }

    function handleSpectrometerTap(pos) {
      const sliderMap = getSliderInfo();
      ['wave', 'gain', 'focus'].forEach((key) => {
        const sliderLookupKey = key === 'focus' ? 'spectFocus' : key;
        const s = sliderMap[sliderLookupKey];
        if (pos.y > s.y - 24 && pos.y < s.y + 24) {
          activeSliderControl = key;
          updateSliderFromPosition(key, pos.x, spectrometerCurrent, sliderLookupKey);
        }
      });

      const lockW = 300;
      const lockH = 64;
      const lockX = canvas.width / 2 - (lockW / 2);
      const lockY = 416;
      const clickedLock = pos.x >= lockX && pos.x <= lockX + lockW && pos.y >= lockY && pos.y <= lockY + lockH;
      if (!clickedLock) return;

      const allAligned = isWithinTolerance(spectrometerCurrent.wave, spectrometerTarget.wave, spectrometerTolerance)
        && isWithinTolerance(spectrometerCurrent.gain, spectrometerTarget.gain, spectrometerTolerance)
        && isWithinTolerance(spectrometerCurrent.focus, spectrometerTarget.focus, spectrometerTolerance);

      if (!allAligned) {
        showFloatingText('Belum presisi!', canvas.width / 2, 520, '#FF6666');
        SoundManager.play('wrong');
        return;
      }

      spectrometerCalibratedSteps++;
      SoundManager.play('correct');
      if (spectrometerCalibratedSteps >= spectrometerRequiredSteps) {
        completeActiveMinigame();
        return;
      }

      spectrometerTarget = {
        wave: 20 + (Math.random() * 60),
        gain: 20 + (Math.random() * 60),
        focus: 20 + (Math.random() * 60)
      };
      showFloatingText('Tahap berikutnya!', canvas.width / 2, 520, '#7CFC00');
    }

    function handleSensorCircuitTap(pos) {
      const clickedNode = sensorCircuitNodes.findIndex((node) => Math.sqrt(Math.pow(pos.x - node.x, 2) + Math.pow(pos.y - node.y, 2)) <= 28);
      if (clickedNode === -1) return;

      if (sensorCircuitSelectedNode === -1) {
        sensorCircuitSelectedNode = clickedNode;
        SoundManager.play('click');
        return;
      }

      if (sensorCircuitSelectedNode === clickedNode) {
        sensorCircuitSelectedNode = -1;
        return;
      }

      const a = Math.min(sensorCircuitSelectedNode, clickedNode);
      const b = Math.max(sensorCircuitSelectedNode, clickedNode);
      const edgeKey = `${a}-${b}`;
      const allowedEdge = sensorCircuitAllowedEdges.includes(edgeKey);
      sensorCircuitSelectedNode = -1;
      if (!allowedEdge) {
        SoundManager.play('wrong');
        return;
      }

      const edgeIndex = sensorCircuitEdges.indexOf(edgeKey);
      if (edgeIndex >= 0) {
        sensorCircuitEdges.splice(edgeIndex, 1);
      } else {
        sensorCircuitEdges.push(edgeKey);
      }
      sensorCircuitEnergyUsed = sensorCircuitEdges.length;

      if (sensorCircuitEnergyUsed > sensorCircuitEnergyBudget) {
        showFloatingText('Energi berlebih!', canvas.width / 2, 500, '#FF6666');
        SoundManager.play('hit');
        return;
      }

      const allRequiredActive = sensorCircuitMode === 'activate'
        ? sensorCircuitRequiredEdges.every((edge) => sensorCircuitEdges.includes(edge))
        : hasSensorCircuitPath(sensorCircuitSource, sensorCircuitTarget);
      if (allRequiredActive) {
        completeActiveMinigame();
      } else {
        SoundManager.play('click');
      }
    }

    function handleMicroscopeMove(pos) {
      if (activeSliderControl === 'focus') {
        const slider = getSliderInfo().microFocus;
        microscopeFocusCurrent = Math.max(0, Math.min(100, ((pos.x - slider.x) / slider.w) * 100));
      } else {
        microscopeLens.x = Math.max(210, Math.min(canvas.width - 210, pos.x));
        microscopeLens.y = Math.max(150, Math.min(390, pos.y));
      }

      const markerInLens = Math.sqrt(Math.pow(microscopeLens.x - microscopeMarker.x, 2) + Math.pow(microscopeLens.y - microscopeMarker.y, 2)) <= 42;
      const focusOk = isWithinTolerance(microscopeFocusCurrent, microscopeFocusTarget, microscopeTolerance);
      if (markerInLens && focusOk) completeActiveMinigame();
    }

    function handleMicroscopeTap(pos) {
      const focusSlider = getSliderInfo().microFocus;
      if (pos.y > focusSlider.y - 24 && pos.y < focusSlider.y + 24) {
        activeSliderControl = 'focus';
        microscopeFocusCurrent = Math.max(0, Math.min(100, ((pos.x - focusSlider.x) / focusSlider.w) * 100));
      } else {
        activeSliderControl = null;
        microscopeLens.x = Math.max(210, Math.min(canvas.width - 210, pos.x));
        microscopeLens.y = Math.max(150, Math.min(390, pos.y));
      }

      const markerInLens = Math.sqrt(Math.pow(microscopeLens.x - microscopeMarker.x, 2) + Math.pow(microscopeLens.y - microscopeMarker.y, 2)) <= 42;
      const focusOk = isWithinTolerance(microscopeFocusCurrent, microscopeFocusTarget, microscopeTolerance);
      if (markerInLens && focusOk) completeActiveMinigame();
    }

    function clampValue(value, minValue = 0, maxValue = 100) {
      return Math.max(minValue, Math.min(maxValue, value));
    }

    function isReactorStable() {
      const keys = ['temp', 'pressure', 'flow'];
      return keys.every((key) => {
        const zone = reactorSafeZones[key];
        return reactorValues[key] >= zone.min && reactorValues[key] <= zone.max;
      });
    }

    function applyReactorDelta(key, direction) {
      const delta = direction === 'up' ? 5 : -5;
      if (key === 'temp') {
        reactorValues.temp = clampValue(reactorValues.temp + delta);
        reactorValues.pressure = clampValue(reactorValues.pressure + (delta * 0.28));
        reactorValues.flow = clampValue(reactorValues.flow - (delta * 0.24));
      } else if (key === 'pressure') {
        reactorValues.pressure = clampValue(reactorValues.pressure + delta);
        reactorValues.flow = clampValue(reactorValues.flow + (delta * 0.26));
        reactorValues.temp = clampValue(reactorValues.temp - (delta * 0.22));
      } else {
        reactorValues.flow = clampValue(reactorValues.flow + delta);
        reactorValues.temp = clampValue(reactorValues.temp + (delta * 0.24));
        reactorValues.pressure = clampValue(reactorValues.pressure - (delta * 0.26));
      }

      if (isReactorStable()) {
        reactorStableSteps++;
        if (reactorStableSteps < reactorRequiredStableSteps) {
          rerollReactorStepTargets();
          showFloatingText('Range langkah berikutnya aktif!', canvas.width / 2, 500, '#7CFC00');
        }
      }

      if (reactorStableSteps >= reactorRequiredStableSteps) {
        completeActiveMinigame();
      }
    }

    function handleReactorTap(pos) {
      const rows = [
        { key: 'temp', y: 220 },
        { key: 'pressure', y: 310 },
        { key: 'flow', y: 400 }
      ];
      let tappedButton = false;
      rows.forEach((row) => {
        const plusBtn = { x: canvas.width / 2 + 120, y: row.y - 26, w: 54, h: 42 };
        const minusBtn = { x: canvas.width / 2 + 186, y: row.y - 26, w: 54, h: 42 };
        const inPlus = pos.x >= plusBtn.x && pos.x <= plusBtn.x + plusBtn.w && pos.y >= plusBtn.y && pos.y <= plusBtn.y + plusBtn.h;
        const inMinus = pos.x >= minusBtn.x && pos.x <= minusBtn.x + minusBtn.w && pos.y >= minusBtn.y && pos.y <= minusBtn.y + minusBtn.h;
        if (inPlus) {
          applyReactorDelta(row.key, 'up');
          SoundManager.play('click');
          tappedButton = true;
        }
        if (inMinus) {
          applyReactorDelta(row.key, 'down');
          SoundManager.play('click');
          tappedButton = true;
        }
      });

      if (!tappedButton) {
        showFloatingText('Tap tombol + atau - di kanan bar', canvas.width / 2, 500, '#9FC4FF');
      }
    }
    
    function initArtifactInfo() { gameState = GameState.ARTIFACT_INFO; artifactInfoTimer = 10; }
    function closeArtifactInfo() { activeFragment.collected = true; collectedFragments++; score += 200; scanTarget = null; if(collectedFragments >= totalFragments) { let oxyBonus = Math.floor(currentOxygen * 10); score += oxyBonus; showFloatingText(`BONUS OKSIGEN +${oxyBonus}`, canvas.width/2, canvas.height/2, '#00BFFF'); if (activeObstacleHits === 0) { score += 300; setTimeout(() => showFloatingText("CLEAN RUN +300", canvas.width/2, canvas.height/2 + 40, '#00FF00'), 500); } SoundManager.play('correct'); explorationPhase = 'complete'; initReadingPhase(); setTimeout(() => { gameState = GameState.READING; }, 2000); } else { gameState = GameState.EXPLORATION; } }
    function updateArtifactInfo(dt) { if (isPaused) return; artifactInfoTimer -= dt; if (artifactInfoTimer <= 0) closeArtifactInfo(); }
    
    function initReadingPhase() { readingTimer = 60; floatingTexts = []; }
    
    function initBattle() { 
      currentAlien=0; currentQuestion=0; selectedOption=-1; battleMessage=""; showQuestion=true; 
        battleEffects=[]; battleMistakes=0; quizStartTime=Date.now(); floatingTexts=[]; 
      alienAnim={state:'idle', y:0, alpha:1.0, timer:0}; 
      alien3Hits=0;
      isAlien3Critical=false;
      SoundManager.playBattleTheme();
        const planetQuiz = [...planets[currentPlanetIndex].quiz];
        for (let i = planetQuiz.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [planetQuiz[i], planetQuiz[j]] = [planetQuiz[j], planetQuiz[i]];
        }
      activeQuizSet = planetQuiz.slice(0, 5);
      currentAlien = getBattleAlienForQuestion(currentQuestion);
    }

    function updateUpgradeScreen(dt) { upgradeTimer -= dt; if (upgradeTimer <= 0) { gameState = GameState.LEAVING_PLANET; initLeavingPlanet(); } }
    
    function updateLeavingPlanet(dt) { 
        stars.forEach(s => { s.y += s.speed * dt; if(s.y > canvas.height) { s.y=0; s.x=Math.random()*canvas.width; }}); 
        leavingTimer -= dt; 
        leavingShipY -= 200 * dt; 
        if (leavingTimer <= 0) { 
            // Fix: Check for last planet BEFORE incrementing to avoid out-of-bounds access
            if(currentPlanetIndex >= planets.length - 1) {
                gameState = GameState.WIN;
              SoundManager.playWinTheme();
            } else { 
                currentPlanetIndex++; 
                gameState = GameState.SPACE_TRAVEL; 
                initSpaceTravel(); 
            } 
        } 
    }
    
    function getRank(s) { if(s>85000) return "LEGENDA ALAM SEMESTA"; if(s>75000) return "Pahlawan Tata Surya"; if(s>60000) return "Kapten Galaksi"; if(s>45000) return "Komandan Misi"; if(s>30000) return "Pilot Mahir"; if(s>15000) return "Penjelajah Bintang"; return "Taruna Petualang"; }
    function showMenuRoadmap() { SoundManager.play('click'); document.getElementById('main-menu').style.display = 'none'; returnState = GameState.MENU; gameState = GameState.ROADMAP; }
    function openInGameRoadmap() { SoundManager.play('click'); returnState = gameState; isPaused = true; gameState = GameState.ROADMAP; }
    function closeRoadmap() { SoundManager.play('click'); if (returnState === GameState.MENU) { document.getElementById('main-menu').style.display = 'flex'; gameState = GameState.MENU; SoundManager.playMenuTheme(); } else { gameState = returnState; isPaused = false; } }

    function updateSpaceTravel(dt) {
      if (isPaused) return; travelTime += dt; stars.forEach(s => { s.y += s.speed * dt; if(s.y > canvas.height) { s.y=0; s.x=Math.random()*canvas.width; }}); if (combo>0) { comboTimer-=dt; if(comboTimer<=0) combo=0; } autoShootTimer+=dt; 
      if (shipHitFxTimer > 0) {
        shipHitFxTimer = Math.max(0, shipHitFxTimer - dt);
        if (Math.random() < 0.9) {
          for (let i = 0; i < 2; i++) {
            particles.push({
              x: ship.x + (Math.random() * ship.width),
              y: ship.y + (Math.random() * ship.height * 0.7),
              vx: (Math.random() - 0.5) * 320,
              vy: (Math.random() - 0.2) * 320,
              life: 6 + (Math.random() * 2),
              decay: 16,
              c: Math.random() > 0.5 ? '#FFA500' : '#FFD166'
            });
          }
        }
      }
      if(autoShootTimer>0.3) { 
        const y = ship.y - 20; const x = ship.x; const w = ship.width;
        if (shipLevel === 0) { bullets.push({x: x + w/2 - 3, y: y, w:6, h:20, s:480, angle: 0}); }
        else if (shipLevel === 1) { bullets.push({x: x + 10, y: y, w:6, h:20, s:480, angle: 0}); bullets.push({x: x + w - 16, y: y, w:6, h:20, s:480, angle: 0}); }
        else if (shipLevel === 2) { bullets.push({x: x + w/2 - 3, y: y, w:6, h:20, s:480, angle: 0}); bullets.push({x: x + 5, y: y + 10, w:6, h:20, s:480, angle: 0}); bullets.push({x: x + w - 11, y: y + 10, w:6, h:20, s:480, angle: 0}); }
        else if (shipLevel === 3) { bullets.push({x: x + 15, y: y, w:6, h:20, s:480, angle: 0}); bullets.push({x: x + w - 21, y: y, w:6, h:20, s:480, angle: 0}); bullets.push({x: x, y: y + 10, w:6, h:20, s:480, angle: -0.61}); bullets.push({x: x + w, y: y + 10, w:6, h:20, s:480, angle: 0.61}); }
        SoundManager.play('shoot'); autoShootTimer=0; 
      }
      if(touchX!==null && isTouching) { let diff = touchX - ship.width/2 - ship.x; let speed = ship.speed * dt; if(Math.abs(diff)>speed) ship.x += (diff>0 ? speed : -speed); else ship.x = touchX - ship.width/2; ship.x = Math.max(0, Math.min(canvas.width-ship.width, ship.x)); }
      const asteroidSpawnChance = (0.03 + (currentPlanetIndex * 0.005)) * gameBalance.asteroidSpawnMult;
      if (Math.random() < asteroidSpawnChance * 60 * dt) {
        const variant = pickAsteroidVariant(currentPlanetIndex);
        if (!variant) {
          // Skip this spawn tick if no variant is available.
        } else {
          let maxHP = Math.min(6, 2 + Math.floor(currentPlanetIndex / 1.5) + gameBalance.asteroidHpBonus);
          let hp = Math.random() < 0.2 + (currentPlanetIndex * 0.1) ? Math.floor(Math.random() * maxHP) + 1 : 1;
          hp = Math.max(3, Math.floor(hp * (variant.hpMult || 1)));

          const sizeVariance = 0.9 + (Math.random() * 0.45);
          let size = (24 + (hp * 14)) * (variant.sizeMult || 1) * sizeVariance;
          let speed = (120 + Math.random() * 120) * gameBalance.asteroidSpeedMult * (variant.speedMult || 1);
          if (hp > 2) speed *= 0.6;

          asteroids.push({
            x: Math.random() * (canvas.width - size),
            y: -size,
            w: size,
            h: size,
            s: speed,
            r: 0,
            rs: (Math.random() - 0.5) * 6 * dt,
            hp: hp,
            maxHp: hp,
            hitTimer: 0,
            grazed: false,
            img: variant.key,
            damageSprites: variant.damageSprites || null,
            scoreBonusMult: variant.scoreBonusMult || 1
          });
        }
      }
      bullets = bullets.filter(b => { b.y-=b.s*dt; if (b.angle) b.x += Math.sin(b.angle) * b.s * dt; return b.y>0; });
      asteroids = asteroids.filter(a => {
        a.y+=a.s*dt; a.r+=a.rs; if(a.hitTimer>0) a.hitTimer--;
        if(a.x < ship.x+ship.width && a.x+a.w > ship.x && a.y < ship.y+ship.height && a.y+a.h > ship.y) { playerHP-=gameBalance.collisionDamage; phaseHitTaken=true; shipHitFxTimer = 0.45; if(combo>1) showFloatingText("COMBO HILANG!", ship.x, ship.y-50, '#F00'); showFloatingText("KENA ASTEROID!", ship.x + (ship.width/2), ship.y - 10, '#FFA500'); combo=0; SoundManager.play('hit'); for(let i=0; i<22; i++) particles.push({x:ship.x+ship.width/2, y:ship.y+(ship.height*0.45), vx:(Math.random()-0.5)*620, vy:(Math.random()-0.3)*620, life:7 + (Math.random()*2), decay: 14, c: (i % 3 === 0 ? '#FF4500' : (i % 2 === 0 ? '#FFD166' : '#FFA500'))}); if(playerHP<=0) { gameState=GameState.GAME_OVER; SoundManager.playGameOverTheme(); } return false; }
        let cx=a.x+a.w/2, cy=a.y+a.h/2, sx=ship.x+ship.width/2, sy=ship.y+ship.height/2; let dist = Math.sqrt(Math.pow(cx-sx,2)+Math.pow(cy-sy,2)); if(!a.grazed && dist < (a.w/2+ship.width/2)+30 && dist > (a.w/2+ship.width/2)) { a.grazed=true; score+=20; showFloatingText("NYARIS!", ship.x+40, ship.y, '#0FF'); }
        for(let i=bullets.length-1; i>=0; i--) { let b = bullets[i]; if(b.x < a.x+a.w && b.x+b.w > a.x && b.y < a.y+a.h && b.y+b.h > a.y) { bullets.splice(i,1); a.hp--; a.hitTimer=5; for(let p=0; p<3; p++) particles.push({x:b.x, y:b.y, vx:(Math.random()-0.5)*240, vy:(Math.random()-0.5)*240, life:0.3, c:'#FFF'}); if(a.hp<=0) { asteroidKills++; stats.asteroidsDestroyed++; combo++; comboTimer=2.0; let mult = 1+(combo*0.05); let base = a.maxHp>1 ? 30 : 10; let fs=Math.floor(base*mult*(a.scoreBonusMult||1)); score+=fs; showFloatingText(`+${fs}`+(combo>1?` x${mult.toFixed(1)}`:''), a.x, a.y, '#FF0'); SoundManager.play('explosion'); for(let p=0; p<10+(a.maxHp*2); p++) particles.push({x:cx, y:cy, vx:(Math.random()-0.5)*480, vy:(Math.random()-0.5)*480, life:0.8, c:'#DAA520'}); return false; } return true; } } return a.y < canvas.height+50;
      });
      particles = particles.filter(p => { p.x+=p.vx*dt; p.y+=p.vy*dt; p.life-=(dt * (p.decay || 1)); return p.life>0; }); floatingTexts = floatingTexts.filter(t => { t.y-=60*dt; t.life-=dt; return t.life>0; }); if(travelTime >= travelDuration) { if(!phaseHitTaken) { score+=200; showFloatingText("PERFECT HP +200", canvas.width/2, canvas.height/2, '#0F0'); } gameState = GameState.APPROACHING_PLANET; initApproachingPlanet(); }
    }

    function updateExploration(dt) {
      if (explorationPhase === 'complete' || isPaused) return;

      const planet = planets[currentPlanetIndex];
      const visualProfile = getPlanetExplorationVisualProfile(planet.name);
      if (scanReleaseHintCooldown > 0) scanReleaseHintCooldown -= dt;
      if (scanPromptFlash > 0) scanPromptFlash = Math.max(0, scanPromptFlash - (dt * 1.8));
      currentOxygen -= gameBalance.oxygenDrainPerSec * dt;
      if (currentOxygen <= 0) {
        currentOxygen = 0;
        oxygenHpDrainTickTimer += dt;
        while (oxygenHpDrainTickTimer >= 1) {
          playerHP -= gameBalance.oxygenHpTickDamage;
          oxygenHpDrainTickTimer -= 1;
        }
        if (playerHP <= 0) {
          playerHP = 0;
          gameState = GameState.GAME_OVER;
          SoundManager.playGameOverTheme();
          return;
        }
      } else {
        oxygenHpDrainTickTimer = 0;
      }

      let wx = (planet.envType === 'wind') ? (Math.sin(Date.now() / 1000) * 0.5 * (visualProfile.windStrengthMult || 1)) : 0;

      envParticles.forEach(p => {
        if (planet.envType === 'wind' || planet.envType === 'ice') {
          p.x += (p.speed + wx * 300) * dt;
          p.y += p.speed * dt;
        } else if (planet.envType === 'heat') {
          p.y -= p.speed * dt;
        } else {
          p.x += 12 * dt;
          p.y += 6 * dt;
        }
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      });

      if (!isScanButtonPressed) {
        obstacles.forEach(o => {
          if (planet.envType === 'wind') o.x += Math.sin(Date.now() / 500) * 60 * dt;
        });

        const isBlocked = (x, y) => {
          if (x < 25 || x > canvas.width - 25) return true;
          if (y < 35 || y > canvas.height - 35) return true;
          for (const o of obstacles) {
            if (x > o.x - 25 && x < o.x + o.w + 25 && y > o.y - 35 && y < o.y + o.h + 35) {
              return true;
            }
          }
          return false;
        };

        const startX = astronaut.x;
        const startY = astronaut.y;
        let targetX = startX;
        let targetY = startY;

        if (isTouching && touchX !== null) {
          const dx = touchX - startX;
          const dy = touchY - startY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const step = astronaut.speed * dt;
          if (dist > 5) {
            targetX += (dx / dist) * step;
            targetY += (dy / dist) * step;
          }
        }

        targetX += wx * 60 * dt;

        if (!isBlocked(targetX, targetY)) {
          astronaut.x = targetX;
          astronaut.y = targetY;
        } else {
          activeObstacleHits++;

          // If diagonal movement is blocked, allow a slower side-step to reduce "stuck" feeling.
          const moveX = targetX - startX;
          const moveY = targetY - startY;
          const slideFactor = 0.28;
          let moved = false;

          const slideX = startX + (moveX * slideFactor);
          if (!isBlocked(slideX, startY)) {
            astronaut.x = slideX;
            moved = true;
          }

          const slideY = startY + (moveY * slideFactor);
          if (!moved && !isBlocked(startX, slideY)) {
            astronaut.y = slideY;
            moved = true;
          }

          if (!moved && Math.abs(moveX) > 0.001) {
            const microX = startX + (Math.sign(moveX) * Math.max(0.8, Math.abs(moveX) * 0.15));
            if (!isBlocked(microX, startY)) {
              astronaut.x = microX;
            }
          }
        }
      }

      oxygenTanks = oxygenTanks.filter(t => {
        if (Math.sqrt(Math.pow(astronaut.x - t.x, 2) + Math.pow(astronaut.y - t.y, 2)) < 40) {
          currentOxygen = Math.min(100, currentOxygen + 30);
          score += 10;
          SoundManager.play('collect');
          return false;
        }
        return true;
      });

      const hadScanTarget = !!scanTarget;
      scanTarget = null;
      infoFragments.forEach(f => {
        if (!f.collected) {
          f.pulse += 6 * dt;
          if (Math.sqrt(Math.pow(astronaut.x - f.x, 2) + Math.pow(astronaut.y - f.y, 2)) < 70) scanTarget = f;
        }
      });

      if (scanTarget && !hadScanTarget) {
        scanPromptFlash = 1;
        if (!scanPromptShown) {
          showInGameNotification('Dekati artefak, lalu tahan tombol hijau SCAN ya!', 2200);
          scanPromptShown = true;
        }
      }

      if (!scanTarget) {
        isScanButtonPressed = false;
      }

      if (scanTarget && isScanButtonPressed) {
        isScanning = true;
        scanProgress += 60 * dt;
        if (Math.random() < 0.1) SoundManager.play('scan');
        if (scanProgress >= scanRequired) {
          startMinigame(scanTarget);
          scanProgress = 0;
          isScanning = false;
          scanTarget = null;
          isScanButtonPressed = false;
        }
      } else {
        isScanning = false;
        scanProgress = Math.max(0, scanProgress - 120 * dt);
      }

      floatingTexts = floatingTexts.filter(t => {
        t.y -= 60 * dt;
        t.life -= dt;
        return t.life > 0;
      });
    }

    function updateReading(dt) { readingTimer -= dt; if (readingTimer <= 0) { gameState = GameState.BATTLE; initBattle(); } }

    function checkAnswer() {
      // Use activeQuizSet instead of the main planets array
      const q = activeQuizSet[currentQuestion];
      
      showQuestion = false; stats.quizTotal++;
      let pLaserColor = (playerData.gender === 'male') ? '#00BFFF' : '#FF1493';
      let aLaserColor = '#FF0000'; let timeTaken = (Date.now() - quizStartTime) / 1000;
      const activeAlien = getBattleAlienForQuestion(currentQuestion);
      if(selectedOption === q.correct) {
        battleMessage = "BENAR! Tembakkan laser!"; let qScore = 1000;
        if (timeTaken < 3) qScore += 500; else if (timeTaken < 5) qScore += 250;
        score += qScore; stats.quizCorrect++; SoundManager.play('correct'); SoundManager.play('shoot');
        battleEffects.push({type:'laser', sx: 190, sy: 160, ex: 660, ey: 180, t: 20, c: pLaserColor });
        setTimeout(() => battleEffects.push({type:'explosion', x:660, y:180, r:0, mr:60, t:20}), 200);
        if (activeAlien === 2) {
          alien3Hits = Math.min(battleAlien3MaxHp, alien3Hits + 1);
          setTimeout(() => {
            if (alien3Hits >= battleAlien3MaxHp) {
              alienAnim.state = 'dying';
              alienAnim.y = 0;
              alienAnim.alpha = 1.0;
              alienAnim.timer = 40;
              SoundManager.play('explosion');
            } else {
              if (!isAlien3Critical && alien3Hits >= 2) {
                triggerAlien3CriticalTransformation();
              }
              advanceBattleQuestion();
            }
          }, 600);
        } else {
          setTimeout(() => {
            alienAnim.state = 'dying';
            alienAnim.y = 0;
            alienAnim.alpha = 1.0;
            alienAnim.timer = 40;
            SoundManager.play('explosion');
          }, 500);
        }
      } else {
        battleMessage = "SALAH! Kena serangan balik!"; playerHP -= gameBalance.quizWrongDamage; battleMistakes++; SoundManager.play('wrong'); SoundManager.play('hit');
        battleEffects.push({type:'laser', sx: 610, sy: 180, ex: 140, ey: 180, t: 20, c: aLaserColor });
        setTimeout(() => { if(playerHP <= 0) { gameState = GameState.GAME_OVER; SoundManager.playGameOverTheme(); } else { selectedOption = -1; showQuestion = true; quizStartTime = Date.now(); } }, 1500);
      }
    }
    
    function nextLevelLogic() {
      alienAnim.state = 'idle';
      alienAnim.y = 0;
      alienAnim.alpha = 1.0;
      advanceBattleQuestion();
    }

    function getPlanetMissionTotal(planetIndex) {
      const safeIndex = Math.max(0, Math.min(planets.length - 1, planetIndex));
      const planet = planets[safeIndex];
      if (!planet || !Array.isArray(planet.infoFragments)) return 0;
      return planet.infoFragments.length;
    }

    function getProgressSnapshot() {
      const totalPlanets = planets.length;
      const safePlanetIndex = Math.max(0, Math.min(totalPlanets - 1, currentPlanetIndex));
      const currentPlanetName = planets[safePlanetIndex]?.name || '-';
      const currentMissionTotal = Math.max(0, getPlanetMissionTotal(safePlanetIndex));
      const collectedFromFragments = Array.isArray(infoFragments)
        ? infoFragments.filter((fragment) => fragment && fragment.collected && fragment.planetIndex === safePlanetIndex).length
        : 0;
      const collectedCounterForCurrentPlanet = (collectedFragmentsPlanetIndex === safePlanetIndex)
        ? collectedFragments
        : 0;
      const currentMissionDone = Math.max(
        0,
        Math.min(currentMissionTotal, Math.max(collectedCounterForCurrentPlanet, collectedFromFragments))
      );
      const currentMissionRemaining = Math.max(0, currentMissionTotal - currentMissionDone);

      let completedBeforeCurrentPlanet = 0;
      for (let i = 0; i < safePlanetIndex; i++) {
        completedBeforeCurrentPlanet += getPlanetMissionTotal(i);
      }

      const totalMissionCount = planets.reduce((total, _, index) => total + getPlanetMissionTotal(index), 0);
      const completedMissionCount = Math.max(
        0,
        Math.min(totalMissionCount, completedBeforeCurrentPlanet + currentMissionDone)
      );

      return {
        planetLabel: `${safePlanetIndex + 1}/${Math.max(1, totalPlanets)}`,
        currentPlanetName,
        currentMissionDone,
        currentMissionTotal,
        currentMissionRemaining,
        completedMissionCount,
        totalMissionCount,
        globalProgressRatio: totalMissionCount > 0 ? (completedMissionCount / totalMissionCount) : 0
      };
    }

    // --- DRAWING ---
    function drawHUD() { 
      ctx.save(); 
      const isMinigameState = gameState === GameState.EXCAVATION || gameState === GameState.SIGNAL || gameState === GameState.DRILLING || gameState === GameState.GENERATOR || gameState === GameState.SPECTROMETER || gameState === GameState.SENSOR_CIRCUIT || gameState === GameState.MICROSCOPE || gameState === GameState.REACTOR;
      const compactTopHud = gameState === GameState.READING || isMinigameState;
      const hudNameY = compactTopHud ? 22 : 30;
      const hudHpY = compactTopHud ? 44 : 60;
      const progress = getProgressSnapshot();
      const progressPercent = Math.round(progress.globalProgressRatio * 100);
      ctx.fillStyle = '#FFF'; ctx.font = compactTopHud ? 'bold 16px Arial' : 'bold 20px Arial'; ctx.textAlign = 'left'; ctx.shadowColor = 'black'; ctx.shadowBlur = 4; 
      ctx.fillText(`Petualang: ${playerData.name}`, 20, hudNameY); 
      const displayHP = Math.max(0, Math.min(100, Math.round(playerHP)));
      ctx.fillStyle = playerHP > 50 ? '#0F0' : (playerHP > 20 ? '#FF0' : '#F00'); ctx.fillText(`HP: ${displayHP}%`, 20, hudHpY); 

      // --- PROGRESS INDICATOR (collapsed pill / expanded panel) ---
      // Sembunyikan saat minigame / reading agar tidak mengganggu
      if (!isMinigameState && gameState !== GameState.READING) {
      const isBottomLeftPhase = gameState === GameState.SPACE_TRAVEL || gameState === GameState.EXPLORATION;
      const pillW = 180, pillH = 38;
      const pillX = isBottomLeftPhase ? 18 : (canvas.width / 2 - pillW / 2);
      const pillY = isBottomLeftPhase ? (canvas.height - 50) : 8;
      const progressPanelW = 360;
      const progressBarW = progressPanelW - 20;
      const progressPanelX = isBottomLeftPhase ? 18 : (canvas.width / 2 - progressPanelW / 2);
      const progressPanelY = isBottomLeftPhase ? (canvas.height - 140) : 8;

      if (progressExpanded) {
        // Full detail panel
        ctx.fillStyle = 'rgba(0, 0, 0, 0.82)';
        ctx.beginPath();
        ctx.roundRect(progressPanelX, progressPanelY, progressPanelW, 82, 10);
        ctx.fill();
        ctx.strokeStyle = '#7FDFFF';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#BFEFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.shadowColor = 'black'; ctx.shadowBlur = 3;
        ctx.fillText(`Planet ${progress.planetLabel}: ${progress.currentPlanetName}`, progressPanelX + 10, progressPanelY + 21);
        ctx.fillText(`Misi: ${progress.currentMissionDone}/${progress.currentMissionTotal} selesai (sisa ${progress.currentMissionRemaining})`, progressPanelX + 10, progressPanelY + 40);

        ctx.fillStyle = '#2F3A52';
        ctx.beginPath();
        ctx.roundRect(progressPanelX + 10, progressPanelY + 52, progressBarW, 14, 7);
        ctx.fill();
        const filledProgressBarWidth = Math.max(0, Math.min(progressBarW, progressBarW * progress.globalProgressRatio));
        ctx.fillStyle = '#00D58B';
        ctx.beginPath();
        ctx.roundRect(progressPanelX + 10, progressPanelY + 52, filledProgressBarWidth, 14, 7);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(
          `Progres Keseluruhan: ${progressPercent}% (${progress.completedMissionCount}/${progress.totalMissionCount} misi)`,
          progressPanelX + progressPanelW / 2,
          progressPanelY + 68
        );
      } else {
        // Collapsed pill — label + mini bar + persentase
        ctx.fillStyle = 'rgba(0, 0, 0, 0.72)';
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 14);
        ctx.fill();
        ctx.strokeStyle = '#00D58B';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label kecil
        ctx.fillStyle = '#AAFFDD';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'left';
        ctx.shadowColor = 'black'; ctx.shadowBlur = 3;
        ctx.fillText('Progres Keseluruhan', pillX + 8, pillY + 13);

        // Mini progress bar
        const miniBarX = pillX + 8;
        const miniBarY = pillY + 22;
        const miniBarW = 110;
        const miniBarH = 7;
        ctx.fillStyle = '#2F3A52';
        ctx.beginPath();
        ctx.roundRect(miniBarX, miniBarY, miniBarW, miniBarH, 3);
        ctx.fill();
        const filledMini = Math.max(0, Math.min(miniBarW, miniBarW * progress.globalProgressRatio));
        ctx.fillStyle = '#00D58B';
        ctx.beginPath();
        ctx.roundRect(miniBarX, miniBarY, filledMini, miniBarH, 3);
        ctx.fill();

        // Teks persentase
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'right';
        ctx.shadowColor = 'black'; ctx.shadowBlur = 3;
        ctx.fillText(`${progressPercent}%`, pillX + pillW - 8, pillY + 30);
      }
      } // end: !isMinigameState && gameState !== READING
      
      // --- PERBAIKAN POSISI SKOR ---
      ctx.fillStyle = '#FFD700'; 
      if (gameState === GameState.BATTLE) {
          // Battle: kanan atas agar tidak bertubrukan dengan progress di tengah atas
        ctx.textAlign = 'right';
          ctx.fillText(`Skor: ${score}`, canvas.width - 20, 26);
      } else if (isMinigameState) {
        ctx.textAlign = 'right';
        ctx.fillText(`Skor: ${score}`, canvas.width - 20, 26);
      } else {
          // Mode Lain: Taruh di Tengah-Bawah sesuai permintaan
        ctx.textAlign = 'center';
          ctx.fillText(`Skor: ${score}`, canvas.width / 2, canvas.height - 30);
      }

      if (gameState === GameState.SPACE_TRAVEL || gameState === GameState.EXPLORATION || gameState === GameState.BATTLE) { 
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; ctx.beginPath(); ctx.arc(canvas.width - 40, 40, 30, 0, 6.28); ctx.fill(); 
          ctx.fillStyle = '#000'; 
          if (isPaused) { 
              ctx.beginPath(); ctx.moveTo(canvas.width-45, 30); ctx.lineTo(canvas.width-45, 50); ctx.lineTo(canvas.width-25, 40); ctx.fill(); 
          } else { 
              ctx.fillRect(canvas.width - 50, 30, 8, 20); ctx.fillRect(canvas.width - 38, 30, 8, 20); 
          } 
          ctx.fillStyle = 'rgba(30, 144, 255, 0.6)'; ctx.beginPath(); ctx.arc(canvas.width - 110, 40, 30, 0, 6.28); ctx.fill(); 
          ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign='center'; ctx.fillText('PETA', canvas.width - 110, 45); 
      } 
      ctx.restore(); 
      if (isPaused) { ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0,0,canvas.width, canvas.height); ctx.fillStyle = '#FFF'; ctx.textAlign = 'center'; ctx.font = 'bold 40px Arial'; ctx.fillText("PAUSED", canvas.width/2, canvas.height/2); } 
    }

    function drawStart() { if (images.startBg.complete && images.startBg.naturalWidth !== 0) ctx.drawImage(images.startBg, 0, 0, canvas.width, canvas.height); else { ctx.fillStyle='#000'; ctx.fillRect(0,0,canvas.width,canvas.height); } const pulse = Math.abs(Math.sin(Date.now() / 500)); ctx.globalAlpha = 0.5 + (pulse * 0.5); ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'; ctx.beginPath(); ctx.roundRect(canvas.width/2 - 300, canvas.height - 150, 600, 60, 30); ctx.fill(); ctx.fillStyle = '#FFF'; ctx.font = 'bold 24px Arial'; ctx.textAlign = 'center'; ctx.fillText("Ketuk di mana saja untuk mulai petualangan!", canvas.width/2, canvas.height - 110); ctx.globalAlpha = 1.0; }
    function drawSpaceTravel() { ctx.fillStyle = '#000'; ctx.fillRect(0,0,canvas.width,canvas.height); stars.forEach(s => { ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, 6.28); ctx.fill(); }); const shipBob = Math.sin(Date.now()/200)*3; let sImg = images.ship0; if (shipLevel === 1) sImg = images.ship1; if (shipLevel === 2) sImg = images.ship2; if (shipLevel === 3) sImg = images.ship3; if (sImg && sImg.complete && sImg.naturalWidth !== 0) { ctx.drawImage(sImg, ship.x, ship.y, ship.width, ship.height); } else { ctx.fillStyle = '#4A90E2'; ctx.fillRect(ship.x, ship.y, ship.width, ship.height); } bullets.forEach(b => { ctx.shadowBlur=10; ctx.shadowColor='#0FF'; ctx.fillStyle='#0FF'; ctx.fillRect(b.x, b.y, b.w, b.h); ctx.shadowBlur=0; }); asteroids.forEach(a => { ctx.save(); ctx.translate(a.x+a.w/2, a.y+a.h/2); ctx.rotate(a.r); const astImg = getAsteroidRenderImage(a); if (astImg && astImg.complete && astImg.naturalWidth !== 0) { if (a.hitTimer > 0) { ctx.globalAlpha = 0.7; ctx.drawImage(astImg, -a.w/2, -a.h/2, a.w, a.h); ctx.globalCompositeOperation = 'source-atop'; ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.fillRect(-a.w/2, -a.h/2, a.w, a.h); ctx.globalAlpha = 1.0; ctx.globalCompositeOperation = 'source-over'; } else { ctx.drawImage(astImg, -a.w/2, -a.h/2, a.w, a.h); } } else { ctx.fillStyle = a.hitTimer>0 ? '#FFF' : '#5C4033'; ctx.beginPath(); ctx.arc(0,0, a.w/2, 0, 6.28); ctx.fill(); ctx.fillStyle='rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.arc(-a.w*0.2, -a.h*0.2, a.w*0.15, 0, 6.28); ctx.fill(); } ctx.restore(); }); particles.forEach(p => { ctx.fillStyle = p.c; ctx.globalAlpha = p.life/20; ctx.beginPath(); ctx.arc(p.x, p.y, 2+Math.random()*2, 0, 6.28); ctx.fill(); ctx.globalAlpha=1.0; }); floatingTexts.forEach(t => { ctx.fillStyle = t.color; ctx.globalAlpha = t.life/60; ctx.font = 'bold 20px Arial'; ctx.textAlign='center'; ctx.fillText(t.text, t.x, t.y); ctx.globalAlpha=1.0; }); if (planets[currentPlanetIndex].envType === 'heat') { ctx.fillStyle = `rgba(255, 50, 0, ${0.1 + Math.sin(Date.now()/500)*0.1})`; ctx.fillRect(0,0,canvas.width, canvas.height); } if (planets[currentPlanetIndex].envType === 'ice') { const grad = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 300, canvas.width/2, canvas.height/2, 600); grad.addColorStop(0, 'rgba(255,255,255,0)'); grad.addColorStop(1, 'rgba(200,240,255,0.4)'); ctx.fillStyle = grad; ctx.fillRect(0,0,canvas.width, canvas.height); } drawHUD(); if (combo>1) { ctx.fillStyle='#FFD700'; ctx.textAlign='left'; ctx.font='bold 24px Arial'; ctx.fillText(`KOMBO x${combo}`, 20, 170); } }
    function drawApproachingPlanet() {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 6.28);
        ctx.fill();
      });

      const p = planets[currentPlanetIndex];
      const science = planetScienceFacts[p.name] || { temp: 'Data suhu belum tersedia', size: 'Data ukuran belum tersedia', composition: 'Data komposisi belum tersedia' };
      const progress = 1 - (approachTimer / 10);
      const visualSize = getPlanetVisualSize(p.name);
      const planetDiameter = visualSize.approach;
      const halfPlanet = planetDiameter / 2;
      const planetStartX = canvas.width + halfPlanet + 40;
      const planetEndX = canvas.width - (halfPlanet * 0.55);
      const planetX = planetStartX + ((planetEndX - planetStartX) * progress);
      const planetImg = getPlanetSpriteImage(p.name);

      if (planetImg && planetImg.complete && planetImg.naturalWidth !== 0) {
        ctx.drawImage(planetImg, planetX - (planetDiameter / 2), (canvas.height / 2) - (planetDiameter / 2), planetDiameter, planetDiameter);
      } else {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(planetX, canvas.height / 2, 400, 0, 6.28);
        ctx.fill();
      }

      let sImg = images.ship0;
      if (shipLevel === 1) sImg = images.ship1;
      if (shipLevel === 2) sImg = images.ship2;
      if (shipLevel === 3) sImg = images.ship3;

      const shipX = -100 + (progress * (canvas.width / 2 + 100));
      ctx.save();
      ctx.translate(shipX, canvas.height / 2);
      ctx.rotate(Math.PI / 2);
      if (sImg && sImg.complete && sImg.naturalWidth !== 0) {
        ctx.drawImage(sImg, -ship.width / 2, -ship.height / 2, ship.width, ship.height);
      } else {
        ctx.fillStyle = '#4A90E2';
        ctx.fillRect(-ship.width / 2, -ship.height / 2, ship.width, ship.height);
      }
      ctx.restore();

      ctx.shadowColor = '#000';
      ctx.shadowBlur = 5;
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 28px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`Mendekati Planet ${p.name}...`, canvas.width / 2, canvas.height / 2 - 80);
      ctx.fillStyle = '#FFF';
      ctx.font = '18px Arial';
      ctx.fillText(`Mendarat dalam ${Math.ceil(approachTimer)} detik...`, canvas.width / 2, canvas.height / 2 - 40);

      const panelW = 470;
      const panelH = 136;
      const panelX = (canvas.width - panelW) / 2;
      const panelY = canvas.height / 2 + 10;
      ctx.fillStyle = 'rgba(10, 20, 40, 0.78)';
      ctx.beginPath();
      ctx.roundRect(panelX, panelY, panelW, panelH, 14);
      ctx.fill();
      ctx.strokeStyle = '#00BFFF';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#7FDFFF';
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('FAKTA CEPAT PLANET', panelX + 18, panelY + 28);
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 17px Arial';
      ctx.fillText(`Suhu: ${science.temp}`, panelX + 18, panelY + 58);
      ctx.fillText(`Ukuran: ${science.size}`, panelX + 18, panelY + 86);
      ctx.fillText(`Komposisi: ${science.composition}`, panelX + 18, panelY + 114);

      ctx.shadowBlur = 0;
      drawHUD();
    }
    function drawLeavingPlanet() {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(s => {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 6.28);
        ctx.fill();
      });

      const p = planets[currentPlanetIndex];
      const planetImg = getPlanetSpriteImage(p.name);
      const visualSize = getPlanetVisualSize(p.name);
      const leavingDiameter = Math.max(580, Math.round(visualSize.leaving || (visualSize.approach * 0.92)));
      const planetX = canvas.width / 2;
      const planetY = canvas.height + (leavingDiameter * (visualSize.leavingOffset || 0.3));

      if (planetImg && planetImg.complete && planetImg.naturalWidth !== 0) {
        ctx.drawImage(planetImg, planetX - (leavingDiameter / 2), planetY - (leavingDiameter / 2), leavingDiameter, leavingDiameter);
      } else {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(planetX, planetY, leavingDiameter / 2, 0, 6.28);
        ctx.fill();
      }

      let sImg = images.ship0;
      if (shipLevel === 1) sImg = images.ship1;
      if (shipLevel === 2) sImg = images.ship2;
      if (shipLevel === 3) sImg = images.ship3;

      ctx.save();
      ctx.translate(canvas.width / 2, leavingShipY);
      if (sImg && sImg.complete && sImg.naturalWidth !== 0) {
        ctx.drawImage(sImg, -ship.width / 2, -ship.height / 2, ship.width, ship.height);
      } else {
        ctx.fillStyle = '#4A90E2';
        ctx.fillRect(-ship.width / 2, -ship.height / 2, ship.width, ship.height);
      }
      ctx.restore();

      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 28px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`Meninggalkan Planet ${p.name}...`, canvas.width / 2, 100);
      drawHUD();
    }
    function drawRoadmap() {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(s => {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 6.28);
        ctx.fill();
      });

      const startX = 100;
      const endX = canvas.width - 100;
      const y = canvas.height / 2;

      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 10]);
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(startX - 50, y, 40, 0, 6.28);
      ctx.fill();

      planets.forEach((p, i) => {
        const px = startX + (i * ((endX - startX) / (planets.length - 1)));
        const diameter = getPlanetVisualSize(p.name).roadmap;
        const planetImg = getPlanetSpriteImage(p.name);
        const labelOffset = Math.max(44, (diameter / 2) + 22);

        if (planetImg && planetImg.complete && planetImg.naturalWidth !== 0) {
          ctx.drawImage(planetImg, px - (diameter / 2), y - (diameter / 2), diameter, diameter);
        } else {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(px, y, diameter / 2, 0, 6.28);
          ctx.fill();
        }

        ctx.fillStyle = '#FFF';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(p.name, px, y + labelOffset);

        if (i === currentPlanetIndex) {
          ctx.strokeStyle = '#0F0';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(px, y, (diameter / 2) + 10, 0, 6.28);
          ctx.stroke();
        }
      });

      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.shadowColor = 'black';
      ctx.shadowBlur = 4;
      ctx.fillText("PETA GALAKSI BIMASAKTI", canvas.width / 2, 60);
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#333';
      ctx.fillRect(20, 20, 130, 50);
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, 130, 50);
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 18px Arial';
      ctx.fillText("Kembali", 85, 52);
    }
    function drawExploration() {
      const planet = planets[currentPlanetIndex];
      const visualProfile = getPlanetExplorationVisualProfile(planet.name);

      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, visualProfile.skyTop || planet.color);
      grad.addColorStop(1, visualProfile.skyBottom || '#000');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      envParticles.forEach((p) => {
        const alpha = clamp01((p.alpha || 0.25));
        ctx.fillStyle = `rgba(${visualProfile.particleColor || '255,255,255'}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 6.28);
        ctx.fill();
      });

      if (planet.envType === 'heat') {
        const heatAlpha = clamp01(0.08 + (Math.sin(Date.now() / 500) * 0.03));
        ctx.fillStyle = `rgba(255, 90, 40, ${heatAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const overlayPulse = Math.sin(Date.now() / 650) * (visualProfile.overlayPulse || 0);
      const overlayAlpha = Math.min(0.2, clamp01((visualProfile.overlayAlpha || 0) + overlayPulse));
      if (overlayAlpha > 0.01) {
        ctx.fillStyle = `rgba(${visualProfile.overlayColor || '255,255,255'}, ${overlayAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      obstacles.forEach((o) => {
        o.rot += (o.rs || 0);
        ctx.save();
        ctx.translate(o.x + o.w / 2, o.y + o.h / 2);
        ctx.rotate(o.rot);
        const obstacleImg = images[o.img];
        if (obstacleImg && obstacleImg.complete && obstacleImg.naturalWidth !== 0) {
          ctx.drawImage(obstacleImg, -o.w / 2, -o.h / 2, o.w, o.h);
        } else {
          ctx.fillStyle = '#5C4033';
          ctx.fillRect(-o.w / 2, -o.h / 2, o.w, o.h);
          ctx.fillStyle = '#3E2723';
          ctx.beginPath();
          ctx.arc(5, 5, 10, 0, 6.28);
          ctx.fill();
        }
        ctx.restore();
      });

      oxygenTanks.forEach((t) => {
        const f = Math.sin(Date.now() / 300) * 3;
        ctx.fillStyle = '#00BFFF';
        ctx.beginPath();
        ctx.roundRect(t.x - 8, t.y - 12 + f, 16, 24, 4);
        ctx.fill();
        ctx.fillStyle = '#E0F7FA';
        ctx.fillRect(t.x - 4, t.y - 10 + f, 4, 20);
        ctx.fillStyle = '#888';
        ctx.fillRect(t.x - 6, t.y - 16 + f, 12, 4);
      });

      infoFragments.forEach((f) => {
        if (!f.collected) {
          const p = Math.sin(f.pulse) * 5;
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#FFD700';
          ctx.fillStyle = 'rgba(255,215,0,0.3)';
          ctx.beginPath();
          ctx.arc(f.x, f.y, 25 + p, 0, 6.28);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#FFF';
          ctx.beginPath();
          ctx.arc(f.x, f.y, 10, 0, 6.28);
          ctx.fill();
        }
      });

      ctx.save();
      ctx.translate(astronaut.x, astronaut.y);
      if (planet.envType === 'wind') ctx.rotate(0.1);
      const charImg = (playerData.gender === 'male') ? images.exploreMale : images.exploreFemale;
      if (charImg.complete && charImg.naturalWidth !== 0) {
        ctx.drawImage(charImg, -astronaut.width / 2, -astronaut.height / 2, astronaut.width, astronaut.height);
      } else {
        ctx.fillStyle = '#FFF';
        ctx.fillRect(-15, -30, 30, 60);
      }
      if (isScanning && scanTarget) {
        ctx.strokeStyle = '#0F0';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, 40, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * (scanProgress / scanRequired)));
        ctx.stroke();
      }
      ctx.restore();

      const vignette = clamp01(visualProfile.vignetteAlpha || 0.3);
      const vignetteRadius = Math.max(220, Math.min(360, visualProfile.vignetteRadius || 320));
      const gradient = ctx.createRadialGradient(astronaut.x, astronaut.y, 48, astronaut.x, astronaut.y, vignetteRadius);
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(0.55, `rgba(0,0,0,${Math.max(0, vignette * 0.28)})`);
      gradient.addColorStop(1, `rgba(0,0,0,${vignette})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawHUD();

      ctx.fillStyle = '#FFF';
      ctx.textAlign = 'center';
      ctx.font = 'bold 20px Arial';
      ctx.fillText(`Artefak: ${collectedFragments}/${totalFragments}`, canvas.width / 2, 30);

      const oxygenPanelW = 150;
      const oxygenPanelH = 22;
      const oxygenPanelX = canvas.width - oxygenPanelW - 150;
      const oxygenPanelY = 30;
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.roundRect(oxygenPanelX, oxygenPanelY, oxygenPanelW, oxygenPanelH, 5);
      ctx.fill();

      const ow = (currentOxygen / 100) * (oxygenPanelW - 6);
      ctx.fillStyle = currentOxygen > 20 ? '#00BFFF' : '#F00';
      ctx.beginPath();
      ctx.roundRect(oxygenPanelX + 3, oxygenPanelY + 3, ow, oxygenPanelH - 6, 3);
      ctx.fill();

      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 13px Arial';
      ctx.textAlign = 'right';
      ctx.fillText('OKSIGEN', oxygenPanelX - 8, oxygenPanelY + 16);

      if (scanTarget && !scanTarget.collected) {
        const btnX = astronaut.x;
        const btnY = astronaut.y - 80;
        const r = 40;
        const isMercury = planet.name === 'Merkurius';
        const pulse = (Math.sin(Date.now() / 180) + 1) / 2;
        const progressRatio = Math.max(0, Math.min(1, scanProgress / scanRequired));

        ctx.beginPath();
        ctx.arc(btnX, btnY, r + 10 + (pulse * 5), 0, 6.28);
        ctx.fillStyle = `rgba(80,255,120,${0.08 + (pulse * 0.08) + (scanPromptFlash * 0.14)})`;
        ctx.fill();

        if (isMercury) {
          ctx.beginPath();
          ctx.arc(btnX, btnY, r + 20 + (pulse * 6), 0, 6.28);
          ctx.strokeStyle = `rgba(255,140,70,${0.24 + (pulse * 0.24)})`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.moveTo(btnX, btnY);
        ctx.lineTo(scanTarget.x, scanTarget.y);
        ctx.strokeStyle = isMercury ? 'rgba(255,170,90,0.75)' : 'rgba(50,205,50,0.65)';
        ctx.lineWidth = isMercury ? 3 : 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(btnX, btnY, r, 0, 6.28);
        ctx.fillStyle = isScanButtonPressed ? '#32CD32' : (isMercury ? 'rgba(30,210,95,0.82)' : 'rgba(0,255,0,0.6)');
        ctx.fill();
        ctx.strokeStyle = '#FFF';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(btnX, btnY, r + 6, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * progressRatio));
        ctx.strokeStyle = '#7CFC00';
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.fillStyle = '#FFF';
        ctx.textAlign = 'center';
        ctx.font = 'bold 12px Arial';
        if (isScanButtonPressed) {
          ctx.fillText('MEMINDAI', btnX, btnY - 5);
          ctx.fillText(`${Math.round(progressRatio * 100)}%`, btnX, btnY + 15);
        } else {
          ctx.fillText('TAHAN', btnX, btnY - 5);
          ctx.fillText('PINDAI', btnX, btnY + 15);
        }

        ctx.font = 'bold 13px Arial';
        ctx.fillStyle = isMercury ? '#FFD39B' : '#C6FFD8';
        ctx.fillText('TEKAN & TAHAN', btnX, btnY - 54);
      }

      if (collectedFragments > 0) {
        const startX = 20;
        const boxWidth = 260;
        const maxWidth = 240;
        const lineHeight = 16;
        let linesToDraw = [];
        ctx.font = '12px Arial';

        infoFragments.forEach((f) => {
          if (f.collected) {
            const words = f.data.short.split(' ');
            let line = '> ';
            for (let n = 0; n < words.length; n++) {
              const testLine = line + words[n] + ' ';
              const metrics = ctx.measureText(testLine);
              if (metrics.width > maxWidth && n > 0) {
                linesToDraw.push(line);
                line = `  ${words[n]} `;
              } else {
                line = testLine;
              }
            }
            linesToDraw.push(line);
            linesToDraw.push('');
          }
        });

        const boxHeight = Math.min((linesToDraw.length * lineHeight) + 40, canvas.height - 150);
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.roundRect(10, 100, boxWidth, boxHeight, 10);
        ctx.fill();
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = '#FFD700';
        ctx.textAlign = 'left';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('FAKTA DITEMUKAN:', 20, 125);
        ctx.fillStyle = '#FFF';
        ctx.font = '12px Arial';
        let yp = 150;
        for (let i = 0; i < linesToDraw.length; i++) {
          if (yp < 100 + boxHeight - 10) {
            ctx.fillText(linesToDraw[i], startX, yp);
            yp += lineHeight;
          }
        }
      }

      floatingTexts.forEach((t) => {
        ctx.fillStyle = t.color;
        ctx.globalAlpha = t.life / 60;
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(t.text, t.x, t.y);
        ctx.globalAlpha = 1.0;
      });
    }
    function getMinigamePanelRect() {
      return {
        x: 120,
        y: 110,
        w: canvas.width - 240,
        h: canvas.height - 190
      };
    }

    function drawMinigameFrame(title, subtitle, accentColor = '#00BFFF') {
      const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bg.addColorStop(0, '#0b1220');
      bg.addColorStop(1, '#05070d');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const panel = getMinigamePanelRect();
      ctx.fillStyle = 'rgba(8, 12, 24, 0.82)';
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(panel.x, panel.y, panel.w, panel.h, 18);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(title, canvas.width / 2, 56);
      ctx.fillStyle = '#E6EEF8';
      ctx.font = '16px Arial';
      ctx.fillText(subtitle, canvas.width / 2, 84);
    }

    function drawSliderControl(label, key, currentValue, targetValue, y, tolerance, sliderLookupKey = key) {
      const slider = getSliderInfo()[sliderLookupKey];
      const knobX = slider.x + (currentValue / 100) * slider.w;
      const inRange = isWithinTolerance(currentValue, targetValue, tolerance);

      ctx.fillStyle = '#FFF';
      ctx.textAlign = 'left';
      ctx.font = 'bold 17px Arial';
      ctx.fillText(`${label}: ${Math.round(currentValue)}`, slider.x, y - 16);

      ctx.fillStyle = '#253043';
      ctx.fillRect(slider.x, y - 6, slider.w, 12);
      ctx.fillStyle = '#6ED6FF';
      ctx.fillRect(slider.x, y - 6, (targetValue / 100) * slider.w, 12);
      ctx.fillStyle = 'rgba(255, 230, 120, 0.35)';
      const tolPx = (slider.w * (tolerance / 100));
      const targetPx = slider.x + (targetValue / 100) * slider.w;
      ctx.fillRect(targetPx - tolPx, y - 10, tolPx * 2, 20);

      ctx.fillStyle = inRange ? '#00ff88' : '#ffffff';
      ctx.beginPath();
      ctx.arc(knobX, y, 14, 0, 6.28);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function drawGenerator() {
      drawMinigameFrame('PERBAIKI GENERATOR', 'Aktifkan saklar sesuai urutan kode daya.', '#41D3FF');
      const panel = getMinigamePanelRect();

      generatorSwitches.forEach((sw) => {
        const isInSequence = generatorSwitchOrder.includes(sw.id);
        ctx.fillStyle = sw.active ? '#00FF88' : (isInSequence ? '#4FA7FF' : '#8899AA');
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, 34, 0, 6.28);
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#001018';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(sw.label, sw.x, sw.y + 8);
      });

      ctx.fillStyle = '#EAF3FF';
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'center';
      const orderText = generatorSwitchOrder.map((id) => generatorSwitches.find((sw) => sw.id === id)?.label || '?').join(' -> ');
      ctx.fillText(`Kode: ${orderText}`, canvas.width / 2, panel.y + panel.h - 58);
      ctx.fillStyle = '#8FD1FF';
      const inputText = generatorInputOrder.map((id) => generatorSwitches.find((sw) => sw.id === id)?.label || '?').join(' -> ') || '-';
      ctx.fillText(`Input: ${inputText}`, canvas.width / 2, panel.y + panel.h - 30);
      drawHUD();
    }

    function drawSpectrometer() {
      drawMinigameFrame('KALIBRASI SPEKTROMETER', 'Selaraskan Gelombang, Penguatan, dan Fokus, lalu tekan Kunci!', '#6ED6FF');

      spectrometerTolerance = Math.max(3, 8 - Math.floor(currentPlanetIndex / 2));
      drawSliderControl('Gelombang', 'wave', spectrometerCurrent.wave, spectrometerTarget.wave, 220, spectrometerTolerance);
      drawSliderControl('Penguatan', 'gain', spectrometerCurrent.gain, spectrometerTarget.gain, 300, spectrometerTolerance);
      drawSliderControl('Focus', 'focus', spectrometerCurrent.focus, spectrometerTarget.focus, 380, spectrometerTolerance, 'spectFocus');

      const lockW = 300;
      const lockH = 64;
      const lockX = canvas.width / 2 - (lockW / 2);
      const lockY = 416;
      ctx.fillStyle = '#1E90FF';
      ctx.beginPath();
      ctx.roundRect(lockX, lockY, lockW, lockH, 10);
      ctx.fill();
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 22px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('KUNCI KALIBRASI', canvas.width / 2, lockY + (lockH / 2));
      ctx.textBaseline = 'alphabetic';

      ctx.font = 'bold 18px Arial';
      ctx.fillStyle = '#7CFC00';
      ctx.fillText(`Tahap: ${spectrometerCalibratedSteps}/${spectrometerRequiredSteps}`, canvas.width / 2, 500);
      drawHUD();
    }

    function drawSignal() {
      const frameW = 400;
      const frameH = 300;
      const frameX = (canvas.width - frameW) / 2;
      const frameY = 150;
      const progressY = frameY + frameH + 24;
      const sliderW = Math.min(600, canvas.width - 200);
      const sliderX = (canvas.width - sliderW) / 2;
      const sliderY = canvas.height - 44;
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('PENYELARASAN SINYAL', canvas.width / 2, 60);
      ctx.font = '18px Arial';
      ctx.fillStyle = '#FFF';
      ctx.fillText('Geser pengatur sampai sinyal jernih!', canvas.width / 2, 100);
      ctx.fillStyle = '#000';
      ctx.fillRect(frameX, frameY, frameW, frameH);
      ctx.strokeStyle = '#0F0';
      ctx.lineWidth = 5;
      ctx.strokeRect(frameX, frameY, frameW, frameH);

      const clarity = Math.max(0, 1 - (Math.abs(signalCurrent - signalTarget) / 30));
      ctx.globalAlpha = clarity;
      ctx.fillStyle = '#00BFFF';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, frameY + (frameH / 2), 80, 0, 6.28);
      ctx.fill();

      ctx.globalAlpha = 1.0 - clarity;
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#FFF' : '#333';
        ctx.fillRect(frameX + (Math.random() * frameW), frameY + (Math.random() * frameH), 4, 4);
      }
      ctx.globalAlpha = 1.0;

      ctx.fillStyle = '#333';
      ctx.fillRect(frameX, progressY, frameW, 20);
      ctx.fillStyle = '#0F0';
      ctx.fillRect(frameX, progressY, (signalStability / 100) * frameW, 20);

      ctx.fillStyle = '#555';
      ctx.fillRect(sliderX, sliderY, sliderW, 10);
      ctx.fillStyle = '#FFF';
      ctx.beginPath();
      ctx.arc(sliderX + ((signalCurrent / 100) * sliderW), sliderY + 5, 20, 0, 6.28);
      ctx.fill();
      drawHUD();
    }

    function drawDrilling() {
      const gaugeY = 150;
      const gaugeH = 300;
      const gaugeW = 30;
      const centerX = canvas.width / 2;
      const leftGaugeX = centerX - 130;
      const rightGaugeX = centerX + 100;
      const buttonY = canvas.height - 90;

      ctx.fillStyle = '#222';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('PENGEBORAN INTI', canvas.width / 2, 60);
      ctx.fillStyle = '#FFF';
      ctx.font = '18px Arial';
      ctx.fillText('Tahan untuk mengebor, lepas kalau sudah panas!', canvas.width / 2, 100);

      ctx.fillStyle = '#000';
      ctx.fillRect(rightGaugeX, gaugeY, gaugeW, gaugeH);
      ctx.fillStyle = '#00BFFF';
      ctx.fillRect(rightGaugeX, gaugeY + ((100 - drillDepth) * 3), gaugeW, drillDepth * 3);

      ctx.fillStyle = '#000';
      ctx.fillRect(leftGaugeX, gaugeY, gaugeW, gaugeH);
      ctx.fillStyle = drillHeat > 80 ? '#F00' : '#FFA500';
      ctx.fillRect(leftGaugeX, gaugeY + ((100 - drillHeat) * 3), gaugeW, drillHeat * 3);

      ctx.strokeStyle = '#FFF';
      ctx.strokeRect(leftGaugeX, gaugeY, gaugeW, gaugeH);
      ctx.strokeRect(rightGaugeX, gaugeY, gaugeW, gaugeH);

      if (drillHeat > 70) {
        ctx.fillStyle = '#FF0000';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('AWAS PANAS!', leftGaugeX + (gaugeW / 2), 130);
      }

      ctx.fillStyle = isDrilling ? '#800' : '#F00';
      ctx.beginPath();
      ctx.arc(centerX, buttonY, 70, 0, 6.28);
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 24px Arial';
      ctx.fillText('BOR!', centerX, buttonY + 8);
      drawHUD();
    }

    function drawExcavation() {
      const panelSize = 400;
      const panelX = (canvas.width - panelSize) / 2;
      const panelY = Math.max(84, (canvas.height - panelSize) / 2);
      const centerX = canvas.width / 2;
      const centerY = panelY + (panelSize / 2);

      ctx.fillStyle = '#333';
      ctx.fillRect(panelX, panelY, panelSize, panelSize);
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, 6.28);
      ctx.fill();

      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('ARTEFAK TERDETEKSI!', centerX, panelY + 40);
      ctx.font = '16px Arial';
      ctx.fillText('Gosok layar untuk membersihkan!', centerX, panelY + panelSize - 20);

      excavationGrid.forEach((dust) => {
        if (!dust.active) return;
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, 10, 0, 6.28);
        ctx.fill();
      });

      if (Date.now() % 1000 < 500) {
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 30, 0, 6.28);
        ctx.fill();
      }
      drawHUD();
    }

    function drawSensorCircuit() {
      drawMinigameFrame('RAKIT RANGKAIAN SENSOR', 'Hubungkan node penting tanpa melebihi batas energi.', '#7ED0FF');
      const connectableNodes = sensorCircuitSelectedNode !== -1
        ? getSensorCircuitConnectableNodes(sensorCircuitSelectedNode)
        : new Set();

      sensorCircuitEdges.forEach((edge) => {
        const [a, b] = edge.split('-').map(Number);
        const n1 = sensorCircuitNodes[a];
        const n2 = sensorCircuitNodes[b];
        const isRequired = sensorCircuitRequiredEdges.includes(edge);
        const isRouteEdge = sensorCircuitMode === 'route' && (a === sensorCircuitSource || b === sensorCircuitSource || a === sensorCircuitTarget || b === sensorCircuitTarget);
        ctx.strokeStyle = isRequired ? '#00FF88' : (isRouteEdge ? '#FFD166' : '#00BFFF');
        ctx.lineWidth = isRequired ? 5 : 3;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      });

      sensorCircuitNodes.forEach((node, idx) => {
        const isSelectedNode = sensorCircuitSelectedNode === idx;
        const isConnectableNode = connectableNodes.has(idx);
        const isGoalNode = sensorCircuitMode === 'route' && (idx === sensorCircuitSource || idx === sensorCircuitTarget);
        ctx.fillStyle = isSelectedNode ? '#FFD700' : (isConnectableNode ? '#7CE3FF' : (isGoalNode ? '#FFD166' : '#FFFFFF'));
        ctx.beginPath();
        ctx.arc(node.x, node.y, 22, 0, 6.28);
        ctx.fill();
        ctx.strokeStyle = isSelectedNode ? '#FFF4B0' : (isConnectableNode ? '#00BFFF' : '#0D1321');
        ctx.lineWidth = isSelectedNode || isConnectableNode ? 3 : 2;
        ctx.stroke();
        ctx.fillStyle = '#0D1321';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(String(idx + 1), node.x, node.y + 5);
      });

      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 18px Arial';
      ctx.fillText(`Energi: ${sensorCircuitEnergyUsed}/${sensorCircuitEnergyBudget}`, canvas.width / 2, 458);
      ctx.font = '15px Arial';
      ctx.fillStyle = '#AEE8FF';
      if (sensorCircuitMode === 'activate') {
        const routeText = sensorCircuitRequiredEdges.map((edge) => {
          const [a, b] = edge.split('-').map(Number);
          return `${a + 1}-${b + 1}`;
        }).join(', ');
        ctx.fillText(sensorCircuitHintText, canvas.width / 2, 486);
        ctx.fillText(`Jalur wajib: ${routeText}`, canvas.width / 2, 512);
      } else {
        ctx.fillText(sensorCircuitHintText, canvas.width / 2, 492);
      }
      drawHUD();
    }

    function drawMicroscope() {
      drawMinigameFrame('KALIBRASI MIKROSKOP DIGITAL', 'Geser lensa ke titik merah dan sesuaikan fokus.', '#7CE3BE');

      const slideX = 220;
      const slideY = 150;
      const slideW = 520;
      const slideH = 250;

      ctx.fillStyle = '#DDE7EE';
      ctx.fillRect(slideX, slideY, slideW, slideH);
      ctx.fillStyle = '#C6D5E0';
      for (let i = 0; i < 28; i++) {
        const px = slideX + 8 + ((i * 37) % (slideW - 16));
        const py = slideY + 8 + (((i * 53) % (slideH - 16)));
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, 6.28);
        ctx.fill();
      }

      microscopeHintPulse += 0.06;
      const hintAlpha = 0.28 + (Math.sin(microscopeHintPulse) * 0.12);
      ctx.fillStyle = `rgba(255, 80, 80, ${hintAlpha})`;
      ctx.beginPath();
      ctx.arc(microscopeMarker.x, microscopeMarker.y, 11, 0, 6.28);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(microscopeLens.x, microscopeLens.y, microscopeLens.radius, 0, 6.28);
      ctx.clip();
      ctx.fillStyle = 'rgba(30, 80, 120, 0.16)';
      ctx.fillRect(slideX, slideY, slideW, slideH);
      ctx.fillStyle = '#ff4545';
      ctx.beginPath();
      ctx.arc(microscopeMarker.x, microscopeMarker.y, 16, 0, 6.28);
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = '#00E1FF';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(microscopeLens.x, microscopeLens.y, microscopeLens.radius, 0, 6.28);
      ctx.stroke();

      drawSliderControl('Focus', 'focus', microscopeFocusCurrent, microscopeFocusTarget, 470, microscopeTolerance, 'microFocus');

      const markerInLens = Math.sqrt(Math.pow(microscopeLens.x - microscopeMarker.x, 2) + Math.pow(microscopeLens.y - microscopeMarker.y, 2)) <= 42;
      const focusOk = isWithinTolerance(microscopeFocusCurrent, microscopeFocusTarget, microscopeTolerance);
      const confidence = markerInLens ? (focusOk ? 100 : 70) : 35;

      ctx.fillStyle = '#2F3944';
      ctx.fillRect(canvas.width / 2 - 180, 430, 360, 16);
      ctx.fillStyle = focusOk && markerInLens ? '#00FF88' : '#FFD166';
      ctx.fillRect(canvas.width / 2 - 180, 430, confidence * 3.6, 16);
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 17px Arial';
      ctx.fillText(`Deteksi: ${Math.round(confidence)}%`, canvas.width / 2, 454);
      drawHUD();
    }

    function drawReactor() {
      drawMinigameFrame('STABILKAN REAKTOR MINI', 'Tap tombol + untuk naikkan, tombol - untuk turunkan. Rentang target berubah tiap langkah stabil.', '#FF8F66');

      const rows = [
        { key: 'temp', label: 'Suhu', y: 220, color: '#FF7A59' },
        { key: 'pressure', label: 'Tekanan', y: 310, color: '#5DA9FF' },
        { key: 'flow', label: 'Laju Aliran', y: 400, color: '#7CFC00' }
      ];

      rows.forEach((row) => {
        const value = reactorValues[row.key];
        const zone = reactorSafeZones[row.key];
        const inZone = value >= zone.min && value <= zone.max;
        const barX = canvas.width / 2 - 220;
        const barY = row.y - 18;
        const barW = 320;
        const zoneX = barX + ((zone.min / 100) * barW);
        const zoneW = ((zone.max - zone.min) / 100) * barW;
        const valueX = barX + ((value / 100) * barW);

        ctx.fillStyle = '#2B2B2B';
        ctx.fillRect(barX, barY, barW, 30);

        // Safe zone: stronger fill + border so the target range is easy to read.
        ctx.fillStyle = 'rgba(0, 255, 136, 0.34)';
        ctx.fillRect(zoneX, barY, zoneW, 30);
        ctx.strokeStyle = '#1CFF9C';
        ctx.lineWidth = 2;
        ctx.strokeRect(zoneX, barY, zoneW, 30);

        ctx.strokeStyle = 'rgba(255,255,255,0.22)';
        ctx.lineWidth = 1;
        for (let t = 0; t <= 100; t += 10) {
          const tickX = barX + ((t / 100) * barW);
          ctx.beginPath();
          ctx.moveTo(tickX, barY + 2);
          ctx.lineTo(tickX, barY + 28);
          ctx.stroke();
        }

        ctx.strokeStyle = row.color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(valueX, barY - 4);
        ctx.lineTo(valueX, barY + 34);
        ctx.stroke();

        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(valueX, barY - 8, 5, 0, 6.28);
        ctx.fill();

        ctx.fillStyle = '#FFF';
        ctx.textAlign = 'left';
        ctx.font = 'bold 18px Arial';
        ctx.fillText(`${row.label}: ${Math.round(value)}  | Target ${zone.min}-${zone.max}`, canvas.width / 2 - 212, row.y - 28);

        // Move status below each bar to avoid colliding with value/target text.
        ctx.fillStyle = inZone ? '#00FF88' : '#FFB347';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(inZone ? 'AMAN' : 'BELUM AMAN', canvas.width / 2 - 212, row.y + 26);

        const plusBtn = { x: canvas.width / 2 + 120, y: row.y - 26, w: 54, h: 42 };
        const minusBtn = { x: canvas.width / 2 + 186, y: row.y - 26, w: 54, h: 42 };
        ctx.fillStyle = '#1E90FF';
        ctx.fillRect(plusBtn.x, plusBtn.y, plusBtn.w, plusBtn.h);
        ctx.fillRect(minusBtn.x, minusBtn.y, minusBtn.w, minusBtn.h);
        ctx.strokeStyle = '#FFF';
        ctx.strokeRect(plusBtn.x, plusBtn.y, plusBtn.w, plusBtn.h);
        ctx.strokeRect(minusBtn.x, minusBtn.y, minusBtn.w, minusBtn.h);
        ctx.fillStyle = '#FFF';
        ctx.textAlign = 'center';
        ctx.font = 'bold 22px Arial';
        ctx.fillText('+', plusBtn.x + (plusBtn.w / 2), plusBtn.y + 28);
        ctx.fillText('-', minusBtn.x + (minusBtn.w / 2), minusBtn.y + 28);
      });

      ctx.fillStyle = '#9FC4FF';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'right';
      ctx.fillText('Petunjuk: tap tombol + / - di kanan tiap bar', canvas.width / 2 + 238, 176);

      const progressRatio = Math.max(0, Math.min(1, reactorStableSteps / Math.max(1, reactorRequiredStableSteps)));
      const progressX = canvas.width / 2 - 250;
      const progressY = 448;
      const progressW = 500;
      const progressH = 14;

      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`Langkah stabil: ${reactorStableSteps}/${reactorRequiredStableSteps}`, progressX, progressY - 8);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#9FC4FF';
      ctx.fillText('Target reset tiap langkah', progressX + progressW, progressY - 8);

      ctx.fillStyle = '#1D2430';
      ctx.fillRect(progressX, progressY, progressW, progressH);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(progressX, progressY, progressW, progressH);

      const progressFill = progressW * progressRatio;
      const progGrad = ctx.createLinearGradient(progressX, progressY, progressX + progressW, progressY);
      progGrad.addColorStop(0, '#36D1DC');
      progGrad.addColorStop(1, '#5BFF8A');
      ctx.fillStyle = progGrad;
      ctx.fillRect(progressX, progressY, progressFill, progressH);
      drawHUD();
    }
    function drawArtifactInfo() { ctx.fillStyle = 'rgba(0,0,0,0.95)'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#FFD700'; ctx.font = 'bold 30px Arial'; ctx.textAlign='center'; ctx.fillText("ARTEFAK DITEMUKAN!", canvas.width/2, 100); ctx.beginPath(); ctx.arc(canvas.width/2, 250, 100, 0, 6.28); ctx.fillStyle='#FFD700'; ctx.fill(); ctx.fillStyle = '#FFF'; ctx.font = '20px Arial'; const text = activeFragment.data.detail; const words = text.split(' '); let line = ''; let y = 400; for(let n = 0; n < words.length; n++) { let testLine = line + words[n] + ' '; if(ctx.measureText(testLine).width > 600 && n > 0) { ctx.fillText(line, canvas.width/2, y); line = ' ' + words[n] + ' '; y += 30; } else { line = testLine; } } ctx.fillText(line, canvas.width/2, y); ctx.fillStyle = '#4CAF50'; ctx.beginPath(); ctx.roundRect(canvas.width/2 - 100, canvas.height - 100, 200, 50, 25); ctx.fill(); ctx.fillStyle = '#FFF'; ctx.font = 'bold 20px Arial'; ctx.fillText("LANJUT", canvas.width/2, canvas.height - 68); ctx.font = '16px Arial'; ctx.fillStyle='#AAA'; ctx.fillText(`Otomatis lanjut dalam ${Math.ceil(artifactInfoTimer)} detik...`, canvas.width/2, canvas.height - 20); }
    function drawUpgradeScreen() { if (images.upgradeBg && images.upgradeBg.complete && images.upgradeBg.naturalWidth !== 0) { ctx.drawImage(images.upgradeBg, 0, 0, canvas.width, canvas.height); } else { ctx.fillStyle = '#000033'; ctx.fillRect(0,0,canvas.width, canvas.height); } ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#FFD700'; ctx.font = 'bold 40px Arial'; ctx.textAlign='center'; ctx.shadowColor = 'black'; ctx.shadowBlur = 10; ctx.fillText("PESAWAT DITINGKATKAN!", canvas.width/2, 150); ctx.fillStyle = '#FFF'; ctx.font = '24px Arial'; ctx.fillText("Senjata pesawatmu kini lebih kuat!", canvas.width/2, 200); let sImg = images.ship0; if (shipLevel === 1) sImg = images.ship1; if (shipLevel === 2) sImg = images.ship2; if (shipLevel === 3) sImg = images.ship3; if (sImg && sImg.complete && sImg.naturalWidth !== 0) { ctx.drawImage(sImg, canvas.width/2 - 100, canvas.height/2 - 100, 200, 200); } ctx.font = '18px Arial'; ctx.fillStyle='#AAA'; ctx.fillText(`Lanjut dalam ${Math.ceil(upgradeTimer)} detik...`, canvas.width/2, 500); ctx.shadowBlur = 0; }
    function drawReadingPhase() { const planet = planets[currentPlanetIndex]; const grad = ctx.createLinearGradient(0,0,0,canvas.height); grad.addColorStop(0, '#111'); grad.addColorStop(1, '#000'); ctx.fillStyle = grad; ctx.fillRect(0,0,canvas.width, canvas.height); ctx.fillStyle = 'rgba(20, 20, 40, 0.9)'; ctx.strokeStyle = '#FFD700'; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(50, 50, canvas.width - 100, canvas.height - 180, 20); ctx.fill(); ctx.stroke(); ctx.fillStyle = '#FFD700'; ctx.font = 'bold 28px Arial'; ctx.textAlign = 'center'; ctx.fillText(`FAKTA UNIK: ${planet.name.toUpperCase()}`, canvas.width/2, 100); ctx.fillStyle = readingTimer < 10 ? '#FF4500' : '#00BFFF'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'right'; ctx.fillText(`Waktu Baca: ${Math.ceil(readingTimer)} dtk`, canvas.width - 70, 100); ctx.fillStyle = '#FFF'; ctx.font = '18px Arial'; ctx.textAlign = 'left'; let yPos = 160; const maxWidth = canvas.width - 140; infoFragments.forEach((f, idx) => { const text = `${idx+1}. ${f.data.detail}`; const words = text.split(' '); let line = ''; for(let n=0; n<words.length; n++) { const testLine = line + words[n] + ' '; if(ctx.measureText(testLine).width > maxWidth && n > 0) { ctx.fillText(line, 70, yPos); line = '   ' + words[n] + ' '; yPos += 25; } else { line = testLine; } } ctx.fillText(line, 70, yPos); yPos += 35; }); const btnW = 200, btnH = 50, btnX = canvas.width/2 - btnW/2, btnY = canvas.height - 100; const pulse = Math.abs(Math.sin(Date.now() / 300)) * 5; ctx.fillStyle = '#4CAF50'; ctx.beginPath(); ctx.roundRect(btnX - pulse/2, btnY - pulse/2, btnW + pulse, btnH + pulse, 25); ctx.fill(); ctx.strokeStyle = '#FFF'; ctx.lineWidth = 2; ctx.stroke(); ctx.fillStyle = '#FFF'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center'; ctx.fillText("SIAP TEMPUR", canvas.width/2, btnY + 32); drawHUD(); }

    function drawBattle() {
      const planet = planets[currentPlanetIndex];
      ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height);
      const charImg = (playerData.gender === 'male') ? images.battleMale : images.battleFemale; if (charImg.complete && charImg.naturalWidth !== 0) { ctx.drawImage(charImg, 80, 100, 120, 160); }
      const hpBarX = 96; const hpBarY = 244; const hpBarW = 72; const hpBarH = 9; const hpRatio = Math.max(0, Math.min(100, playerHP)) / 100; ctx.fillStyle='#333'; ctx.fillRect(hpBarX, hpBarY, hpBarW, hpBarH); ctx.fillStyle='#0F0'; ctx.fillRect(hpBarX, hpBarY, hpBarW * hpRatio, hpBarH); ctx.strokeStyle='#FFF'; ctx.lineWidth=2; ctx.strokeRect(hpBarX, hpBarY, hpBarW, hpBarH);

      if (currentQuestion < activeQuizSet.length) {
        currentAlien = getBattleAlienForQuestion(currentQuestion);
      }

      if (alienAnim.state !== 'dying' || alienAnim.y < 500) {
          const float = alienAnim.state === 'dying' ? 0 : Math.sin(Date.now()/400)*5;
          const alienImgs = [images.alien1, images.alien2, images.alien3];
          const currentAlienImg = (currentAlien === 2 && isAlien3Critical)
            ? images.alien3Critical
            : alienImgs[currentAlien % 3];
          ctx.save(); ctx.globalAlpha = alienAnim.alpha;
          if (currentAlienImg && currentAlienImg.complete && currentAlienImg.naturalWidth !== 0) { ctx.drawImage(currentAlienImg, 600, 100 + float + alienAnim.y, 120, 160); } 
          else { const ac = ['#F0F', '#0F0', '#F60'][currentAlien%3]; ctx.fillStyle = ac; ctx.beginPath(); ctx.ellipse(650, 180+float+alienAnim.y, 45, 50, 0, 0, 6.28); ctx.fill(); }

          if (currentAlien === 2) {
            const alien3Hp = Math.max(0, battleAlien3MaxHp - alien3Hits);
            const alien3HpRatio = alien3Hp / battleAlien3MaxHp;
            const enemyBarX = 604;
            const enemyBarY = 82 + float + alienAnim.y;
            const enemyBarW = 112;
            const enemyBarH = 12;
            ctx.fillStyle = 'rgba(0,0,0,0.65)';
            ctx.fillRect(enemyBarX, enemyBarY, enemyBarW, enemyBarH);
            ctx.fillStyle = isAlien3Critical ? '#FF5C5C' : '#7CFC00';
            ctx.fillRect(enemyBarX + 2, enemyBarY + 2, (enemyBarW - 4) * alien3HpRatio, enemyBarH - 4);
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2;
            ctx.strokeRect(enemyBarX, enemyBarY, enemyBarW, enemyBarH);
          }
          ctx.restore();
      }
      
      if (alienAnim.state === 'dying') { alienAnim.y += 2; alienAnim.alpha -= 0.01; alienAnim.timer--; if (alienAnim.timer <= 0) { nextLevelLogic(); } }

      battleEffects.forEach(e => {
        if(e.type === 'laser') { e.t--; ctx.strokeStyle = e.c; ctx.lineWidth=8; ctx.lineCap = 'round'; ctx.shadowBlur = 15; ctx.shadowColor = e.c; ctx.beginPath(); ctx.moveTo(e.sx, e.sy); ctx.lineTo(e.ex, e.ey); ctx.stroke(); ctx.shadowBlur = 0; ctx.lineWidth = 1; } 
        else if (e.type === 'explosion') { e.t--; e.r = e.mr * (1-e.t/20); ctx.strokeStyle='orange'; ctx.lineWidth=5; ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, 6.28); ctx.stroke(); }
      });
      battleEffects = battleEffects.filter(e => e.t > 0);

      if(showQuestion && alienAnim.state === 'idle') {
        const q = activeQuizSet[currentQuestion]; 
        const layout = getSingleBattleLayout();
        const boxY = layout.boxY;
        
        // Background for Question Area
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)'; 
        ctx.fillRect(0, boxY, canvas.width, layout.boxH); 
        ctx.strokeStyle = '#FFD700'; ctx.lineWidth = 2; 
        ctx.beginPath(); ctx.moveTo(0, boxY); ctx.lineTo(canvas.width, boxY); ctx.stroke();

        // Question Title Background
        ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
        ctx.fillRect(0, boxY, canvas.width, 35);

        ctx.fillStyle = '#FFD700'; ctx.font = 'bold 20px Arial'; ctx.textAlign='center'; 
        ctx.fillText("PERTANYAAN:", canvas.width/2, boxY + 25); 
        
        // Question Text (Wrappable)
        ctx.fillStyle = '#FFF'; 
        ctx.font = 'bold 20px Arial'; // Font lebih jelas
        const maxWidth = canvas.width - 80;
        const words = q.question.split(' ');
        let line = '';
        let yPos = layout.questionY;
        
        for(let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && n > 0) {
            ctx.fillText(line, canvas.width/2, yPos);
            line = words[n] + ' ';
            yPos += 22;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, canvas.width/2, yPos);

        // Answer Buttons
        q.options.forEach((opt, i) => { 
            // UPDATE POSISI TOMBOL: Mulai dari Y=410, spasi 48px. 
            // Ini memberi ruang ~120px untuk teks soal (cukup untuk 4 baris)
            const btnY = layout.buttonsStartY + i * (layout.buttonH + layout.buttonGap);
            const btnX = 20;
            const btnW = canvas.width - 40;
            
            // Button Background
            ctx.fillStyle = (selectedOption===i) ? '#555' : 'rgba(30, 30, 60, 0.8)'; 
            ctx.beginPath(); ctx.roundRect(btnX, btnY, btnW, layout.buttonH, 10); ctx.fill();
            
            // Button Border
            ctx.strokeStyle = (selectedOption===i) ? '#FFF' : '#00BFFF'; ctx.lineWidth = 2; 
            ctx.stroke(); 
            
            // Option Text
            ctx.fillStyle = '#FFF'; ctx.font = '18px Arial'; ctx.textAlign='left'; 
            ctx.fillText(`${["A", "B", "C", "D"][i]}. ${opt}`, btnX + 20, btnY + 23); 
        });

      } else if (alienAnim.state === 'idle') { 
          // Feedback Message (Correct/Wrong)
          ctx.fillStyle='rgba(0,0,0,0.7)';
          ctx.fillRect(0, 350, canvas.width, 100);
          ctx.fillStyle = battleMessage.includes("BENAR") ? '#00FF00' : '#FF0000';
          ctx.font='bold 36px Arial'; ctx.textAlign='center'; 
          ctx.fillText(battleMessage, canvas.width/2, 410); 
      }
      
      drawHUD();
      floatingTexts.forEach(t => { ctx.fillStyle = t.color; ctx.globalAlpha = t.life/60; ctx.font = 'bold 20px Arial'; ctx.textAlign='center'; ctx.fillText(t.text, t.x, t.y); ctx.globalAlpha=1.0; });
    }

    function drawEndScreen(title, color) {
      // Background and Title
      ctx.fillStyle='#000'; 
      ctx.fillRect(0,0,canvas.width,canvas.height);
      
      // If WIN, add some fireworks effect (simple particles reused)
      if (gameState === GameState.WIN) {
          if (Math.random() < 0.1) {
              const x = Math.random() * canvas.width;
              const y = Math.random() * canvas.height;
              const c = `hsl(${Math.random()*360}, 100%, 50%)`;
              for(let i=0; i<10; i++) {
                  particles.push({x:x, y:y, vx:(Math.random()-0.5)*300, vy:(Math.random()-0.5)*300, life:1.0, c:c});
              }
          }
          // Update particles
          particles.forEach(p => { p.x+=p.vx*0.016; p.y+=p.vy*0.016; p.life-=0.016; });
          particles = particles.filter(p => p.life>0);
          particles.forEach(p => { ctx.fillStyle = p.c; ctx.globalAlpha = p.life; ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, 6.28); ctx.fill(); ctx.globalAlpha=1.0; });
      }

      ctx.fillStyle=color; ctx.textAlign='center'; ctx.font='bold 48px Arial'; 
      ctx.fillText(title, canvas.width/2, 100);
      
      const rank = getRank(score); 
      ctx.fillStyle='#FFD700'; ctx.font='bold 36px Arial'; 
      ctx.fillText(`PANGKAT: ${rank}`, canvas.width/2, 180);
      
      // Stats Box
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 2;
      const boxW = 500, boxH = 220;
      const boxX = canvas.width/2 - boxW/2;
      const boxY = 220;
      ctx.fillRect(boxX, boxY, boxW, boxH);
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      ctx.fillStyle='#FFF'; ctx.font='24px Arial'; ctx.textAlign='left'; 
      const textX = boxX + 40;
      let textY = boxY + 50;
      
      ctx.fillText(`Petualang: ${playerData.name}`, textX, textY); textY += 40;
      ctx.fillText(`Total Skor: ${score}`, textX, textY); textY += 40;
      ctx.fillText(`Asteroid Hancur: ${stats.asteroidsDestroyed}`, textX, textY); textY += 40;
      ctx.fillText(`Kuis Terjawab: ${stats.quizCorrect}/${stats.quizTotal}`, textX, textY);

      // Back to Menu Button
      const btnW = 300, btnH = 60;
      const btnX = canvas.width/2 - btnW/2;
      const btnY = canvas.height - 90;
      
      // Button Pulse Effect
      const pulse = Math.sin(Date.now() / 300) * 2;
      
      ctx.fillStyle = '#1E90FF'; 
      ctx.beginPath(); ctx.roundRect(btnX - pulse, btnY - pulse, btnW + pulse*2, btnH + pulse*2, 30); ctx.fill();
      ctx.strokeStyle = '#FFF'; ctx.lineWidth = 3; ctx.stroke();
      
      ctx.fillStyle = '#FFF'; ctx.font = 'bold 24px Arial'; ctx.textAlign = 'center'; 
      ctx.fillText("LIHAT KREDIT", canvas.width/2, btnY + 38);
    }

    function drawCredits() {
      const bottomBarH = 90;
      const contentAreaH = canvas.height - bottomBarH;

      // Dark background
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Decorative stars
      stars.forEach(s => {
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.sin(Date.now() / 600 + s.x) * 0.3})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.28); ctx.fill();
      });

      // Credit lines (bilingual)
      const creditLines = [
        { text: '— PETUALANG CILIK TATA SURYAKU —', style: 'title' },
        { text: '', style: 'spacer' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: 'CORE DEVELOPMENT', style: 'heading' },
        { text: 'Pengembangan Inti', style: 'subheading' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: '', style: 'spacer' },
        { text: 'Original Concept / Konsep Asli', style: 'label' },
        { text: 'Rubiyanto', style: 'name' },
        { text: '', style: 'spacer' },
        { text: 'Lead Developer', style: 'label' },
        { text: '(Game Design, Programming & Logic)', style: 'label' },
        { text: 'Pengembang Utama (Desain, Pemrograman & Logika)', style: 'label' },
        { text: 'Wigan Anggit Utomo', style: 'name' },
        { text: '', style: 'spacer' },
        { text: 'Project Support / Dukungan Proyek', style: 'label' },
        { text: 'Winda Astria Sandy', style: 'name' },
        { text: '', style: 'spacer' },
        { text: '', style: 'spacer' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: 'ENGINE & TECHNOLOGY', style: 'heading' },
        { text: 'Mesin & Teknologi', style: 'subheading' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: '', style: 'spacer' },
        { text: 'Proprietary Vanilla JavaScript', style: 'name' },
        { text: '& HTML5 Canvas', style: 'name' },
        { text: '(No external open-source frameworks', style: 'note' },
        { text: 'or physics libraries were used', style: 'note' },
        { text: 'in the making of this game)', style: 'note' },
        { text: '(Tanpa framework atau pustaka fisika', style: 'note' },
        { text: 'sumber terbuka eksternal)', style: 'note' },
        { text: '', style: 'spacer' },
        { text: '', style: 'spacer' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: 'TYPOGRAPHY', style: 'heading' },
        { text: 'Tipografi', style: 'subheading' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: '', style: 'spacer' },
        { text: 'System Default Fonts (Arial)', style: 'name' },
        { text: '(No third-party open-source fonts utilized)', style: 'note' },
        { text: '(Tanpa font sumber terbuka pihak ketiga)', style: 'note' },
        { text: '', style: 'spacer' },
        { text: '', style: 'spacer' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: 'ART & ASSETS (AI-GENERATED)', style: 'heading' },
        { text: 'Seni & Aset (Dibuat oleh AI)', style: 'subheading' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: '', style: 'spacer' },
        { text: 'All 2D Sprites, Backgrounds & UI Elements', style: 'label' },
        { text: 'Semua Sprite 2D, Latar & Elemen UI', style: 'label' },
        { text: 'Generated via Google Gemini', style: 'name' },
        { text: '(Nanobanana Model)', style: 'note' },
        { text: '', style: 'spacer' },
        { text: 'All Background Music & Sound Effects', style: 'label' },
        { text: 'Semua Musik Latar & Efek Suara', style: 'label' },
        { text: 'Generated via Google Gemini', style: 'name' },
        { text: '(Lyria Model)', style: 'note' },
        { text: '', style: 'spacer' },
        { text: '(No copyrighted or Creative Commons', style: 'note' },
        { text: 'media assets were downloaded', style: 'note' },
        { text: 'from the internet)', style: 'note' },
        { text: '(Tidak ada aset media berhak cipta', style: 'note' },
        { text: 'atau Creative Commons yang diunduh', style: 'note' },
        { text: 'dari internet)', style: 'note' },
        { text: '', style: 'spacer' },
        { text: '', style: 'spacer' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: 'SPECIAL THANKS', style: 'heading' },
        { text: 'Terima Kasih Khusus', style: 'subheading' },
        { text: '═══════════════════════════════', style: 'divider' },
        { text: '', style: 'spacer' },
        { text: 'Pusdatin Kemendikdasmen', style: 'name' },
        { text: 'Disdikbudikpora Kabupaten Semarang', style: 'name' },
        { text: 'Korwilbidik Kecamatan Kaliwungu', style: 'name' },
        { text: 'SD Negeri Kradenan 01', style: 'name' },
        { text: 'SD Negeri Mukiran 03', style: 'name' },
        { text: '', style: 'spacer' },
        { text: '', style: 'spacer' },
        { text: '★ Terima kasih telah bermain! ★', style: 'title' },
        { text: '★ Thank you for playing! ★', style: 'title' },
        { text: '', style: 'spacer' },
        { text: '', style: 'spacer' },
      ];

      // Calculate total content height
      const totalH = creditLines.reduce((h, line) => {
        if (line.style === 'spacer') return h + 20;
        if (line.style === 'title') return h + 50;
        if (line.style === 'heading') return h + 42;
        if (line.style === 'subheading' || line.style === 'label') return h + 30;
        if (line.style === 'name') return h + 36;
        if (line.style === 'note' || line.style === 'divider') return h + 24;
        return h + 30;
      }, 0);

      // Clamp creditsY so content stays within bounds
      const minY = Math.min(40, -(totalH - contentAreaH + 40));
      const maxY = 40;
      // Auto-scroll (slow) if player hasn't manually scrolled
      if (creditsAutoScroll) {
        creditsY -= 0.5;
        if (creditsY < minY) creditsY = minY;
      }

      creditsY = Math.max(minY, Math.min(maxY, creditsY));

      // Draw credit text (clipped to content area above the bottom bar)
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, canvas.width, contentAreaH);
      ctx.clip();

      ctx.textAlign = 'center';
      const centerX = canvas.width / 2;
      let y = creditsY;

      for (let i = 0; i < creditLines.length; i++) {
        const line = creditLines[i];
        let lineHeight = 36;
        switch (line.style) {
          case 'title':    ctx.font = 'bold 36px Arial'; ctx.fillStyle = '#FFD700'; lineHeight = 50; break;
          case 'heading':  ctx.font = 'bold 28px Arial'; ctx.fillStyle = '#00BFFF'; lineHeight = 42; break;
          case 'subheading': ctx.font = 'italic 20px Arial'; ctx.fillStyle = '#87CEEB'; lineHeight = 30; break;
          case 'label':    ctx.font = '20px Arial'; ctx.fillStyle = '#AAAAAA'; lineHeight = 30; break;
          case 'name':     ctx.font = 'bold 24px Arial'; ctx.fillStyle = '#FFFFFF'; lineHeight = 36; break;
          case 'note':     ctx.font = 'italic 16px Arial'; ctx.fillStyle = '#888888'; lineHeight = 24; break;
          case 'divider':  ctx.font = '16px Arial'; ctx.fillStyle = '#444444'; lineHeight = 24; break;
          case 'spacer':   y += 20; continue;
          default:         ctx.font = '20px Arial'; ctx.fillStyle = '#CCCCCC'; lineHeight = 30;
        }
        if (y > -50 && y < contentAreaH + 50) {
          ctx.fillText(line.text, centerX, y);
        }
        y += lineHeight;
      }
      ctx.restore();

      // Gradient fade at top edge
      const fadeH = 50;
      const gradTop = ctx.createLinearGradient(0, 0, 0, fadeH);
      gradTop.addColorStop(0, 'rgba(0,0,0,1)'); gradTop.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradTop; ctx.fillRect(0, 0, canvas.width, fadeH);

      // Gradient fade just above bottom bar
      const gradMid = ctx.createLinearGradient(0, contentAreaH - fadeH, 0, contentAreaH);
      gradMid.addColorStop(0, 'rgba(0,0,0,0)'); gradMid.addColorStop(1, 'rgba(0,0,0,1)');
      ctx.fillStyle = gradMid; ctx.fillRect(0, contentAreaH - fadeH, canvas.width, fadeH);

      // Scroll indicator (small arrows + hint text)
      if (totalH > contentAreaH) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = 'italic 14px Arial';
        ctx.fillStyle = `rgba(255,255,255,${0.4 + Math.sin(Date.now() / 400) * 0.2})`;
        if (creditsY < maxY - 2) ctx.fillText('▲ geser ke bawah untuk naik', centerX, 22);
        if (creditsY > minY + 2) ctx.fillText('▼ geser ke atas untuk turun', centerX, contentAreaH - 10);
        ctx.restore();
      }

      // === Fixed bottom bar with "KEMBALI KE MENU" button ===
      ctx.fillStyle = 'rgba(0,0,0,0.95)';
      ctx.fillRect(0, contentAreaH, canvas.width, bottomBarH);
      // Separator line
      ctx.strokeStyle = '#333'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, contentAreaH); ctx.lineTo(canvas.width, contentAreaH); ctx.stroke();

      const btnW = 300, btnH = 54;
      const btnX = canvas.width / 2 - btnW / 2;
      const btnY = canvas.height - 80;
      const pulse = Math.sin(Date.now() / 300) * 2;

      ctx.fillStyle = '#1E90FF';
      ctx.beginPath(); ctx.roundRect(btnX - pulse, btnY - pulse, btnW + pulse * 2, btnH + pulse * 2, 27); ctx.fill();
      ctx.strokeStyle = '#FFF'; ctx.lineWidth = 2; ctx.stroke();

      ctx.fillStyle = '#FFF'; ctx.font = 'bold 22px Arial'; ctx.textAlign = 'center';
      ctx.fillText('KEMBALI KE MENU', canvas.width / 2, btnY + 35);
    }

    let lastTime = 0;
    function gameLoop(timestamp) {
      const dt = (timestamp - lastTime)/1000; lastTime = timestamp; const safeDt = Math.min(dt, 0.1);
      if(gameState === GameState.START) drawStart();
      else if(gameState === GameState.ROADMAP) drawRoadmap();
      else if(gameState === GameState.SPACE_TRAVEL) { updateSpaceTravel(safeDt); drawSpaceTravel(); }
      else if(gameState === GameState.APPROACHING_PLANET) { updateApproachingPlanet(safeDt); drawApproachingPlanet(); }
      else if(gameState === GameState.UPGRADE_SCREEN) { updateUpgradeScreen(safeDt); drawUpgradeScreen(); }
      else if(gameState === GameState.EXPLORATION) { updateExploration(safeDt); drawExploration(); }
      else if(gameState === GameState.EXCAVATION) { drawExcavation(); }
      else if(gameState === GameState.SIGNAL) { updateSignal(safeDt); drawSignal(); }
      else if(gameState === GameState.DRILLING) { updateDrill(safeDt); drawDrilling(); }
      else if(gameState === GameState.GENERATOR) { drawGenerator(); }
      else if(gameState === GameState.SPECTROMETER) { drawSpectrometer(); }
      else if(gameState === GameState.SENSOR_CIRCUIT) { drawSensorCircuit(); }
      else if(gameState === GameState.MICROSCOPE) { drawMicroscope(); }
      else if(gameState === GameState.REACTOR) { drawReactor(); }
      else if(gameState === GameState.LEAVING_PLANET) { updateLeavingPlanet(safeDt); drawLeavingPlanet(); }
      else if(gameState === GameState.ARTIFACT_INFO) { updateArtifactInfo(safeDt); drawArtifactInfo(); }
      else if(gameState === GameState.READING) { updateReading(safeDt); drawReadingPhase(); }
      else if(gameState === GameState.BATTLE) drawBattle();
      else if(gameState === GameState.MULTIPLAYER_BATTLE) drawMultiplayerBattle();
      else if(gameState === GameState.MULTIPLAYER_RESULT) drawMultiplayerResult();
      else if(gameState === GameState.GAME_OVER) drawEndScreen("MISI GAGAL", "#F00");
      else if(gameState === GameState.WIN) drawEndScreen("MISI SUKSES", "#0F0");
      else if(gameState === GameState.CREDITS) drawCredits();
      requestAnimationFrame(gameLoop);
    }

    initStars();

    let isAudioPopupOpen = false;

    function setAudioPopupOpen(open) {
      const popup = document.getElementById('audio-popup');
      const menuBtn = document.getElementById('audio-menu-btn');
      if (!popup || !menuBtn) return;
      isAudioPopupOpen = !!open;
      popup.classList.toggle('open', isAudioPopupOpen);
      menuBtn.classList.toggle('active', isAudioPopupOpen);
      menuBtn.title = isAudioPopupOpen ? 'Tutup pengaturan audio' : 'Buka pengaturan audio';
    }

    function updateAudioButtonsUi() {
      const musicBtn = document.getElementById('music-toggle-btn');
      const sfxBtn = document.getElementById('sfx-toggle-btn');
      if (musicBtn) {
        musicBtn.classList.toggle('music-off', !SoundManager.musicEnabled);
        musicBtn.title = SoundManager.musicEnabled ? 'Matikan musik latar' : 'Nyalakan musik latar';
      }
      if (sfxBtn) {
        sfxBtn.classList.toggle('sfx-off', !SoundManager.sfxEnabled);
        sfxBtn.title = SoundManager.sfxEnabled ? 'Matikan sound effect' : 'Nyalakan sound effect';
      }
    }

    function toggleAudioPopup() {
      SoundManager.resume();
      setAudioPopupOpen(!isAudioPopupOpen);
    }

    function toggleMusic() {
      SoundManager.resume();
      SoundManager.setMusicEnabled(!SoundManager.musicEnabled);
      updateAudioButtonsUi();
    }

    function toggleSfx() {
      SoundManager.resume();
      SoundManager.setSfxEnabled(!SoundManager.sfxEnabled);
      updateAudioButtonsUi();
    }

    document.addEventListener('pointerdown', (event) => {
      const controls = document.getElementById('audio-controls');
      if (!controls) return;
      if (!controls.contains(event.target)) {
        setAudioPopupOpen(false);
      }
    });

    updateAudioButtonsUi();

    requestAnimationFrame(gameLoop);

