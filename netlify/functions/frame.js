exports.handler = async (event, context) => {
  const list = [
    { symbol: "TOKEN1", price: (Math.random() * 100).toFixed(2) },
    { symbol: "TOKEN2", price: (Math.random() * 100).toFixed(2) },
    { symbol: "TOKEN3", price: (Math.random() * 100).toFixed(2) }
  ];

  // ambil index dari button
  let index = 0;
  if (event.body) {
    try {
      const body = JSON.parse(event.body);
      if (body.untrustedData && body.untrustedData.buttonIndex) {
        index = parseInt(body.untrustedData.buttonIndex) - 1;
      }
    } catch (err) {}
  }

  if (index < 0) index = list.length - 1;
  if (index >= list.length) index = 0;

  const coin = list[index];

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
