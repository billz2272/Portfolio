import { combineReducers } from "redux";
import userReducer from "./features/Slices/userSlice";
import blogReducer from "./features/Slices/blogSlice";

const rootReducer = combineReducers({
    user: userReducer,
    blog: blogReducer,
});
export default rootReducer;