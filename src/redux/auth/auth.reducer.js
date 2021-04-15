import types from "./auth.types";

const INITIAL_STATE = {
    user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_USER_DATA:
            return { ...state, user: payload };
        case types.CLEAR_USER_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default authReducer;