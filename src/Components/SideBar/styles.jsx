import styled from 'styled-components';

export const SideBar = styled.div`
  display: none;
  @media(min-width: 768px){
    display: block;
    width: 20%;
    background-color: #F0EEF0;
    height: auto;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px 20px 20px 20px;
    position: absolute;
    left: 0px;
  }
  @media(min-width: 1536px){
    width: 15%;
  }
  `;

export const OrangeButton = styled.button`
  background-color: orange;
  color: #1d0a0a;
  width: 100%;
  padding: 20px;
  margin-bottom: 40px;
  font-size: 1.6vw;
  box-shadow: 0 0 4px red;

  &:hover{
    cursor: pointer;
  }
`;

export const List = styled.ul`
  color: black;
  font-size: 1.8vw;
  font-weight: 500px;
  margin-bottom: 20px;
  list-style-type: none;
  text-align: left;
  `;

export const ListItem = styled.li`
  color: grey;
  font-size: 1.5vw;
  font-weight: 500px;
  list-style-type: none;
  margin-left: 20px;
  cursor: pointer;
`;
