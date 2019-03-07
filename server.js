const express = require('express');
const routes = require('./routes');
const next = require('next');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = app.getRequestHandler(app);

(async () => {
  await app.prepare();
  const server = express();
  // server.get('*', (req, res) => handle(req, res));
  await server.use(handler).listen(3000);
  console.log('> Ready on http://localhost:3000')
})();
