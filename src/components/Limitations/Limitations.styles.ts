import styled from 'styled-components';

export const WrapperPopup = styled.div`
  position: relative;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const ButtonLimit = styled.button`
  width: 60px;
  height: 40px;
  margin-left: 20px;
  border: none;
  background-color: ${props => props.theme.colors.gray};
  cursor: pointer;
`;

export const PopupLimit = styled.ul`
  position: absolute;
  right: 0;
`;

export const PopupItem = styled.li`
  width: 60px;
  height: 30px;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.mainText};
  list-style: none;
  cursor: pointer;
`;


