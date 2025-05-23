import { configureStore } from "@reduxjs/toolkit";
import blogDetails from "../features/blogSlice";

export const store = configureStore({
  reducer: {
    app: blogDetails,
  },
});
