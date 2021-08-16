/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import * as S from './styles';
import { UserContext } from '../../contexts/component';

const MobileMenu = () => {
  let { componentName, setComponentName } = useContext(UserContext);
  const handleId = (e) => {
    setComponentName(e.target.id);
  };
  return (
    <S.Menu>
      <S.Items id="suiteCasal" onClick={handleId}>Quarto Casal</S.Items>
      <S.Items id="suiteSolteiro1" onClick={handleId}>Suíte Solteiro 1</S.Items>
      <S.Items id="suiteSolteiro2" onClick={handleId}>Suíte Solteiro 2</S.Items>
      <S.Items id="suiteSolteiro3" onClick={handleId}>Suíte Solteiro 3</S.Items>
      <S.Items id="suiteHospedes" onClick={handleId}>Suíte Hóspedes</S.Items>
    </S.Menu>
  );
};

export default MobileMenu;
