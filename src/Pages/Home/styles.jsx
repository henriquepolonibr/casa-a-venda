import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  @media(min-width: 768px){
    width: 100%;
  }
`;

export const Content = styled.div`
  position: absolute;
  left: 0px;
  @media(min-width: 768px){
    left: 200px;
  }
`;
