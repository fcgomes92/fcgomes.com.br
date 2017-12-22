import {combineReducers} from "redux";
import {
    UPDATE_BLOG_POSTS,
    UPDATE_BLOG_POSTS_ERROR,
    UPDATE_BLOG_POSTS_LOADING,
    UPDATE_BLOG_POSTS_TOTAL_PAGES,
    ADD_BLOG_POST,
} from "../actions/actionTypes";

const blogPostsReducerIds = (state = [], action) => {
    switch (action.type) {
        case UPDATE_BLOG_POSTS:
            return action.payload.map(post => post.id).sort((postA, postB) => postB - postA);
        case ADD_BLOG_POST:
            if (state.indexOf(action.payload.id) === -1) {
                return [...state, action.payload.id].sort((postA, postB) => postB - postA);
            } else {
                return state;
            }
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
            }, state);
        case ADD_BLOG_POST:
            return Object.assign({}, state, {[action.payload.id]: action.payload});
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

const blogPostsReducerTotalPagesAvailable = (state = 1, action) => {
    switch (action.type) {
        case UPDATE_BLOG_POSTS_TOTAL_PAGES:
            return parseInt(action.payload, 10);
        default:
            return state;
    }
};


const blogPostsReducer = combineReducers({
    totalPagesAvailable: blogPostsReducerTotalPagesAvailable,
    byId: blogPostsReducerById,
    ids: blogPostsReducerIds,
    loading: blogPostsReducerLoading,
    error: blogPostsReducerError,
});

export default blogPostsReducer;