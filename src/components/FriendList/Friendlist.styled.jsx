import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 20px;
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;  
  background-color: none;
  width: 100px;
  padding: 20px;
  gap: 10px;
  border-radius: 10px;
  border: black 1px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  
  color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  color: #333;
`;
