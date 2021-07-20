import styled from 'styled-components';

export const Header = styled.div`
  display: block;
  width: 100%;
  background-color: #3C3C3B;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px){
    height: 200px;
  }
  `;

export const HeaderTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: 500px;
`;
