import styled from 'styled-components';

export const SideBar = styled.div`
  display: none;
  @media(min-width: 768px){
    display: block;
    width: 200px;
    background-color: #F0EEF0;
    height: 100vh;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px 20px 20px 20px;
    position: absolute;
    left: 0px;
  }
  `;

export const List = styled.ul`
  color: grey;
  font-size: 2.5rem;
  font-weight: 500px;
  margin-bottom: 20px;
  list-style-type: none;
  text-align: left;
  `;

export const ListItem = styled.li`
  color: grey;
  font-size: 2rem;
  font-weight: 500px;
  list-style-type: none;
  margin-left: 20px;
`;
