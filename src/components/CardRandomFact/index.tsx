import React from 'react';
import Flex from '../Flex';
import { ButtonNewFact, CounterRandomFact, TextRandomFact } from './CardRandomFact.styles';



const CardRandomFact: React.FC = () => {
  let a = 10;
  return (
    <Flex fDirection='column' alignItems='flex-start' marginTop={57}>
      <TextRandomFact>
        There are approximately 60,000 hairs per square inch on the back of a
        cat and about 120,000 per square inch on its underside.
      </TextRandomFact>
      <CounterRandomFact>Can be read in {a} seconds</CounterRandomFact>
      <ButtonNewFact>Get new fact</ButtonNewFact>
    </Flex>
  );
};

export default CardRandomFact;
