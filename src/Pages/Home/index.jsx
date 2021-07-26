import React from 'react';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import MainContent from '../../Components/MainContent';
import * as S from './styles';

const Home = () => (
  <>
    <Header />
    <S.Main>
      <SideBar />
      <S.Content>
        <MainContent />
      </S.Content>
    </S.Main>
  </>
);

export default Home;
