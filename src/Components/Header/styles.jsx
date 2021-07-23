import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  background-color: #3C3C3B;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 2vw;
  font-weight: 500px;
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactButton = styled.span`
  color: white;
  margin-right: 30px;
  font-size: 22px;
  &:hover{
    cursor: pointer;
  }
`;

export const HomeButton = styled(ContactButton)`
`;
