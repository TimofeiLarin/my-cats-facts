import styled from 'styled-components';

const TitlePage = styled.h1<{ align?: string, marginTop?: string }>`
  font-size: 48px;
  text-align: ${(props) => props.align || 'left'};
  margin-top: ${(props) => props.marginTop}
`;
 export default TitlePage;