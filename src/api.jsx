import axios from "axios";
import Cookies from "js-cookie";
import Store from "./store";
import { changeUser } from "./reducers/user";

const API = axios.create({
    baseURL: "https://api.couchini.app/"
}); export default API;

API.interceptors.request.use((config) => {
    if (Cookies.get("access")) {
        console.log("set access to API")
        config.headers.Authorization = `Bearer ${Cookies.get("access")}`;
    }
    return config;
});


export const handle401Error = () => {
    if (Cookies.get("refresh")) {
        console.log("refresh exist");
        (async () => {
            await API.post("/auth/token/refresh/", { refresh: Cookies.get("refresh") }).then((response) => {
                console.log(response);
                setToken(response.data.access);
            }).catch((error) => {
                console.log(error)
                error.response && error.response.status === 401 && Store.dispatch(changeUser({
                    is_login: false,
                    return_login: true,
                }))
            })
        })();
    } else {
        console.log("refresh not exist ");
        Store.dispatch(changeUser({
            is_login: false,
            return_login: true
        }))
    }
};

API.interceptors.response.use((response) => {
    return response;
}, (error) => {
    error.response && error.response.status === 401 && handle401Error();
    return Promise.reject(error);
})

export const setToken = (access, refresh = null) => {
    API.defaults.headers.common.Authorization = `Bearer ${access}`;
    Cookies.set("access", access, { secure: true, expires: 7 });
    refresh && Cookies.set("refresh", refresh, { secure: true, expires: 7 });
}


export const clearToken = () => {
    Cookies.remove("access");
    Cookies.remove("refresh");
}