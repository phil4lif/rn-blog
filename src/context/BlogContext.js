import React, { useReducer } from 'react'
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 99990), title: action.payload.title, content: action.payload.content }];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            })
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: 'get_blogposts', payload: response.data });
    }
}

const addBlogPost = dispatch => {
    return async (title, content, cb) => {
        await jsonServer.post('/blogposts', { title, content });
        // dispatch({ type: 'add_blogpost', payload: { title, content } });
        if (cb) {
            cb();
        }
    };
};
const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
};
const editBlogPost = dispatch => {
    return (id, title, content, cb) => {
        dispatch({
            type: 'edit_blogpost', payload: { id, title, content }
        });
        if (cb) {
            cb();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
     []
     );