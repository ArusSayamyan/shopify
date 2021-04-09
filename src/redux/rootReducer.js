import { combineReducers } from "redux";

import commonReducer from "./common/common.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
    common: commonReducer,
    shop: shopReducer,
});

export default rootReducer;
