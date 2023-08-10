import axios from "axios";

const BASE_URL = "http://nvsapi.smartschool.sd/api/";
// const BASE_URL = "http://localhost:5117/api/";
// const BASE_URL = "https://localhost:7153/api/";
// const BASE_URL = "http://194.195.87.30:93/api/";

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
