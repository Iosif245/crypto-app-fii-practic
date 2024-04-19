import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const HeaderContainer = styled.header`
  z-index: 100;
  height: 82px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.navBackground};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 0 20px;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const HeaderTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  margin-left: 10px;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderThemeSwitchWrapper = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const HeaderThemeSwitch = styled.img`
  width: 28px;
  height: 28px;
`;

export const HeaderProfilePopupWrapper = styled.div`
  width: 160px;
  height: fit-content;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.mainBackground};
  cursor: pointer;
  border-radius: 16px;
  position: relative;
`;

export const HeaderClosePopupContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderProfilePopup = styled.img`
  width: 40px;
  height: 40px;
`;

export const HeaderProfileName = styled.h5`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0 10px;
`;

export const HeaderDownArrowIcon = styled.img<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;
  align-self: center;

  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const HeaderProfilePopupContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 42px;
  right: 0px;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.popupBackground};
  border-radius: 16px;
  z-index: 100;
  position: absolute;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.border};
  padding: 10px;

  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  animation: ${(props) => (props.$isOpen ? fadeIn : fadeOut)} 0.3s linear;
  transition: visibility 0.3s linear, opacity 0.3s linear;
`;

export const HeaderProfilePopupItem = styled.h6`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textPrimary};
  cursor: pointer;
  width: 100%;
  height: fit-content;
  text-align: center;
`;
