/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import * as S from './styles';
import { UserContext } from '../../contexts/component';

const Header = () => {
  let { componentName, setComponentName } = useContext(UserContext);
  const handleId = (e) => {
    setComponentName(e.target.id);
  };
  return (
    <div>
      <S.Header>
        <S.HeaderTitle>SOBRADO ALTO PADRÃO À VENDA</S.HeaderTitle>
        <S.HeaderButtons>
          <S.ContactButton id="home" onClick={handleId}>Home</S.ContactButton>
          <S.ContactButton>Contato</S.ContactButton>
        </S.HeaderButtons>
      </S.Header>
    </div>
  );
};

export default Header;
