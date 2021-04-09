import types from "./common.types";

const INITIAL_STATE = {
    appIsLoading: false,
};

const commonReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.TOGGLE_APP_LOADER:
            return { ...state, appIsLoading: payload };
        default:
            return state;
    }
};

export default commonReducer;
