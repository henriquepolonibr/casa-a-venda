import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  left: 0px;
  width: 100%;
  padding: 20px;
`;

export const Description = styled.h2`
  margin-bottom: 20px;
  text-align: center;
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
