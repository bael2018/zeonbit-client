import { formActionTypes } from "../action-creators/form-action";

const initialState = {
    userName: "",
    userEmail: "",
    userMessage: "",
    isValidUser: false,
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case formActionTypes.SET_USER_INFO:
            return {
                ...state,
                userName: action.payload.name,
                userEmail: action.payload.email,
                userMessage: action.payload.message,
                isValidUser: action.payload.isValid,
            };
        case formActionTypes.CLEAR_USER_INFO:
            return {
                ...state,
                userName: "",
                userEmail: "",
                userMessage: "",
                isValidUser: false,
            };
        default:
            return state;
    }
};
