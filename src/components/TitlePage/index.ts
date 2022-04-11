import styled from 'styled-components';

interface TitleProps {
  align?: string;
  marginTop?: number;
}

const TitlePage = styled.h1<TitleProps>`
  font-size: 48px;
  text-align: ${(props) => props.align || 'left'};
  margin-top: ${(props) => props.marginTop}px;
`;
export default TitlePage;
