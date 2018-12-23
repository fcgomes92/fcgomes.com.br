const express = require('express');
const routes = require('./routes');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');

const nextI18next = require('./src/i18n');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = app.getRequestHandler(app);

(async () => {
  await app.prepare();
  const server = express();
  nextI18NextMiddleware(nextI18next, app, server);
  // server.get('*', (req, res) => handle(req, res));
  await server.use(handler).listen(3000);
  console.log('> Ready on http://localhost:3000')
})();
