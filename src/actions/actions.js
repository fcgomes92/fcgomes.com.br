import 'whatwg-fetch';

import {CMS_URL} from "../settings/settings";

import {
    UPDATE_BLOG_POSTS_ERROR, UPDATE_BLOG_POSTS, UPDATE_BLOG_POSTS_LOADING,
    UPDATE_PORTFOLIO_POSTS_LOADING, UPDATE_PORTFOLIO_POSTS_ERROR, UPDATE_PORTFOLIO_POSTS,
} from './actionTypes';


const normalizePosts = async (posts) => {
    return await posts.map(post => {
        return {
            id: post.id,
            featured_image: post._embedded["wp:featuredmedia"][0].source_url,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
        }
    })
};

export const getBlogPosts = (perPage = 5, page = 1) => {
    return async (dispatch, getState) => {
        dispatch({
            type: UPDATE_BLOG_POSTS_LOADING,
            payload: true,
        });
        try {
            let payload = [];

            // reset previous fetch errors
            dispatch({
                type: UPDATE_BLOG_POSTS_ERROR,
                payload: false,
            });

            // fetch the blog posts
            let response = await fetch(`${CMS_URL}/posts?categories=4&per_page=${perPage}&_embed&page=${page}`, {
                method: 'GET',
            });

            // if response is successful: normalize the posts
            if (!response.ok) {
                dispatch({
                    type: UPDATE_BLOG_POSTS_ERROR,
                    payload: true,
                });
                console.error(await response.json())
            } else {
                payload = await normalizePosts(await response.json());

                dispatch({
                    type: UPDATE_BLOG_POSTS,
                    payload: payload,
                });

                dispatch({
                    type: UPDATE_BLOG_POSTS_LOADING,
                    payload: false,
                });

                return payload;
            }
        } catch (e) {
            dispatch({
                type: UPDATE_BLOG_POSTS_ERROR,
                payload: true,
            });
            console.error(e);
        }

        dispatch({
            type: UPDATE_BLOG_POSTS_LOADING,
            payload: false,
        });
    }
};

export const getPortfolioPosts = (perPage = 3, page = 1) => {
    return async (dispatch, getState) => {
        dispatch({
            type: UPDATE_PORTFOLIO_POSTS_LOADING,
            payload: true,
        });
        try {
            let payload = [];

            // reset previous fetch errors
            dispatch({
                type: UPDATE_PORTFOLIO_POSTS_ERROR,
                payload: false,
            });

            // fetch the portfolio posts
            let response = await fetch(`${CMS_URL}/posts?categories=5&per_page=${perPage}&_embed&page=${page}`, {
                method: 'GET',
            });

            // if response is successful: normalize the posts
            if (!response.ok) {
                dispatch({
                    type: UPDATE_PORTFOLIO_POSTS_ERROR,
                    payload: true,
                });
                console.error(await response.json())
            } else {
                payload = await normalizePosts(await response.json());

                dispatch({
                    type: UPDATE_PORTFOLIO_POSTS,
                    payload: payload,
                });

                dispatch({
                    type: UPDATE_PORTFOLIO_POSTS_LOADING,
                    payload: false,
                });

                return payload;
            }
        } catch (e) {
            dispatch({
                type: UPDATE_PORTFOLIO_POSTS_ERROR,
                payload: true,
            });
            console.error(e);
        }

        dispatch({
            type: UPDATE_PORTFOLIO_POSTS_LOADING,
            payload: true,
        });
    }
};