import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { COIN__FETCH_COINS, COIN__SET_COIN, COIN__SET_COINS, COIN__SET_LOADING } from "../constants";
import { createNewCoinRequest, deleteOneCoinRequest, getAllCoinsRequest, getOneCoinRequest, updateOneCoinRequest } from "../../api/coin-request";
import { mapCoin } from "../../mappers/coin-mappers";

export const setLoadingCoinAction = createAction<boolean>(COIN__SET_LOADING);
export const setCoinsCoinAction = createAction<ICoin[]>(COIN__SET_COINS);
export const setCoinAction = createAction<ICoin>(COIN__SET_COIN);

export const fetchCoinsAsyncAction = createAsyncThunk(COIN__FETCH_COINS, async (__: never, thunkApi) => {
  thunkApi.dispatch(setLoadingCoinAction(true));
  try {
    const coinsResponse: ICoin[] = await getAllCoinsRequest();
    // const coins = mapCoins(coinsResponse);
    thunkApi.dispatch(setCoinsCoinAction(coinsResponse));
  } catch (error) {
    console.error(error);
  } finally {
    thunkApi.dispatch(setLoadingCoinAction(false));
  }
});

export const fetchCoinAsyncAction = createAsyncThunk(COIN__FETCH_COINS, async (coinId: string, thunkApi) => {
  thunkApi.dispatch(setLoadingCoinAction(true));
  try {
    const coinResponse: ICoin = await getOneCoinRequest(coinId);
    const coin = mapCoin(coinResponse);
    thunkApi.dispatch(setCoinAction(coin));
  } catch (error) {
    console.error(error);
  } finally {
    thunkApi.dispatch(setLoadingCoinAction(false));
  }
});

export const createCoinAsyncAction = createAsyncThunk(COIN__FETCH_COINS, async (coin: INewCoin, thunkApi) => {
  thunkApi.dispatch(setLoadingCoinAction(true));
  try {
    await createNewCoinRequest(coin);
    thunkApi.dispatch(fetchCoinsAsyncAction());
  } catch (error) {
    console.error(error);
  } finally {
    thunkApi.dispatch(setLoadingCoinAction(false));
  }
});

export const updateCoinAsyncAction = createAsyncThunk(COIN__FETCH_COINS, async (coin: ICoin, thunkApi) => {
  thunkApi.dispatch(setLoadingCoinAction(true));
  try {
    await updateOneCoinRequest(coin);
    thunkApi.dispatch(fetchCoinsAsyncAction());
  } catch (error) {
    console.error(error);
  } finally {
    thunkApi.dispatch(setLoadingCoinAction(false));
  }
});

export const deleteCoinAsyncAction = createAsyncThunk(COIN__FETCH_COINS, async (coinId: string, thunkApi) => {
  thunkApi.dispatch(setLoadingCoinAction(true));
  try {
    await deleteOneCoinRequest(coinId);
    thunkApi.dispatch(fetchCoinsAsyncAction());
  } catch (error) {
    console.error(error);
  } finally {
    thunkApi.dispatch(setLoadingCoinAction(false));
  }
});
