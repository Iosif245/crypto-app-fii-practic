import { createReducer } from "@reduxjs/toolkit";
import { setLoadingCoinAction, setCoinsCoinAction, setCoinAction } from "../actions/coin-actions";

interface ICoinState {
  coins: ICoin[];
  loading: boolean;
  coin: ICoin | null;
}

const coinsInitialState: ICoin[] = [];

const initialState: ICoinState = {
  coins: coinsInitialState,
  loading: false,
  coin: null,
};

const coinReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setLoadingCoinAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setCoinsCoinAction, (state, action) => ({ ...state, coins: action.payload }))
    .addCase(setCoinAction, (state, action) => ({ ...state, coin: action.payload }))
);

export default coinReducer;
