import 'whatwg-fetch';

import {CMS_URL} from "../settings/settings";

import {
    UPDATE_BLOG_POSTS_ERROR,
    UPDATE_BLOG_POSTS,
    UPDATE_BLOG_POSTS_LOADING,
    ADD_BLOG_POST,
    UPDATE_BLOG_POSTS_TOTAL_PAGES
} from './actionTypes';

const normalizeAuthor = (author) => {
    return {
        smallAvatar: author.avatar_urls['24'],
        largeAvatar: author.avatar_urls['96'],
        name: author.name,
        id: author.id,
    }
};

const normalizePosts = async (posts) => {
    if (posts instanceof Array) {
        return await posts.map(post => {
            return {
                id: post.id,
                featured_image: post._embedded["wp:featuredmedia"][0].source_url,
                author: normalizeAuthor(post._embedded.author[0]),
                title: post.title.rendered,
                excerpt: post.excerpt.rendered,
                content: post.content.rendered,
                created: new Date(post.date),
                updated: new Date(post.modified),

            }
        })
    } else if (posts instanceof Object) {
        return {
            id: posts.id,
            featured_image: posts._embedded["wp:featuredmedia"][0].source_url,
            author: normalizeAuthor(posts._embedded.author[0]),
            title: posts.title.rendered,
            excerpt: posts.excerpt.rendered,
            content: posts.content.rendered,
            created: new Date(posts.date),
            updated: new Date(posts.modified),
        }
    }
};


// blog actions
export const getBlogPosts = (perPage = 6, page = 1) => {
    return async (dispatch, getState) => {
        // set the blog posts as loading
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
                // set the error loading the blog posts
                dispatch({
                    type: UPDATE_BLOG_POSTS_ERROR,
                    payload: true,
                });
                console.error(await response.json())
            } else {
                payload = await normalizePosts(await response.json());

                // update all blog posts
                dispatch({
                    type: UPDATE_BLOG_POSTS,
                    payload: payload,
                });

                // set the total amount of pages available
                let totalPages = response.headers.get('X-WP-TotalPages') || 1;
                dispatch({
                    type: UPDATE_BLOG_POSTS_TOTAL_PAGES,
                    payload: totalPages,
                });

                // set the posts loading as false
                dispatch({
                    type: UPDATE_BLOG_POSTS_LOADING,
                    payload: false,
                });

                return payload;
            }
        } catch (e) {
            // set the error loading the blog posts
            dispatch({
                type: UPDATE_BLOG_POSTS_ERROR,
                payload: true,
            });
            console.error(e);
        }

        // set the posts loading as false
        dispatch({
            type: UPDATE_BLOG_POSTS_LOADING,
            payload: true,
        });
    }
};

export const getBlogPostById = (postId) => {
    return async (dispatch, getState) => {
        // set the blog posts as loading
        dispatch({
            type: UPDATE_BLOG_POSTS_LOADING,
            payload: true,
        });

        try {
            let payload = {};

            // reset previous fetch errors
            dispatch({
                type: UPDATE_BLOG_POSTS_ERROR,
                payload: false,
            });

            // fetch the blog posts
            let response = await fetch(`${CMS_URL}/posts/${postId}?_embed`, {
                method: 'GET',
            });

            // if response is successful: normalize the posts
            if (!response.ok) {
                // set the error loading the blog posts
                dispatch({
                    type: UPDATE_BLOG_POSTS_ERROR,
                    payload: true,
                });
                console.error(await response.json())
            } else {
                payload = await normalizePosts(await response.json());

                // update all blog posts
                dispatch({
                    type: ADD_BLOG_POST,
                    payload: payload,
                });

                // set the posts loading as false
                dispatch({
                    type: UPDATE_BLOG_POSTS_LOADING,
                    payload: false,
                });

                return payload;
            }
        } catch (e) {
            // set the error loading the blog posts
            dispatch({
                type: UPDATE_BLOG_POSTS_ERROR,
                payload: true,
            });
            console.error(e);
        }

        // set the posts loading as false
        dispatch({
            type: UPDATE_BLOG_POSTS_LOADING,
            payload: true,
        });
    }
};