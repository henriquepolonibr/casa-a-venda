import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 20vh;
  top: 100px;
  left: 0px;
  z-index: 2;
  background-color: #3C3C3B;
  padding: 20px;
  @media(min-width: 768px){
    display: none;
  }
`;

export const Items = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
`;
