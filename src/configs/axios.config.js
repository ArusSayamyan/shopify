import axios from "axios";
import { store } from "src/redux/store";

axios.defaults.baseURL = "https://ns-shopify.herokuapp.com/api/v1/";

axios.interceptors.request.use((request) => {
    const reduxStore = store.getState();
    const { auth } = reduxStore;
    const token = auth.user?.token;

    if (token) request.headers["Authorization"] = `Bearer ${token}`;
    return request;
});

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        // store.dispatch();
        return Promise.reject(error);
    }
);

export default axios;
