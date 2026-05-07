export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      const lowerRequest = new Request(new URL("/index.html", url), request);
      const lowerResponse = await env.ASSETS.fetch(lowerRequest);
      if (lowerResponse.status !== 404) return lowerResponse;

      const upperRequest = new Request(new URL("/Index.html", url), request);
      return env.ASSETS.fetch(upperRequest);
    }

    if (url.pathname === "/index.html") {
      const lowerResponse = await env.ASSETS.fetch(request);
      if (lowerResponse.status !== 404) return lowerResponse;

      const upperRequest = new Request(new URL("/Index.html", url), request);
      return env.ASSETS.fetch(upperRequest);
    }

    return env.ASSETS.fetch(request);
  },
};
