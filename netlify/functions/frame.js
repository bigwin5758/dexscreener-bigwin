exports.handler = async (event, context) => {
  const list = [
    { symbol: "TOKEN1", price: (Math.random() * 100).toFixed(2) },
    { symbol: "TOKEN2", price: (Math.random() * 100).toFixed(2) },
    { symbol: "TOKEN3", price: (Math.random() * 100).toFixed(2) }
  ];

  // Default index 0
  let index = 0;

  // Ambil buttonIndex dari Warpcast POST payload
  if (event.body) {
    try {
      const body = JSON.parse(event.body);

      if (body.untrustedData?.buttonIndex) {
        const btn = parseInt(body.untrustedData.buttonIndex);

        if (btn === 1) index--;      // Prev
        if (btn === 2) index++;      // Next
      }

    } catch (err) {
      console.log("JSON parse error:", err);
    }
  }

  // Looping index
  if (index < 0) index = list.length - 1;
  if (index >= list.length) index = 0;

  const coin = list[index];

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
      <html>
        <head>
          <meta property="og:title" content="Token Viewer" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://dummyimage.com/600x
