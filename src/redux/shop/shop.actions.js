import types from "./shop.types";

export const addToFavorites = (selectedShopItem) => ({
    type: types.ADD_TO_FAVORITES,
    payload: selectedShopItem,
});

export const setModalState = (isShown) => ({
    type: types.SET_MODAL_STATE,
    payload: isShown,
});