  
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import { authPersistConfig, shopPersistConfig } from "./persist.config";

// REDUCERS
import commonReducer from "./common/common.reducer";
import shopReducer from "./shop/shop.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    common: commonReducer,
    shop: persistReducer(shopPersistConfig, shopReducer),
});

export default rootReducer;