import React, { useEffect, useState } from "react";
import {
  HeaderButtonsContainer,
  HeaderClosePopupContainer,
  HeaderContainer,
  HeaderDownArrowIcon,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderProfileName,
  HeaderProfilePopup,
  HeaderProfilePopupContainer,
  HeaderProfilePopupItem,
  HeaderProfilePopupWrapper,
  HeaderThemeSwitch,
  HeaderThemeSwitchWrapper,
  HeaderTitle,
} from "./styles";
import logo from "../../assets/logo.png";
import themeSwitch from "../../assets/light-dark-mode.svg";
import avatar from "../../assets/Avatar.png";
import arrow from "../../assets/down-selector.svg";
import { useAppDispatch } from "../../hooks/store-hooks";
import { fetchUserAsyncAction } from "../../store/actions/user-actions";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/user-selectors";
import { setAppDarkThemeAction } from "../../store/actions/app-sync-actions";
import { isDarkThemeAppStateSelector } from "../../store/selectors/app-selectors";

const Header = (): JSX.Element => {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAsyncAction(1));
  }, [dispatch]);

  const user: IUser | null = useSelector(userSelector);
  const isDrakMode: boolean = useSelector(isDarkThemeAppStateSelector);

  const handleProfilePopup = () => {
    setIsProfilePopupOpen(!isProfilePopupOpen);
  };

  const handleThemeSwitch = () => {
    dispatch(setAppDarkThemeAction(!isDrakMode));
  };

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderLogo src={logo} />
        <HeaderTitle>Crypto Tracker</HeaderTitle>
      </HeaderLogoContainer>
      <HeaderButtonsContainer>
        <HeaderThemeSwitchWrapper onClick={() => handleThemeSwitch()}>
          <HeaderThemeSwitch src={themeSwitch} />
        </HeaderThemeSwitchWrapper>
        <HeaderProfilePopupWrapper>
          <HeaderClosePopupContainer onClick={() => handleProfilePopup()}>
            <HeaderProfilePopup src={avatar} />
            <HeaderProfileName>{user?.name}</HeaderProfileName>
            <HeaderDownArrowIcon src={arrow} $isOpen={isProfilePopupOpen} />
          </HeaderClosePopupContainer>
          <HeaderProfilePopupContainer $isOpen={isProfilePopupOpen}>
            <HeaderProfilePopupItem>Funds:</HeaderProfilePopupItem>
            <HeaderProfilePopupItem>{user?.funds} $</HeaderProfilePopupItem>
          </HeaderProfilePopupContainer>
        </HeaderProfilePopupWrapper>
      </HeaderButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
