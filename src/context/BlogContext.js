import React, { useReducer } from 'react'
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 99990), title: action.payload.title, content: action.payload.content }];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
        }
}

const addBlogPost = dispatch => {
    return (title, content, cb) => {
    dispatch({ type: 'add_blogpost', payload: {title, content} });
    cb();
    }
};
const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [{title: 'test post', content: 'test content', id: 1}]);