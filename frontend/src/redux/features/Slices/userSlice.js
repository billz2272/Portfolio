import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios/axios";
// import { decode as base64_decode, encode as base64_encode } from "base-64";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM2ODZkMDc3NzY3NTVlNmY0MzMzNSIsImlhdCI6MTY1NTkyNDg4MiwiZXhwIjoxNjU4NTE2ODgyfQ.01HPU5B0asPwTlpu7k6_xUGE6q25fQOlYK2c2IwZbo0`;

const initialState = {
  pending: null,
  fulfilled: null,
  rejected: null,
  pageData: {
    pageNumber: 1,
    pageSize: 10,
  },
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM2ODZkMDc3NzY3NTVlNmY0MzMzNSIsImlhdCI6MTY1NTkyNDg4MiwiZXhwIjoxNjU4NTE2ODgyfQ.01HPU5B0asPwTlpu7k6_xUGE6q25fQOlYK2c2IwZbo0",
  userData: [],
  users: [],
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data) => {
    const response = await axios.post(
      `api/user/login?pagenumber=1&pagesize=10`,
      {
        email: 'by@email.com',
        password: '1234567'
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    return response?.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {} ,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          fulfilled: false,
          pending: true,
          rejected: false,
        };
      } else return state;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          userData: payload,
          fulfilled: true,
          pending: false,
          rejected: false,
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      return {
        ...state,
        fulfilled: false,
        pending: false,
        rejected: true,
      };
    });
  },
});

export const getUsers = (state) => state?.user?.users;
export default userSlice.reducer;