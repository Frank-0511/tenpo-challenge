import { GetUserResponse } from "../types";
import axiosInstance from "./axiosInstance";

export const fetchUsers = async () => {
  const response = await axiosInstance.get<GetUserResponse>("/", {
    params: {
      results: 2000,
      page: 1,
      inc: "name,email,picture,gender,phone,cell,id",
    },
  });
  return response.data;
};
