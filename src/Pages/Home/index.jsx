import React from 'react';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import MainContent from '../../Components/MainContent';
import * as S from './styles';
import fachada from '../../Assets/img/fachada-1.jpg';

const Home = () => (
  <div>
    <Header />
    <S.Main>
      <SideBar />
      <S.Content>
        <MainContent />
        <h2>
          Sobrado à venda 400m2 de terreno (10m x 40m),
          localizado no Parque das Nações, Santo André.
        </h2>
        <S.MainImage src={fachada} alt="Fachada Casa" />
      </S.Content>
    </S.Main>
  </div>
);

export default Home;
