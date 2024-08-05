import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
    baseURL : "https://api.couchini.app/"
});export default API;

API.interceptors.request.use((config) => {
    if (Cookies.get("access")){
        config.headers.Authorization = "Bearer " + Cookies.get("access_token");
    }
    return config;
});

export const setToken = (access,refresh=null) => {
    Cookies.set("access",access,{secure : true ,expires : 7});
    refresh && Cookies.set("refresh",refresh,{secure : true , expires : 7});
}

export const clearToken = () => {
    Cookies.remove("access");
    Cookies.remove("refresh");
}