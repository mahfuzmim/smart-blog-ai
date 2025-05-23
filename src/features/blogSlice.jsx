import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/blogs";

// fetching blogs

export const showBlogs = createAsyncThunk("showBlogs", async () => {
  const response = await axios.get(API_URL);
  console.log(response.data);
  return response.data;
});

export const blogDetails = createSlice({
  name: "blogDetails",

  initialState: {
    blogs: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(showBlogs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(showBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
        console.log(state.data);
      })
      .addCase(showBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch blogs";
      });
  },
});

export default blogDetails.reducer;
