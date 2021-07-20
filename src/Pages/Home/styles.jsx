import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  left: 0px;
  width: 100%;
  @media(min-width: 768px){
    width: 80%;
    left: 200px;
  }
`;

export const MainImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media(min-width: 768px){
    width: 60%;
  }
`;
