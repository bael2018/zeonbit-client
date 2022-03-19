export const modalActionTypes = {
    OPEN_MODAL: "SET_ACTIVE_MODAL",
    CLOSE_MODAL: "CLOSE_MODAL",
};

export const modalActions = {
    setOpenModal: (payload) => {
        return {
            type: modalActionTypes.OPEN_MODAL,
            payload,
        };
    },
    setCloseModal: () => {
        return {
            type: modalActionTypes.CLOSE_MODAL,
        };
    },
};
