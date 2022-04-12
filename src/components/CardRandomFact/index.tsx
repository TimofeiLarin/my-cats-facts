import React from 'react';

import { useTimeReader } from '../hooks/useTimeReader';

import Flex from '../Flex';
import {
  ButtonNewFact,
  CounterRandomFact,
  TextRandomFact,
} from './CardRandomFact.styles';

type CardRandomProps = {
  newFact: () => void;
  text: string;
}

const CardRandomFact: React.FC<CardRandomProps> = ({ newFact, text }) => {
  const time = useTimeReader(text);

  return (
    <Flex fDirection='column' alignItems='flex-start' marginTop={57}>
      <TextRandomFact>{text}</TextRandomFact>
      <CounterRandomFact>Can be read in {time} seconds</CounterRandomFact>
      <ButtonNewFact onClick={newFact}>Get new fact</ButtonNewFact>
    </Flex>
  );
};

export default CardRandomFact;
