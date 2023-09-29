import axios from "axios";
import { apiKey } from "./EndPoint";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

let jwtoken = "";

if (typeof window !== "undefined") {
    jwtoken = localStorage.getItem("token");
    if (jwtoken) axios.defaults.headers.common["jwtoken"] = jwtoken;
}

axios.defaults.headers.common["apikey"] = apiKey;

export const sendImagesConfig = {
    "Content-Type": "multipart/form-data",
    jwtoken: jwtoken || "",
    apikey: apiKey,
};

export const cancel = axios.CancelToken.source();
export const post = axios.post;
export const put = axios.put;
export const del = axios.delete;
export const get = axios.get;
