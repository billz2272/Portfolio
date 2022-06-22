import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios/axios";
// import { decode as base64_decode, encode as base64_encode } from "base-64";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM2ODZkMDc3NzY3NTVlNmY0MzMzNSIsImlhdCI6MTY1NTkyNDg4MiwiZXhwIjoxNjU4NTE2ODgyfQ.01HPU5B0asPwTlpu7k6_xUGE6q25fQOlYK2c2IwZbo0`;

const initialState = {
  fulfilled: null,
  pending: null,
  rejected: null,
  blogData: [],
};

export const createNewBlogPost = createAsyncThunk(
  "blog/createNewBlogPost",
  async addBlogsObject => {
    const response = await axios.post(
      `api/blog?pageNumber=1&pageSize=10`,
     addBlogsObject,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response?.data;
  }
);

export const getBlogsFetch = createAsyncThunk(
  "blog/getBlogsFetch",
  async () => {
    const response = await axios.get(`api/blog`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response?.data;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBlogsFetch.pending, (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          fulfilled: false,
          pending: true,
          rejected: false
        };
      } else return state;
    });
    builder.addCase(getBlogsFetch.fulfilled, (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          blogData: payload,
          fulfilled: true,
          pending: false,
          rejected: false
        };
      } else return state;
    });
    builder.addCase(getBlogsFetch.rejected, (state, { payload }) => {
      return {
        ...state,
        fulfilled: false,
        pending: false,
        rejected: true
      };
    });
    builder.addCase(createNewBlogPost.pending, (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          fulfilled: false,
          pending: true,
          rejected: false
        };
      } else return state;
    });
    builder.addCase(createNewBlogPost.fulfilled, (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          blogData: payload,
          fulfilled: true,
          pending: false,
          rejected: false
        };
      } else return state;
    });
    builder.addCase(createNewBlogPost.rejected, (state, { payload }) => {
      return {
        ...state,
        loading: true,
        error: "something went wrong retrieving your blog data",
        fulfilled: false,
        pending: false,
        rejected: true
      };
    });
  }
});

export const getAllBlogs = state => state?.blog?.blogData;
export default blogSlice.reducer;
