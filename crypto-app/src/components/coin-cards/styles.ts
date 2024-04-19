import styled from "styled-components";

export const CoinCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 20px;
  gap: 20px;
  overflow-x: scroll;
  scrollbar-width: none;
`;

export const CoinCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 150px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.popupBackground};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #000000;
`;

export const CoinCardLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CoinCardLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const CoinCardName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const CoinCardButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const CoinCardBuyButton = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.acceptGreen};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CoinCardSellButton = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.errorRed};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CoinCardPrice = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const CoinCardPriceChange = styled.h3`
  font-size: ${(props) => props.theme.fontSize.m};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const CoinCardPriceChangePositiveIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const CoinCardPriceChangeNegativeIcon = styled.img`
  width: 10px;
  height: 10px;
`;

export const CoinCardFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CoinCardSecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CoinCardPriceChangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
