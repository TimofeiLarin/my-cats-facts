import React from 'react';
import Flex from '../Flex';
import {
  ButtonNewFact,
  CounterRandomFact,
  TextRandomFact,
} from './CardRandomFact.styles';

interface CardProps {
  newFact: () => void;
  text: string;
}

const CardRandomFact: React.FC<CardProps> = ({ newFact, text }) => {
  const time = Math.ceil(
    text.split(' ').filter((word: any) => word.length > 2 && isNaN(word))
      .length * 0.3
  );

  return (
    <Flex fDirection='column' alignItems='flex-start' marginTop={57}>
      <TextRandomFact>{text}</TextRandomFact>
      <CounterRandomFact>Can be read in {time} seconds</CounterRandomFact>
      <ButtonNewFact onClick={newFact}>Get new fact</ButtonNewFact>
    </Flex>
  );
};

export default CardRandomFact;
