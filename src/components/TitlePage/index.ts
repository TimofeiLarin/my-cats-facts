import styled from 'styled-components';

type TitleProps = {
  align?: string;
  alignList?: boolean;
  marginTop?: number;
};

const TitlePage = styled.h1<TitleProps>`
  font-size: 48px;
  text-align: ${(props) => props.align || 'left'};
  margin-top: ${(props) => props.marginTop}px;
  @media ${(props) => props.theme.media.large} {
    text-align: ${(props) => props.alignList && 'center'};
  }
  @media ${(props) => props.theme.media.medium } {
    text-align: ${(props) => props.alignList && 'center'};
  }
  @media ${(props) => props.theme.media.tablet} {
    font-size: 38px;
    text-align: ${(props) => props.alignList && 'center'};
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 32px;
    text-align: ${(props) => props.alignList && 'center'};
  }
`;
export default TitlePage;
