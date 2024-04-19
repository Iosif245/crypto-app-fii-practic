import { RootState } from "..";

export const coinSelector = (state: RootState) => state.coin.coin;
export const coinsSelector = (state: RootState) => state.coin.coins;
export const loadingCoinSelector = (state: RootState) => state.coin.loading;
