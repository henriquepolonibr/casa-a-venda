import React from 'react';
import * as S from './styles';
import fachada from '../../Assets/img/fachada/fachada-1.jpg';

const Home = () => (
  <div>
    <S.Content>
      <h2>
        Sobrado à venda 400m2 de terreno (10m x 40m),
        localizado no Parque das Nações, Santo André.
      </h2>
      <S.MainImage src={fachada} alt="Fachada Casa" />
    </S.Content>
  </div>
);

export default Home;
