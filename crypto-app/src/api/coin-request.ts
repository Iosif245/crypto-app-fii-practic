import { AxiosResponse } from "axios";
import api from "./Api";

export const getOneCoinRequest = async (coinId: string): Promise<ICoin> => {
  const response = await api.get(`/api/coins/${coinId}`);
  const coin: ICoin = response.data.data;
  return coin;
};

export const getAllCoinsRequest = async (): Promise<ICoin[]> => {
  const response: AxiosResponse<ICoin[]> = (await api.get("/api/coins")).data;

  return response.data;
};

export const createNewCoinRequest = async (coin: INewCoin): Promise<INewCoin> => {
  const response: AxiosResponse<ICoin> = await api.post("/api/coins", coin);
  return response.data;
};

export const updateOneCoinRequest = async (coin: ICoin): Promise<ICoin> => {
  const response: AxiosResponse<ICoin> = await api.put(`/api/coins/${coin.id}`, coin);
  return response.data;
};

export const deleteOneCoinRequest = async (coinId: string): Promise<void> => {
  await api.delete(`/api/coins/${coinId}`);
};

export const buyCoinRequest = async (coinId: string, amount: number): Promise<void> => {
  await api.post(`/api/coins/${coinId}/buy`, { amount });
};
