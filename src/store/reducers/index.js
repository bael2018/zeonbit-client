import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import { modalReducer } from "./modalReducer";

export default combineReducers({
    form: formReducer,
    modal: modalReducer
});
