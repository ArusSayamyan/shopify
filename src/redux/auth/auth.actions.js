import authApi from "./auth.api";
import types from "./auth.types";

export const clearUserData = () => ({
    type: types.CLEAR_USER_DATA,
});

//! ASYNC ACTIONS

//* USER SIGN IN
const userSignInAsyncStart = () => ({
    type: types.USER_SIGNIN_ASYNC_START,
});
const userSignInAsyncSuccess = (userData) => ({
    type: types.USER_SIGNIN_ASYNC_SUCCESS,
    payload: userData,
});
const userSignInAsyncFailure = (errorMessage) => ({
    type: types.USER_SIGNIN_ASYNC_FAILURE,
    payload: errorMessage,
});

export const userSignInAsync = (userInputData) => async (dispatch) => {
    dispatch(userSignInAsyncStart());
    try {
        const result = await authApi.getUser(userInputData);
        const data = result.data.data;
        dispatch(userSignInAsyncSuccess(data));
        return true;
    } catch (error) {
        dispatch(userSignInAsyncFailure(error.message));
        return false;
    }
};

//* USER SIGN UP