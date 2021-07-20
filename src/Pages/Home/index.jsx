import React from 'react';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import * as S from './styles';
import fachada from '../../Assets/img/fachada-1.jpg';

const Home = () => (
  <div>
    <Header />
    <S.Main>
      <SideBar />
      <S.Content>
        <S.MainImage src={fachada} alt="Fachada Casa" />
      </S.Content>
    </S.Main>
  </div>
);

export default Home;
