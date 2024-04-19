import styled from "styled-components";

export const ChartCoinsMenuContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.popupBackground};
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: fit-content;
  padding: 10px;
  gap: 20px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px 0px #000000;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.border};
    border-radius: 20px;
  }
`;

export const ChartCoinsItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.popupBackground};
  width: 100%;
`;

export const ChartCoinsItemName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const ChartCoinsItemLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const ChartCoinsItemPrice = styled.h2`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const ChartCoinsAddCoinButton = styled.button`
  padding: 5px 10px;
  width: 80px;
  background-color: ${(props) => props.theme.colors.activeBlue};
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
  align-self: end;

  &:hover {
    background-color: ${(props) => props.theme.colors.activeBlueHover};
  }
`;

export const ChartCoinsItemDeleteButton = styled.button`
  padding: 5px;
  background-color: ${(props) => props.theme.colors.errorRed};
  font-size: ${(props) => props.theme.fontSize.xs};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ChartCoinsItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
`;

export const ChartCoinsShowButton = styled.button`
  padding: 5px;
  background-color: ${(props) => props.theme.colors.acceptGreen};
  font-size: ${(props) => props.theme.fontSize.xs};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ChartCoinsButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;
