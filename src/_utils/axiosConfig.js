import axios from "axios";
// import jwtDecode from "../_utils/checkExp";

const token = localStorage.getItem("token");

const AxiosInstance = axios.create({
    baseURL: "http://subdomain.entony.fs.a-level.com.ua/api/",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
});

AxiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        // console.log("AxiosInstance token", token);
        // проверка токена с  jwt decode

        if (token) {
            return {
                ...config,
                headers: { ...config.headers, Authorization: `Bearer ${token}` }
            };
        }

        return config;
    },
    error => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
    response => response,
    error => {
        // const { response = {} } = error;
        // if (response.status === 403) logOut();

        return Promise.reject(error);
    }
);

export default AxiosInstance;