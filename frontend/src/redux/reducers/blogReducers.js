import { Action } from 'history';
import {
    GET_BLOGS_REQUEST,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAIL,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,
    CREATE_BLOG_RESET,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,
    UPDATE_BLOG_RESET,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL
} from '../constants/blogConstants';

export const blogListReducer = (state = { blogs: [] }, { type, payload }) => {
    switch (type) {
        case GET_BLOGS_REQUEST:
            return { loading: false, blogs: [] }
        case GET_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: payload.blogs,
                pages: payload.pages,
                page: payload.page
            }
        case GET_BLOGS_FAIL:
            return { loading: false, error: payload }
        default:
            return state
    }
}

export const blogCreateReducer = (state = { blogs: {} }, { type, payload }) => {
    switch (type) {
        case CREATE_BLOG_REQUEST:
            return { loading: false, blogs: {} }
        case CREATE_BLOG_SUCCESS:
            return {
                loading: false,
                success: true,
                blog: payload,
            }
        case CREATE_BLOG_FAIL:
            return { loading: false, error: payload }
        case CREATE_BLOG_RESET:
            return {}
        default:
            return state
    }
}

export const blogDeleteReducer = (state = { blogs: {} }, { type, payload }) => {
    switch (type) {
        case DELETE_BLOG_REQUEST:
            return { loading: true }
        case DELETE_BLOG_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case DELETE_BLOG_FAIL:
            return { loading: false, error: payload }
        default:
            return state
    }
}

export const blogDetailsReducer = (state = { blogs: {} }, { type, payload }) => {
    switch (type) {
        case BLOG_DETAILS_REQUEST:
            return { loading: false, ...state }
        case BLOG_DETAILS_SUCCESS:
            return {
                loading: false,
                success: true,
                blog: payload
            }
        case BLOG_DETAILS_FAIL:
            return { loading: false, error: payload }
        default:
            return state
    }
}

export const blogUpdateReducer = (state = { blogs: {} }, { type, payload }) => {
    switch (type) {
        case UPDATE_BLOG_REQUEST:
            return { loading: false, blog: {} }
        case UPDATE_BLOG_SUCCESS:
            return {
                loading: false,
                success: true,
                blog: payload
            }
        case UPDATE_BLOG_FAIL:
            return { loading: false, error: payload }
         case UPDATE_BLOG_RESET:
            return { blog: {} }
        default:
            return state
    }
}