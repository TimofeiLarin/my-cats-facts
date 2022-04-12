import React from 'react';

import { useTimeReader } from '../hooks/useTimeReader';

import { FlexCard, TimeReadCard, WrapperCard } from './CardFact.styles';

interface CardFactProps {
  text: string;
}

const CardFact: React.FC<CardFactProps> = ({ text }) => {
  const time = useTimeReader(text);

  return (
    <WrapperCard>
      <FlexCard>
        <div>{text}</div>
        <TimeReadCard>Can be read in {time} seconds</TimeReadCard>
      </FlexCard>
    </WrapperCard>
  );
};

export default CardFact;
