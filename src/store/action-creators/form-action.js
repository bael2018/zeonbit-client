export const formActionTypes = {
    SET_USER_INFO: "SET_USER_INFO",
    CLEAR_USER_INFO: "CLEAR_USER_INFO",
};

export const formActions = {
    setUserInfo: (payload) => {
        return {
            type: formActionTypes.SET_USER_INFO,
            payload,
        };
    },
    clearUserInfo: () => {
        return {
            type: formActionTypes.CLEAR_USER_INFO,
        };
    },
};
