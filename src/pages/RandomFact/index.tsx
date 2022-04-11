import React from 'react';
import axios from 'axios';

import { CardRandomFact, Flex, TitlePage, Wrapper } from '../../components';

interface IFetchRandom {
  fact: string;
  length?: number;
}
const RandomFact: React.FC = () => {
  const [randomFact, setRandomFact] = React.useState('');

  const fetchNewFact = async () => {
    try {
      const { data } = await axios.get<IFetchRandom>(
        'https://catfact.ninja/fact'
      );
      setRandomFact(data.fact);
    } catch (e) {
      alert('Failed to fetch random fact');
    }
  };
  
  React.useEffect(() => {
    fetchNewFact();
  }, []);

  const timeCount = Math.ceil(
    randomFact.split(' ').filter((word: any) => word.length > 2 && isNaN(word))
      .length * 0.3
  );

  console.log(timeCount);

  return (
    <Flex jContent='center' marginTop={55}>
      <Wrapper>
        <TitlePage>Random fact</TitlePage>
        <CardRandomFact
          text={randomFact}
          time={timeCount}
          newFact={fetchNewFact}
        />
      </Wrapper>
    </Flex>
  );
};

export default RandomFact;
