import { LoginRequest, LoginResponse } from "../types";

import axios from "axios";

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>("/api/login", data);
  console.log("🚀 ~ loginApi ~ response:", response);
  return response.data;
};
