/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import * as S from './styles';
import { UserContext } from '../../contexts/component';

const SideBar = () => {
  let { componentName, setComponentName } = useContext(UserContext);
  const handleId = (e) => {
    setComponentName(e.target.id);
  };
  return (
    <S.SideBar>
      <S.OrangeButton id="imobiliaria" onClick={handleId}>
        Fotos
        <br />
        para
        <br />
        Imobiliária
        <br />
      </S.OrangeButton>
      <S.List>
        5 Quartos
        <S.ListItem id="suiteCasal" onClick={handleId}>Suíte Casal</S.ListItem>
        <S.ListItem id="suiteSolteiro1" onClick={handleId}>Suíte Solteiro 1</S.ListItem>
        <S.ListItem id="suiteSolteiro2" onClick={handleId}>Suíte Solteiro 2</S.ListItem>
        <S.ListItem id="suiteSolteiro3" onClick={handleId}>Suíte Solteiro 3</S.ListItem>
        <S.ListItem id="suiteHospedes" onClick={handleId}>Suíte Hóspedes</S.ListItem>
      </S.List>
      <S.List>Escritório</S.List>
      <S.List>
        3 Salas
        <S.ListItem id="salaEstar" onClick={handleId}>Sala de Estar</S.ListItem>
        <S.ListItem id="salaTelevisao" onClick={handleId}>Sala de Televisão</S.ListItem>
        <S.ListItem id="salaJantar" onClick={handleId}>Sala de Jantar</S.ListItem>
      </S.List>
      <S.List>Cozinha</S.List>
      <S.List>Garagem</S.List>
      <S.List>Varanda</S.List>
      <S.List>Lavabo</S.List>
      <S.List>Salão</S.List>
      <S.List>Suíte Quarto Empregado</S.List>
      <S.List>Lavanderia</S.List>
      <S.List>Churrasqueira</S.List>
      <S.List>Piscina</S.List>
    </S.SideBar>
  );
};

export default SideBar;
