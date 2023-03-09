import styled from 'styled-components';

export const Container = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  & tr {
    background-color: lavender;
  }
  & th,
  td {
    padding: 10px;
    border: 1px solid #2a2a2a;
  }
`;

export const Body = styled.tbody`
  & th,
  td {
    padding: 10px;
    border: 1px solid black;
  }
  & td::first-line {
    text-transform: capitalize;
  }
`;
