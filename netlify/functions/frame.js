exports.handler = async (event, context) => {
  // Fetch token price (contoh random)
  const price = (Math.random() * 100).toFixed(2);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
      <html>
        <head>
          <meta property="og:title" content="Live Token Price" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://dummyimage.com/600x400/000/fff&text=Price:+$${price}" />
          <meta property="fc:frame:button:1" content="Refresh" />
          <meta property="fc:frame:button:1:action" content="post" />
        </head>
      </html>
    `
  };
};
