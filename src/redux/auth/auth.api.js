import axios from "axios";

const authApi = {
    getUser(userInputData) {
        return axios.post("auth/login", userInputData);
    },
};

export default authApi;