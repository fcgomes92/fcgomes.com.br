import AppContainer from './components/App/AppContainer';
import BlogPostsDetailContainer from "./components/BlogPostsDetail/BlogPostsDetailContainer";
import BlogPostsListContainer from "./components/BlogPostsList/BlogPostsListContainer";

export const URLS = {
    base: () => `/`,
    blogList: () => `/blog`,
    blogListPage: (page = 1) => `/blog?page=${page}`,
    blogDetail: (postId = ':postId') => `/blog/${postId}`,
};

export const ROUTES = {
    HOME: {
        exact: true,
        path: URLS.base(),
        component: AppContainer,
        name: 'home',
    },
    BLOG_POSTS_LIST: {
        exact: true,
        path: URLS.blogList(),
        component: BlogPostsListContainer,
        name: 'blog-list',
    },
    BLOG_POSTS_DETAIL: {
        exact: true,
        path: URLS.blogDetail(),
        component: BlogPostsDetailContainer,
        name: 'blog-detail',
    },
    NOT_FOUND: {
        exact: false,
        path: null,
        component: AppContainer,
        name: 'not-found',
    },
};