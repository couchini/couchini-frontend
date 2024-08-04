import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
    baseURL : "https://api.couchini.app/"
});export default API;

API.interceptors.request.use((config) => {
    if (Cookies.get("access_token")){
        config.headers.Authorization = "Bearer " + Cookies.get("access_token");
    }
    return config;
})