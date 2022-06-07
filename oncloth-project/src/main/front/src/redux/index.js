import { combineReducers } from "redux";
import userState from "./login";

const rootReducer = combineReducers({
    userState,
});

export default rootReducer;