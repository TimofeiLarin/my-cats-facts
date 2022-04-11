import styled from 'styled-components';

interface FlexProps {
  fDirection?: string;
  alignItems?: string;
  jContent?: string;
  marginTop?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.fDirection || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.jContent || 'flex-start'};
  margin-top: ${(props) => props.marginTop}px;
`;

export default Flex;
