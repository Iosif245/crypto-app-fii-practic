import { AxiosResponse } from "axios";
import api from "./Api";

export const getUserRequest = async (userId: number): Promise<IUser> => {
  const response = await api.get(`/api/users/${userId}`);
  return response.data;
};

export const getAllUsersRequest = async (): Promise<IUsers> => {
  const response = await api.get("/api/users");
  return response.data;
};

export const updateFundsRequest = async (userId: number, funds: number): Promise<IUser> => {
  const response = await api.put(`/api/users/${userId}`, { funds });
  return response.data;
};
