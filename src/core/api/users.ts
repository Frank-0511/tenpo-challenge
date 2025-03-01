import axiosInstance from "./axiosInstance";

export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/", {
      params: {
        results: 300,
        page: 1,
        inc: "name,email,picture,gender,phone,cell,id",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
