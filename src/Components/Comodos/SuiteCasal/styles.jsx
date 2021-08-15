/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Title = styled.h2`
  margin: 20px;
  font-size: 7vw;
  @media(min-width: 768px){
    margin: 20px 10px 20px 20px;
    font-size: 54px;
  }
`;

export const Description = styled.h3`
  font-size: 27px;
  margin: 0px 10px 20px 0px;
  font-weight: 400;
  @media(min-width: 768px){
    margin: 0px 10px 20px 20px;
  }
`;

export const ImagesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  @media(min-width: 768px){
    max-width: 100%;
  }
  @media(min-width: 1536px){
    width: 80%;
  }
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  @media(min-width: 768px){
    width: 500px;
    margin: 30px;
  }
`;
