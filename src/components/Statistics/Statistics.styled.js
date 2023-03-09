import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
`;

export const List = styled.ul`
  margin-top: 0;
  display: flex;
  justify-content: center;

  list-style-type: none;
`;

export const ListItems = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: column;

  & span {
    font-weight: 700;
  }
`;
