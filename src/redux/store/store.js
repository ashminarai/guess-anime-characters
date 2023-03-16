import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

//create store
const store = configureStore({ reducer: userReducer });

export default store;
