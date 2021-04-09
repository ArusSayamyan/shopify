import types from "./shop.types";

import { updateFavorites } from "./shop.utils";

const INITIAL_STATE = {
    favorites: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_TO_FAVORITES:
            return { ...state, favorites: updateFavorites(state.favorites, payload) };
        default:
            return state;
    }
};

export default shopReducer;
