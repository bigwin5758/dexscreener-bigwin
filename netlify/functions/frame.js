exports.handler = async (event, context) => {
  let page = 1;

  // Jika POST → baca state
  if (event.httpMethod === "POST") {
    try {
      const body = JSON.parse(event.body);
      page = body.page || 1;

      if (body.button === "prev") page = Math.max(1, page - 1);
      if (body.button === "next") page = page + 1;

    } catch (e) {
      console.log("Error POST:", e);
    }
  }

  // --- Fetch daftar token BASE ---
  const res = await fetch("https://api.dexscreener.com/latest/dex/search?q=base");
  const data = await res.json();
