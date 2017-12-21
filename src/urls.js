import AppContainer from './components/App/AppContainer';
import PortfolioPostsListContainer from "./components/PortfolioPostsList/PortfolioPostsListContainer";
import PortfolioPostsDetailContainer from "./components/PortfolioPostsDetail/PortfolioPostsDetailContainer";
import BlogPostsDetailContainer from "./components/BlogPostsDetail/BlogPostsDetailContainer";
import BlogPostsListContainer from "./components/BlogPostsList/BlogPostsListContainer";

export const URLS = {
    base: () => `/`,
    portfolioList: () => `/portfolio`,
    portfolioListPage: (page = 1) => `/portfolio?page=${page}`,
    portfolioDetail: (postId = ':postId') => `/portfolio/${postId}`,
    blogList: () => `/blog`,
    blogDetail: (postId = ':postId') => `/blog/${postId}`,
};

export const ROUTES = {
    HOME: {
        exact: true,
        path: URLS.base(),
        component: AppContainer,
        name: 'home',
    },
    PORTFOLIO_POSTS_LIST: {
        exact: true,
        path: URLS.portfolioList(),
        component: PortfolioPostsListContainer,
        name: 'blog-list',
    },
    BLOG_POSTS_LIST: {
        exact: true,
        path: URLS.blogList(),
        component: BlogPostsListContainer,
        name: 'blog-list',
    },
    PORTFOLIO_POSTS_DETAIL: {
        exact: true,
        path: URLS.portfolioDetail(),
        component: PortfolioPostsDetailContainer,
        name: 'blog-detail',
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