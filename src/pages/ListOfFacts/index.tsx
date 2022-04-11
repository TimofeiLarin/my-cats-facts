import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Flex, TitlePage, Wrapper } from '../../components';

const ListOfFacts: React.FC = () => {
  useEffect(() => {
    axios
      .get('https://catfact.ninja/facts?page=10')
      .then((Response) => console.log(Response.data));
  }, []);

  return (
    <Flex jContent='center' marginTop={55}>
      <Wrapper>
        <TitlePage>List of facts</TitlePage>
      </Wrapper>
    </Flex>
  );
};

export default ListOfFacts;
