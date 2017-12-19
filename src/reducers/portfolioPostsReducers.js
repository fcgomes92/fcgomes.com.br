import {combineReducers} from "redux";
import {
    UPDATE_PORTFOLIO_POSTS,
    UPDATE_PORTFOLIO_POSTS_ERROR,
    UPDATE_PORTFOLIO_POSTS_LOADING
} from "../actions/actionTypes";

const portfolioPostsReducerIds = (state = [], action) => {
    switch (action.type) {
        case UPDATE_PORTFOLIO_POSTS:
            return action.payload.map(post => post.id);
        default:
            return state;
    }
};

const portfolioPostsReducerById = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PORTFOLIO_POSTS:
            return action.payload.reduce((acc, post) => {
                acc[post.id] = post;
                return acc;
            }, {});
        default:
            return state;
    }
};

const portfolioPostsReducerLoading = (state = false, action) => {
    switch (action.type) {
        case UPDATE_PORTFOLIO_POSTS_LOADING:
            return Boolean(action.payload);
        default:
            return state;
    }
};

const portfolioPostsReducerError = (state = null, action) => {
    switch (action.type) {
        case UPDATE_PORTFOLIO_POSTS_ERROR:
            return action.payload;
        default:
            return state;
    }
};

const portfolioPostsReducer = combineReducers({
    byId: portfolioPostsReducerById,
    ids: portfolioPostsReducerIds,
    loading: portfolioPostsReducerLoading,
    error: portfolioPostsReducerError,
});

export default portfolioPostsReducer;