import React from 'react';
import fachadaGaragem from '../../Assets/img/imobiliaria/fachada-garagem-2.jpg';
import areaPiscina1 from '../../Assets/img/imobiliaria/area-piscina-1.jpg';
import areaPiscina2 from '../../Assets/img/imobiliaria/area-piscina-2.jpg';
import areaPiscina3 from '../../Assets/img/imobiliaria/area-piscina-3.jpg';
import cozinha1 from '../../Assets/img/imobiliaria/cozinha-1.jpg';
import cozinha2 from '../../Assets/img/imobiliaria/cozinha-2.jpg';
import * as S from './styles';

const SuiteCasal = () => (
  <S.Content>
    <S.Title>Fotos Imobiliária</S.Title>
    <S.Description>
      Fotos para publicação no site da imobiliária
    </S.Description>
    <S.ImagesLayout>
      <S.Image src={fachadaGaragem} alt="Fachada casa / garagem 3 carros" />
      <S.Image src={cozinha1} alt="Cozinha" />
      <S.Image src={cozinha2} alt="Cozinha" />
      <S.Image src={areaPiscina1} alt="Área Piscina" />
      <S.Image src={areaPiscina2} alt="Área Piscina" />
      <S.Image src={areaPiscina3} alt="Área Piscina" />
    </S.ImagesLayout>
  </S.Content>
);

export default SuiteCasal;
