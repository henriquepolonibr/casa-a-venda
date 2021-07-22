import React from 'react';
import * as S from './styles';

const SideBar = () => (
  <S.SideBar>
    <S.OrangeButton>
      Fotos
      <br />
      para
      <br />
      Imobiliária
      <br />
    </S.OrangeButton>
    <S.List>
      Quartos
      <S.ListItem>Suíte Casal</S.ListItem>
      <S.ListItem>Suíte Solteiro 1</S.ListItem>
      <S.ListItem>Suíte Solteiro 2</S.ListItem>
      <S.ListItem>Suíte Solteiro 3</S.ListItem>
      <S.ListItem>Suíte Hóspedes</S.ListItem>
    </S.List>
    <S.List>Escritório</S.List>
    <S.List>
      Salas
      <S.ListItem>Sala de Estar</S.ListItem>
      <S.ListItem>Sala de Televisão</S.ListItem>
      <S.ListItem>Sala de Jantar</S.ListItem>
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

export default SideBar;
