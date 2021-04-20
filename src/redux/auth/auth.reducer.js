import types from "./auth.types";

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    errorMessage: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_SIGNIN_ASYNC_START:
            return { ...state, isLoading: true };

        case types.USER_SIGNIN_ASYNC_SUCCESS:
            return { ...state, user: payload, isLoading: false };
            
        case types.USER_SIGNIN_ASYNC_FAILURE:
            return { ...state, errorMessage: payload, isLoading: false };

        case types.CLEAR_USER_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default authReducer;