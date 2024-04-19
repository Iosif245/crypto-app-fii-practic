import React, { useEffect } from "react";
import {
  ChartCoinsAddCoinButton,
  ChartCoinsButtonsContainer,
  ChartCoinsItemContainer,
  ChartCoinsItemDeleteButton,
  ChartCoinsItemDetailsContainer,
  ChartCoinsItemLogo,
  ChartCoinsItemName,
  ChartCoinsItemPrice,
  ChartCoinsMenuContainer,
  ChartCoinsShowButton,
} from "./styles";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/store-hooks";
import { coinsSelector } from "../../store/selectors/coin-selectors";
import { deleteCoinAsyncAction, fetchCoinAsyncAction } from "../../store/actions/coin-actions";
import { setAppIsModalOpenAction } from "../../store/actions/app-sync-actions";

const ChartCoinsMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const coins = useSelector(coinsSelector);

  const handleShowAction = (id: string) => {
    dispatch(fetchCoinAsyncAction(id));
  };

  const handleDeleteAction = (id: string) => {
    dispatch(deleteCoinAsyncAction(id));
  };

  const handleAddCoinAction = () => {
    dispatch(setAppIsModalOpenAction(true));
  };

  return (
    <ChartCoinsMenuContainer>
      <ChartCoinsAddCoinButton onClick={() => handleAddCoinAction()}>Add Coin</ChartCoinsAddCoinButton>
      {coins &&
        coins.map((coin) => (
          <ChartCoinsItemContainer key={coin.name}>
            <ChartCoinsItemLogo src={`/coinImages/${coin.name}.png`} />
            <ChartCoinsItemDetailsContainer>
              <ChartCoinsItemName>{coin.name}</ChartCoinsItemName>
              <ChartCoinsItemPrice>${coin.price}</ChartCoinsItemPrice>
            </ChartCoinsItemDetailsContainer>
            <ChartCoinsButtonsContainer>
              <ChartCoinsShowButton onClick={() => handleShowAction(coin.id)}>Show</ChartCoinsShowButton>
              <ChartCoinsItemDeleteButton onClick={() => handleDeleteAction(coin.id)}>Delete</ChartCoinsItemDeleteButton>
            </ChartCoinsButtonsContainer>
          </ChartCoinsItemContainer>
        ))}
    </ChartCoinsMenuContainer>
  );
};

export default ChartCoinsMenu;
