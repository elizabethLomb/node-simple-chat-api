const express = require('express');
const app = express();

/**
 * Listen on provided port
 */
const port = normalizePort(process.env.PORT || '0.0.0.0');
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
}
