import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import restaurantReducer from "../reducers/restaurantReducer";

const reducer = {
  user: userReducer,
  restaurant: restaurantReducer,
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;