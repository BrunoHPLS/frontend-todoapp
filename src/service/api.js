import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

const api = axios.create({
    baseURL: BASE_URL
});

export default api;