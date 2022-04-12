import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1180px;
  @media ${(props) => props.theme.media.large} {
    max-width: 900px;
  }
  @media ${(props) => props.theme.media.medium} {
    max-width: 700px;
  }
  @media ${(props) => props.theme.media.tablet} {
    max-width: 420px;
  }
  @media ${(props) => props.theme.media.phone} {
    max-width: 360px;
  }
`
export default Wrapper;