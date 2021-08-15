/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Title = styled.h2`
  margin: 20px;
  font-size: 7vw;
  @media(min-width: 768px){
    margin-top: 20px;
    font-size: 2vw;
  }
`;

export const ImagesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  @media(min-width: 768px){
    max-width: 80%;
  }
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  @media(min-width: 768px){
    width: 500px;
    margin: 30px;
  }
`;
