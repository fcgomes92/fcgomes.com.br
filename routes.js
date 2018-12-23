const routes = require('next-routes');

const URLS = {
  base: () => `/`,
  blogList: () => `/blog`,
  blogListPage: (page = 1) => `/blog?page=${page}`,
  blogDetail: (postId = ':postId') => `/blog/${postId}`,
};

const ROUTES = {
  HOME: {
    path: URLS.base(),
    name: 'index',
  },
  BLOG_POSTS_LIST: {
    path: URLS.blogList(),
    name: 'blogList',
  },
  BLOG_POSTS_DETAIL: {
    path: URLS.blogDetail(),
    name: 'blogDetail',
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