import React from 'react';
import { CardRandomFact, Flex, TitlePage, Wrapper } from '../../components';

const RandomFact: React.FC = () => {
  return (
    <Flex jContent='center' marginTop={55}>
      <Wrapper>
        <TitlePage>Random fact</TitlePage>
        <CardRandomFact />
      </Wrapper>
    </Flex>
  );
};

export default RandomFact;
