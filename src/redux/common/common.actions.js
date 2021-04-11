import types from "./common.types";

export const toggleAppLoader = (isLoading) => ({
    type: types.TOGGLE_APP_LOADER,
    payload: isLoading,
});

export const setGlobalErrorMessage = (message) => ({
    type: types.SET_GLOBAL_ERROR_MESSAGE,
    payload: message,
});