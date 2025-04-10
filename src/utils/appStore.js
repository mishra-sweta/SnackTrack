import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //big store reducer that has other small slice reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
