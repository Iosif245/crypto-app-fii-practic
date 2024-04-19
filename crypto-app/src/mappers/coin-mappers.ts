import { toNumber, toString } from "lodash";

export const mapCoinHistory = (data: Partial<ICoinPriceHistory>): ICoinPriceHistory => {
  const coinHistory: ICoinPriceHistory = {};
  Object.keys(data).forEach((key) => {
    coinHistory[key] = toNumber(data[key]);
  });
  return coinHistory;
};

export const mapCoin = (data: Partial<ICoin>): ICoin => {
  const coin: ICoin = {
    id: toString(data?.id),
    name: toString(data?.name),
    createdAt: toString(data?.createdAt),
    updatedAt: toString(data?.updatedAt),
    price: toNumber(data?.price),
    history: data?.history ? mapCoinHistory(data.history) : {},
    count: toNumber(data?.count ?? 0),
  };

  return coin;
};

// export const mapCoins = (data: ICoins): ICoins => {
//   return {
//     coins: data.coins.map((coin) => mapCoin(coin)),
//   };
// };
