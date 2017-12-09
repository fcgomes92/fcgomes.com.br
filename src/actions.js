import 'whatwg-fetch';

import {CMS_URL} from "./settings/settings.dev";

const normalizePosts = (posts) => {
    return posts.map(post => {
        return {
            featured_image: post._embedded["wp:featuredmedia"][0].source_url,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
        }
    })
};

export const getBlogPosts = async (perPage = 5) => {
    let response = await fetch(`${CMS_URL}/posts?categories=4&per_page=${perPage}&_embed`, {
        method: 'GET',
    });

    if (response.status >= 200 && response.status.status < 300) {
        return [];
    }

    return normalizePosts(await response.json());
};

export const getPortfolioPosts = async (perPage = 3) => {
    let response = await fetch(`${CMS_URL}/posts?categories=5&per_page=${perPage}&_embed`, {
        method: 'GET',
    });

    if (response.status >= 200 && response.status.status < 300) {
        return [];
    }

    return normalizePosts(await response.json());
};