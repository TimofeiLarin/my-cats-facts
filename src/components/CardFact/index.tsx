import React from 'react';

import { useTimeReader } from '../hooks/useTimeReader';

import Flex from '../Flex';
import { TimeReadCard, WrapperCard } from './CardFact.styles';

interface CardFactProps {
  text: string;
}

const CardFact: React.FC<CardFactProps> = ({ text }) => {
  const time = useTimeReader(text);

  return (
    <WrapperCard>
      <Flex
        fDirection='column'
        jContent='space-between'
        alignItems='flex-start'
        height='100%'
      >
        <div>{text}</div>
        <TimeReadCard>Can be read in {time} seconds</TimeReadCard>
      </Flex>
    </WrapperCard>
  );
};

export default CardFact;
