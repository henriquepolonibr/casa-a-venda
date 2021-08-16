import React from 'react';
import suiteCasal1 from '../../../Assets/img/suite-casal/suite-casal-1.jpg';
import suiteCasal2 from '../../../Assets/img/suite-casal/suite-casal-2.jpg';
import suiteCasal3 from '../../../Assets/img/suite-casal/suite-casal-3.jpg';
import suiteCasal4 from '../../../Assets/img/suite-casal/suite-casal-4.jpg';
import * as S from './styles';

const SuiteCasal = () => (
  <S.Content>
    <S.Title>Suíte Casal</S.Title>
    <S.Description>
      Suíte master da casa com 17,43m² (4,58m x 3,80m) e um pé direito de 2,84m.
      A suíte possui banheiro com banheira de hidromassagem e closet de 3,84m² (3,28m x 1,17m),
      totalizando 28,59m² de área.
    </S.Description>
    <S.ImagesLayout>
      <S.Image src={suiteCasal1} alt="Foto Suíte Casal 1" />
      <S.Image src={suiteCasal2} alt="Foto Suíte Casal 2" />
      <S.Image src={suiteCasal3} alt="Foto Suíte Casal 3" />
    </S.ImagesLayout>
    <S.Title>Banheiro Suíte Casal</S.Title>
    <S.Description>
      Banheiro suíte casal com 7,32m² (1,45m x 5,05m) com banheira de hidromassagem,
      mármore e encanamento de cobre.
    </S.Description>
    <S.ImagesLayout>
      <S.Image src={suiteCasal4} alt="Foto Suíte Casal 4" />
    </S.ImagesLayout>
  </S.Content>
);

export default SuiteCasal;
