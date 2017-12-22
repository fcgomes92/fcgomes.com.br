import {combineReducers} from "redux";
import {
    UPDATE_PORTFOLIO_POSTS,
    UPDATE_PORTFOLIO_POSTS_ERROR,
    UPDATE_PORTFOLIO_POSTS_LOADING,
    UPDATE_PORTFOLIO_POSTS_TOTAL_PAGES,
    ADD_PORTFOLIO_POST,
} from "../actions/actionTypes";

const portfolioPostsReducerIds = (state = [], action) => {
    switch (action.type) {
        case UPDATE_PORTFOLIO_POSTS:
            return action.payload.map(post => post.id).sort((postA, postB) => postB - postA);
        case ADD_PORTFOLIO_POST:
            if (state.indexOf(action.payload.id) === -1) {
                return [...state, action.payload.id].sort((postA, postB) => postB - postA);
            } else {
                return state;
            }
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
            }, state);
        case ADD_PORTFOLIO_POST:
            return Object.assign({}, state, {[action.payload.id]: action.payload});
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

const portfolioPostsReducerTotalPagesAvailable = (state = 1, action) => {
    switch (action.type) {
        case UPDATE_PORTFOLIO_POSTS_TOTAL_PAGES:
            return parseInt(action.payload, 10);
        default:
            return state;
    }
};


const portfolioPostsReducer = combineReducers({
    totalPagesAvailable: portfolioPostsReducerTotalPagesAvailable,
    byId: portfolioPostsReducerById,
    ids: portfolioPostsReducerIds,
    loading: portfolioPostsReducerLoading,
    error: portfolioPostsReducerError,
});

export default portfolioPostsReducer;