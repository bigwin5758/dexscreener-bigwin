exports.handler = async (event, context) => {
  const price = (Math.random() * 100).toFixed(2);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
      <html>
        <head>
          <!-- FRAME META TAGS -->
          <meta property="og:title" content="Live Token Price" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://dummyimage.com/600x400/000/fff&text=Price:+$${price}" />
          <meta property="fc:frame:button:1" content="Refresh" />
          <meta property="fc:frame:button:1:action" content="post" />
        </head>

        <body style="background:#000; color:#fff; padding:20px; font-family:sans-serif;">
          <h2>Live Token Price Frame</h2>
          <p>Current Price: <strong>$${price}</strong></p>
          <p>This URL is primarily meant for Farcaster Frames, but this text is visible in the browser.</p>
        </body>
      </html>
    `
  };
};
