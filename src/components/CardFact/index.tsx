import React from 'react';

import Flex from '../Flex';
import { TimeReadCard, WrapperCard } from './CardFact.styles';

interface CardFactProps {
  text: string;
}

const CardFact: React.FC<CardFactProps> = ({ text }) => {
  const time = Math.ceil(
    text.split(' ').filter((word: any) => word.length > 2 && isNaN(word))
      .length * 0.3
  );

  return (
    <WrapperCard>
      <Flex fDirection='column' jContent='space-between' alignItems='flex-start'>
        <div>{text}</div>
        <TimeReadCard>Can be read in {time} seconds</TimeReadCard>
      </Flex>
    </WrapperCard>
  );
};

export default CardFact;
