import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import usersReducer from "./userSlice"; // Assuming you want to use the same userSlice for users  
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
        users:usersReducer,

  },
});
export default appStore;
