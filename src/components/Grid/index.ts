import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 70px;
  @media ${(props) => props.theme.media.large} {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${(props) => props.theme.media.medium} {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${(props) => props.theme.media.tablet} {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    margin-top: 50px;
  }
  @media ${(props) => props.theme.media.phone} {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 10px;
    margin-top: 30px;

  }
`;

export default Grid;
