import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/blogs";

// fetching blogs

export const showBlogs = createAsyncThunk("showBlogs", async () => {
  const response = await axios.get(API_URL);
  console.log(response.data);
  return response.data;
});

// createing blogs
export const createBlog = createAsyncThunk(
  "createBlog",
  async (blogData, { rejectWithValue }) => {
    try {
      console.log(blogData);

      // const response = await axios.post("http://localhost:3000/blogs", {
      //   blogData,
      // });
      // console.log(response);

      // return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

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
      })
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.blogs.push(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default blogDetails.reducer;
