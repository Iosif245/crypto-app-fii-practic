import React from "react";
import { HomeContainer, HomeTitle } from "./styles";
import Header from "../../components/header";
import CoinCards from "../../components/coin-cards";
import Chart from "../../components/chart";
import Modal from "../../components/modal";
import { useSelector } from "react-redux";
import { isModalOpenAppStateSelector } from "../../store/selectors/app-selectors";

const Home = () => {
  const isModalOpen = useSelector(isModalOpenAppStateSelector);

  return (
    <HomeContainer>
      <Header />
      <HomeTitle>Cryptocurrencies</HomeTitle>
      <CoinCards />
      <Chart />
      {isModalOpen && <Modal />}
    </HomeContainer>
  );
};

export default Home;
