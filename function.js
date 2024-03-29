const { escape } = require('querystring');

exports.function1 = (req, res) => {
  // CORS headers for preflight requests
  // Set these to the right domains for your application
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST');

  // Respond to the OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Allow-Max-Age', '3600');
    res.status(204).send('');
  } else {
    // Your logic here
    const name = req.query.name || 'World';
    res.status(200).send(`Hello, ${escape(name)}!`);
  }
};
