import styled from 'styled-components';

export const Friend = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  & p {
    margin-left: 10px;
    font-size: 25px;
  }
`;

export const OnlineStatus = styled.span`
  margin-right: 20px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;
