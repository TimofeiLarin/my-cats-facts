import styled from 'styled-components';

export const TextRandomFact = styled.p`
  width: 881px;
  font-size: 48px;
  @media ${(props) => props.theme.media.medium} {
    font-size: 38px;
    max-width: 700px;
  }
  @media ${(props) => props.theme.media.tablet} {
    max-width: 400px;
    font-size: 24px;
  }
  @media ${(props) => props.theme.media.phone} {
    max-width: 300px;
    font-size: 20px;
  }
`;

export const CounterRandomFact = styled.p`
  margin-top: 30px;
  color: ${props => props.theme.colors.otherText}
`;

export const ButtonNewFact = styled.button`
  margin-top: 30px;
  width: 193px;
  height: 81px;
  font-size: 20px;
  color: ${props => props.theme.colors.lightText};
  background: ${props => props.theme.colors.gradient};
  border: none;
  cursor: pointer;
  @media ${(props) => props.theme.media.tablet} {
    width: 161px;
    height: 61px;
    font-size: 20px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 141px;
    height: 51px;
    font-size: 16px;
  }
`;
