import React from 'react';
import suiteCasal1 from '../../../Assets/img/suite-casal/suite-casal-1.jpg';
import suiteCasal2 from '../../../Assets/img/suite-casal/suite-casal-2.jpg';
import suiteCasal3 from '../../../Assets/img/suite-casal/suite-casal-3.jpg';
import suiteCasal4 from '../../../Assets/img/suite-casal/suite-casal-4.jpg';
import * as S from './styles';

const SuiteCasal = () => (
  <div>
    <S.Title>Suite Casal</S.Title>
    <S.ImagesLayout>
      <S.Image src={suiteCasal1} alt="Foto Suite Casal 1" />
      <S.Image src={suiteCasal2} alt="Foto Suite Casal 2" />
      <S.Image src={suiteCasal3} alt="Foto Suite Casal 3" />
      <S.Image src={suiteCasal4} alt="Foto Suite Casal 4" />
    </S.ImagesLayout>
  </div>
);

export default SuiteCasal;
