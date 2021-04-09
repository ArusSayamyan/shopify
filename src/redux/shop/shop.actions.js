import types from "./shop.types";

export const addToFavorites = (selectedShopItem) => ({
    type: types.ADD_TO_FAVORITES,
    payload: selectedShopItem,
});


