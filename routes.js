const routes = require('next-routes');

const URLS = {
  base: () => `/`,
};

const ROUTES = {
  HOME: {
    path: URLS.base(),
    name: 'index',
  },
  NOT_FOUND: {
    path: '/404',
    name: 'not-found',
  },
};
const rts = routes();
Object.keys(ROUTES).map(routeKey => {
  const route = ROUTES[routeKey];
  // Name,Page,Pattern
  rts.add(route.name, route.name, route.path)
});
module.exports = {
  ...rts,
  ROUTES: ROUTES,
  URLS: URLS,
};