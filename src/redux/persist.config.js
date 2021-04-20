import localStorage from "redux-persist/lib/storage";

export const authPersistConfig = {
    key: "auth",
    storage: localStorage,
    whitelist: ["user"],
};

export const shopPersistConfig = {
    key: "shop",
    storage: localStorage,
    whitelist: ["favorites"],
};