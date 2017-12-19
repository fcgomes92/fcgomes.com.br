import {combineReducers} from 'redux'

import blogPostsReducer from './blogPostsReducers';
import portfolioPostsReducer from './portfolioPostsReducers';

const rootReducer = combineReducers({
    blogPosts: blogPostsReducer,
    portfolioPosts: portfolioPostsReducer,
});

export default rootReducer;