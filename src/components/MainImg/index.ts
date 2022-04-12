import styled from 'styled-components';

const MainImg = styled.img`
  @media ${(props) => props.theme.media.tablet} {
    width: 300px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 250px;
  }
`;
export default MainImg;
