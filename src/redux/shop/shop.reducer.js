import types from "./shop.types";

import {
  updateFavorites,
  decreaseFavoritesItemCount,
  deleteFromFavorites,
} from "./shop.utils";

const INITIAL_STATE = {
  categories: [],
  shopData: [],
  modalIsShown: false,
  errorMessage: "",
  isLoading: false,
  shopIsLoading: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CATEGORIES_ASYNC_START:
      return { ...state, isLoading: true };
    case types.GET_CATEGORIES_ASYNC_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    case types.GET_CATEGORIES_ASYNC_FAILURE:
      return { ...state, isLoading: false, errorMessage: payload };

    case types.GET_SHOP_DATA_ASYNC_START:
      return { ...state, shopIsLoading: true };
    case types.GET_SHOP_DATA_ASYNC_SUCCESS:
      return { ...state, shopIsLoading: false, shopData: payload };
    case types.GET_SHOP_DATA_ASYNC_FAILURE:
      return { ...state, shopIsLoading: false, errorMessage: payload };

    case types.UPDATE_FAVORITES:
      return { ...state, favorites: payload };
    case types.ADD_TO_FAVORITES:
      return { ...state, favorites: updateFavorites(state.favorites, payload) };
    case types.DECREASE_FAVORITES_ITEM_COUNT:
      return {
        ...state,
        favorites: decreaseFavoritesItemCount(state.favorites, payload),
      };
    case types.DELETE_FROM_FAVORITES:
      return {
        ...state,
        favorites: deleteFromFavorites(state.favorites, payload),
      };
    case types.SET_MODAL_STATE:
      return { ...state, modalIsShown: payload };
    default:
      return state;
  }
};

export default shopReducer;
