import { combineReducers } from "redux";
import localStorage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";

import commonReducer from "./common/common.reducer";
import shopReducer from "./shop/shop.reducer";
import authReducer from "./auth/auth.reducer";

export const persistConfig = {
    key: "root",
    storage: localStorage,
    whitelist: ["shop", "auth"],
};

const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
