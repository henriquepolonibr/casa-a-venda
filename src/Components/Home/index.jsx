import React from 'react';
import * as S from './styles';
import fachada from '../../Assets/img/fachada/fachada-1.jpg';

const Home = () => (
  <div>
    <S.Content>
      <S.Description>
        Sobrado à venda com 580m² de área construída e 400m² de terreno (10m x 40m),
        localizado no Parque das Nações, Santo André.
      </S.Description>
      <S.MainImage src={fachada} alt="Fachada Casa" />
    </S.Content>
  </div>
);

export default Home;
