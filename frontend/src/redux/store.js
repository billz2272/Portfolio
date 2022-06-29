// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import rootReducer from "./reducer";

// const appStore = configureStore({
//   reducer: rootReducer,
//   middleware:[thunk]
// })
// export default appStore;


import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { getAllBlogsApi } from "./features/Api/getAllBlogsApi";
import { loginApi } from "./features/Api/loginApi";
import rootReducer from "./reducer";

const appStore = configureStore({
  reducer: {
    [getAllBlogsApi.reducerPath]: getAllBlogsApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    rootReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(getAllBlogsApi.middleware).concat(loginApi.middleware).concat(thunk)
})
export default appStore;
