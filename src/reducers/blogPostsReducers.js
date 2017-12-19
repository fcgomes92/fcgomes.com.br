import {combineReducers} from "redux";
import {UPDATE_BLOG_POSTS, UPDATE_BLOG_POSTS_ERROR, UPDATE_BLOG_POSTS_LOADING} from "../actions/actionTypes";

const blogPostsReducerIds = (state = [], action) => {
    switch (action.type) {
        case UPDATE_BLOG_POSTS:
            return action.payload.map(post => post.id);
        default:
            return state;
    }
};

const blogPostsReducerById = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_BLOG_POSTS:
            return action.payload.reduce((acc, post) => {
                acc[post.id] = post;
                return acc;
            }, {});
        default:
            return state;
    }
};

const blogPostsReducerLoading = (state = false, action) => {
    switch (action.type) {
        case UPDATE_BLOG_POSTS_LOADING:
            return Boolean(action.payload);
        default:
            return state;
    }
};

const blogPostsReducerError = (state = null, action) => {
    switch (action.type) {
        case UPDATE_BLOG_POSTS_ERROR:
            return action.payload;
        default:
            return state;
    }
};

const blogPostsReducer = combineReducers({
    byId: blogPostsReducerById,
    ids: blogPostsReducerIds,
    loading: blogPostsReducerLoading,
    error: blogPostsReducerError,
});

export default blogPostsReducer;