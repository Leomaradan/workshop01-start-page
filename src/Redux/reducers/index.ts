import { linkReducer } from "./linkReducer";
import { optionReducer } from "./optionReducer";
import { combineReducers } from "redux";

export default combineReducers({
    links: linkReducer,
    options: optionReducer,
});