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
      ? ' linear-gradient(90deg, #C65252 0%, #5329CA 100%)'
      : '#C4C4C4'};
  cursor: pointer;
  margin-right: 20px;
`;
