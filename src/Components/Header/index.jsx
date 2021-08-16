/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Hamburger } from 'react-hamburgers-menu';
import * as S from './styles';
import { UserContext } from '../../contexts/component';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  let { componentName, setComponentName } = useContext(UserContext);
  const handleId = (e) => {
    setComponentName(e.target.id);
  };
  const toggle = React.useCallback(() => setShowMobileMenu(!showMobileMenu));

  return (
    <div>
      <S.Header>
        <S.HeaderTitle>SOBRADO ALTO PADRÃO À VENDA</S.HeaderTitle>
        {/* {showMobileMenu ? <MobileMenu /> : ''} */}
        <S.HamburgerIcon>
          <Hamburger type="R3dx" color="white" onClick={toggle} />
        </S.HamburgerIcon>
        <S.HeaderButtons>
          <S.ContactButton id="home" onClick={handleId}>Home</S.ContactButton>
          <S.ContactButton>Contato</S.ContactButton>
        </S.HeaderButtons>
      </S.Header>
    </div>
  );
};

export default Header;
