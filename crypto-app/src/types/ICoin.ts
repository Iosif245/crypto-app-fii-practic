interface ICoin {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  price: number;
  history: ICoinPriceHistory;
  count: number;
}
