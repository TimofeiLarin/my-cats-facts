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

  return (
    <Flex jContent='center' marginTop={55}>
      <Wrapper>
        <TitlePage>Random fact</TitlePage>
        <CardRandomFact text={randomFact} newFact={fetchNewFact} />
      </Wrapper>
    </Flex>
  );
};

export default RandomFact;
