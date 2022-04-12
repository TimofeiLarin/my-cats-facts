import styled from 'styled-components';

export const WrapperCard = styled.div`
  width: 580px;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.mainText};
  @media ${(props) => props.theme.media.tablet} {
    width: 400px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 300px;
  }
`;

export const FlexCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
height: 100%;
`;


export const TimeReadCard = styled.p`
  margin-top: 20px;
  color: ${props => props.theme.colors.otherText}
`;