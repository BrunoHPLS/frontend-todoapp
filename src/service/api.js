import axios from "axios";
import { BASE_URL } from "../utils/BaseUrl";

const api = axios.create({
    baseURL: BASE_URL
});

export default api;