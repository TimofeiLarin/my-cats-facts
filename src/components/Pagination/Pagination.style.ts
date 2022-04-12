import styled from 'styled-components';

type ButtonPaginationProps = {
  active: boolean;
}

export const ButtonPagination = styled.button<ButtonPaginationProps>`
  width: 39px;
  height: 40px;
  border: none;
  color: ${(props) => (props.active === true ? 'white' : 'black')};
  background: ${(props) =>
    props.active === true
      ? `${props.theme.colors.gradient}`
      : `${props.theme.colors.gray}`};
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 20px;
`;
