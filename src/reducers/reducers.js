import {combineReducers} from 'redux'

import blogPostsReducer from './blogPostsReducers';

const rootReducer = combineReducers({
    blogPosts: blogPostsReducer,
});

export default rootReducer;