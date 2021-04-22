import types from "./shop.types";

import shopApi from "./shop.api";

// CATEGORIES
const getCategoriesAsyncStart = () => ({
  type: types.GET_CATEGORIES_ASYNC_START,
});
const getCategoriesAsyncSuccess = (categories) => ({
  type: types.GET_CATEGORIES_ASYNC_SUCCESS,
  payload: categories,
});
const getCategoriesAsyncFailure = (errorMessage) => ({
  type: types.GET_CATEGORIES_ASYNC_FAILURE,
  payload: errorMessage,
});

export const getCategoriesAsync = () => async (dispatch) => {
  dispatch(getCategoriesAsyncStart());
  try {
    const response = await shopApi.getCategories();
    const categories = response.data;
    dispatch(getCategoriesAsyncSuccess(categories));
  } catch (error) {
    dispatch(getCategoriesAsyncFailure(error.message));
  }
};

// GET SHOP DATA
const getShopDataAsyncStart = () => ({
  type: types.GET_SHOP_DATA_ASYNC_START,
});
const getShopDataAsyncSuccess = (categories) => ({
  type: types.GET_SHOP_DATA_ASYNC_SUCCESS,
  payload: categories,
});
const getShopDataAsyncFailure = (errorMessage) => ({
  type: types.GET_SHOP_DATA_ASYNC_FAILURE,
  payload: errorMessage,
});

export const getShopDataAsync = () => async (dispatch) => {
  dispatch(getShopDataAsyncStart());
  try {
    const { data } = await shopApi.getShopData();

    dispatch(getShopDataAsyncSuccess(data));
  } catch (error) {
    dispatch(getShopDataAsyncFailure(error.message));
  }
};

export const addToFavorites = (selectedShopItem) => ({
  type: types.ADD_TO_FAVORITES,
  payload: selectedShopItem,
});

export const decreaseFavoritesItemCount = (selectedShopItem) => ({
  type: types.DECREASE_FAVORITES_ITEM_COUNT,
  payload: selectedShopItem,
});

export const deleteFromFavorites = (selectedShopItem) => ({
  type: types.DELETE_FROM_FAVORITES,
  payload: selectedShopItem,
});

export const setModalState = (isShown) => ({
  type: types.SET_MODAL_STATE,
  payload: isShown,
});
