import React from 'react';
import Flex from '../Flex';
import { ButtonNewFact, CounterRandomFact, TextRandomFact } from './CardRandomFact.styles';

interface CardProps {
  newFact?: () => void;
  text: string;
  time: number;
}

const CardRandomFact: React.FC<CardProps> = ({newFact, text, time}) => {
  return (
    <Flex fDirection='column' alignItems='flex-start' marginTop={57}>
      <TextRandomFact>
        {text}
      </TextRandomFact>
      <CounterRandomFact>Can be read in {time} seconds</CounterRandomFact>
      <ButtonNewFact onClick={newFact}>Get new fact</ButtonNewFact>
    </Flex>
  );
};

export default CardRandomFact;
