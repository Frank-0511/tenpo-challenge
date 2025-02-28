import { LoginRequest, LoginResponse } from "../types";

import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>("/api/login", data, {
    headers: { "Content-Type": "application/json" },
    customConfig: { useMock: true },
  } as unknown as AxiosRequestConfig);

  return response.data;
};
