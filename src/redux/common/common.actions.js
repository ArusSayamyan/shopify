import types from "./common.types";

export const toggleAppLoader = (isLoading) => ({
    type: types.TOGGLE_APP_LOADER,
    payload: isLoading,
});