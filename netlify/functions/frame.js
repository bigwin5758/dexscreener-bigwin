exports.handler = async (event, context) => {
  const list = [
    { symbol: "TOKEN1", price: (Math.random() * 100).toFixed(2) },
    { symbol: "TOKEN2", price: (Math.random() * 100).toFixed(2) },
    { symbol: "TOKEN3", price: (Math.random() * 100).toFixed(2) }
  ];

  let index = 0;

  // Read POST data from Warpcast
  if (event.body) {
    try {
      const body = JSON.parse(event.body);
      const btn = parseInt(body?.untrustedData?.buttonIndex || "0");

      if (btn === 1) index--;  // Prev
      if (btn === 2) index++;  // Next
    } catch (e) {
      console.log("JSON error:", e);
    }
  }

  // Wrap index
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
    <meta property="fc:frame:image" content="https://dummyimage.com/600x400/000/fff&text=${coin.symbol}+%24${coin.price}" />

    <meta property="fc:frame:button:1" content="Prev" />
    <meta property="fc:frame:button:1:action" content="post" />

    <meta property="fc:frame:button:2" content="Next" />
    <meta property="fc:frame:button:2:action" content="post" />
  </head>

  <body style="background:black;color:white;padding:20px;font-family:sans-serif;">
    <h2>${coin.symbol}</h2>
    <p>Price: $${coin.price}</p>
    <p>${index + 1} / ${list.length}</p>
    <p>Frame visible normally in browser.</p>
  </body>
</html>
    `
  };
};
