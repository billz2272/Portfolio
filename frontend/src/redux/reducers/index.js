import { combineReducers } from "redux";
import { userLoginReducer } from './userReducers';
import {
    blogUpdateReducer,
    blogDetailsReducer,
    blogDeleteReducer,
    blogCreateReducer,
    blogListReducer,
} from './blogReducers';
import {
    imageListReducer,
    imageCreateReducer,
    imageDeleteReducer,
    imageDetailsReducer,
    imageUpdateReducer,
} from './imageReducers'

const rootReducer = combineReducers({
    userlogin: userLoginReducer,
    blogList: blogListReducer,
    blogCreate: blogCreateReducer,
    blogUpdate: blogUpdateReducer,
    blogDetails: blogDetailsReducer,
    blogDelete: blogDeleteReducer,
    imageList: imageListReducer,
    imageCreate: imageCreateReducer,
    imageDelete: imageDeleteReducer,
    imageDetails: imageDetailsReducer,
    imageUpdate: imageUpdateReducer,
});
export default rootReducer;