import { modalActionTypes } from "../action-creators/modal-action.js";

const initialState = {
    isActiveModal: false,
    status: '',
    text: ''
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case modalActionTypes.OPEN_MODAL:
            return {
                ...state,
                isActiveModal: true,
                status: action.payload.status,
                text: action.payload.text
            }
        case modalActionTypes.CLOSE_MODAL:
            return {
                ...state,
                isActiveModal: false,
            }
        default:
            return state;
    }
};
