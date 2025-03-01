import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

import { useAuthStore } from "../store";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  useMock?: boolean;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://randomuser.me/api",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const customConfig = config as CustomAxiosRequestConfig;
    const newConfig = { ...customConfig };

    if (customConfig.useMock) {
      newConfig.baseURL = "http://localhost:5173";
    } else {
      newConfig.headers.set("x-msw-bypass", "true");
    }

    const token = useAuthStore.getState().token;

    if (token) {
      if (!newConfig.headers) {
        newConfig.headers = new AxiosHeaders();
      }
      newConfig.headers.set("Authorization", `Bearer ${token}`);
    }

    return newConfig;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
