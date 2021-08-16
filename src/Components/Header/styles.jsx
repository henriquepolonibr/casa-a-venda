import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  background-color: #3C3C3B;
  height: 100px;
  align-items: center;
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const HeaderTitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 6vw;
  font-weight: 500px;
  @media(min-width:768px) {
    width: 100%;
    font-size: 3.5vw;
  }
`;

export const HeaderButtons = styled.div`
  display: none;
  @media(min-width:768px) {
    display: block;
    position: absolute;
    right: 5vw;
  }
`;

export const ContactButton = styled.span`
  color: white;
  margin-right: 30px;
  font-size: 1.5vw;
  &:hover{
    cursor: pointer;
  }
`;

export const HomeButton = styled(ContactButton)`
`;

export const HamburgerIcon = styled.div`
  display: block;
  @media(min-width: 768px){
    display: none;
  }
`;
