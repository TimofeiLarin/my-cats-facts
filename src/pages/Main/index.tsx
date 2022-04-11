import React from 'react';
import { Flex, TitlePage } from '../../components';

const Main: React.FC = () => {
  return (
    <Flex
      fDirection='column'
      alignItems='center'
      jContent='center'
      marginTop={151}
    >
      <img src='./assets/image/cat-main.png' alt='Main cat' />
      <TitlePage align='center' marginTop={54}>
        Welcome to our site!
      </TitlePage>
    </Flex>
  );
};

export default Main;
