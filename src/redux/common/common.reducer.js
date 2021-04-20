import types from "./common.types";

const INITIAL_STATE = {
  appIsLoading: false,
  globalErrorMessage: "",
};

const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.TOGGLE_APP_LOADER:
      return { ...state, appIsLoading: payload, };
      
    case types.SET_GLOBAL_ERROR_MESSAGE:
      return { ...state, globalErrorMessage: payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
