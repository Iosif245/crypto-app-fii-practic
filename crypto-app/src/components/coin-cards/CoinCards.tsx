import React, { useEffect } from "react";
import {
  CoinCard,
  CoinCardButtonsContainer,
  CoinCardBuyButton,
  CoinCardFirstRow,
  CoinCardLogo,
  CoinCardLogoContainer,
  CoinCardName,
  CoinCardPrice,
  CoinCardPriceChange,
  CoinCardPriceChangeContainer,
  CoinCardPriceChangePositiveIcon,
  CoinCardSecondRow,
  CoinCardSellButton,
  CoinCardsContainer,
} from "./styles";
import decrease from "../../assets/decrease.png";
import increase from "../../assets/increase.png";
import { useAppDispatch } from "../../hooks/store-hooks";
import { fetchCoinAsyncAction, fetchCoinsAsyncAction } from "../../store/actions/coin-actions";
import { useSelector } from "react-redux";
import { coinSelector, coinsSelector } from "../../store/selectors/coin-selectors";

const CoinCards = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCoinsAsyncAction());
  }, [dispatch]);

  const coins = useSelector(coinsSelector);

  function calculatePriceDifference(coin: ICoin) {
    if (coin.history === undefined)
      return {
        percentageDifference: 0,
      };
    const keys = Object.keys(coin.history);
    const lastKey = keys.pop();
    let lastValue = 0;

    if (lastKey !== undefined) {
      lastValue = coin.history[lastKey];
    }
    let percentageDifference: number = 0;
    if (coin.price > lastValue) {
      percentageDifference = ((coin.price - lastValue) / lastValue) * 100;
    } else if (coin.price < lastValue) {
      percentageDifference = -((lastValue - coin.price) / lastValue) * 100;
    }
    return {
      percentageDifference: percentageDifference.toFixed(2),
    };
  }

  return (
    <CoinCardsContainer>
      {coins &&
        coins.map((coin) => {
          const { percentageDifference } = calculatePriceDifference(coin);
          return (
            <CoinCard key={coin.name}>
              <CoinCardFirstRow>
                <CoinCardLogoContainer>
                  <CoinCardLogo src={`/coinImages/${coin.name}.png`} />
                  <CoinCardName>{coin.name}</CoinCardName>
                </CoinCardLogoContainer>
                <CoinCardButtonsContainer>
                  <CoinCardBuyButton>Buy</CoinCardBuyButton>
                  <CoinCardSellButton>Sell</CoinCardSellButton>
                </CoinCardButtonsContainer>
              </CoinCardFirstRow>
              <CoinCardSecondRow>
                <CoinCardPrice>{coin.price}</CoinCardPrice>
                <CoinCardPriceChangeContainer>
                  <CoinCardPriceChange>{percentageDifference}%</CoinCardPriceChange>
                  {Number(percentageDifference) > 0 ? <CoinCardPriceChangePositiveIcon src={increase} /> : <CoinCardPriceChangePositiveIcon src={decrease} />}
                </CoinCardPriceChangeContainer>
              </CoinCardSecondRow>
            </CoinCard>
          );
        })}
    </CoinCardsContainer>
  );
};

export default CoinCards;
