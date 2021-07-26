import React from 'react';
import suiteHospede1 from '../../../Assets/img/suite-hospede-1.jpg';
import suiteHospede2 from '../../../Assets/img/suite-hospede-2.jpg';
import suiteHospede3 from '../../../Assets/img/suite-hospede-3.jpg';
import * as S from './styles';

const SuiteHospedes = () => (
  <div>
    <S.Title>Suite Hóspedes</S.Title>
    <S.ImagesLayout>
      <S.Image src={suiteHospede1} alt="Foto Suite Hospede 1" />
      <S.Image src={suiteHospede2} alt="Foto Suite Hospede 2" />
      <S.Image src={suiteHospede3} alt="Foto Suite Hospede 3" />
    </S.ImagesLayout>
  </div>
);

export default SuiteHospedes;
