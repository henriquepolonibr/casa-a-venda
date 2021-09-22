/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 20px 0px 20px;
  font-size: 7vw;
  @media(min-width: 768px){
    margin: 20px 0px 20px;
    font-size: 54px;
  }
`;

export const Description = styled.h3`
  font-size: 27px;
  margin: 20px 0px 20px;
  font-weight: 400;
  @media(min-width: 768px){
    margin: 20px 0px 20px;
  }
`;

export const ImagesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media(min-width: 768px){
    max-width: 100%;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  @media(min-width: 768px){
    width: 100%;
    max-width: 900px;
    margin: 10px;
  }
`;
