import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 700;
`;

export const Description = styled.div`
  margin: 0 auto;
  text-align: center;

  & img {
    margin: 0 auto;
    display: block;
    height: 250px;
    width: 250px;
  }
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;

  list-style-type: none;
`;

export const Labels = styled.li`
  margin: 15px;
  display: flex;
  flex-direction: column;
`;
