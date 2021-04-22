import axios from "axios";

const api = {
  getCategories() {
    return axios.get("categories");
  },
  getShopData() {
    return axios.get("shop");
  },
};

export default api;
