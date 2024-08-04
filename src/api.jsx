import axios from "axios";
import Cookies from "js-cookie";

export const API = axios.create({
    baseURL : "https://api.couchini.app/swagger/"
});

API.interceptors.request.use((config) => {
    if (Cookies.get("access_token")){
        config.headers.Authorization = "Bearer " + Cookies.get("access_token");
    }
    return config;
})