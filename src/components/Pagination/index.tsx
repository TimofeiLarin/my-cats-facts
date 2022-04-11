import React, { FC } from 'react';
import Flex from '../Flex';
import { ButtonPagination } from './Pagination.style';

interface PaginationProp {
  name: string;
  active: boolean;
}

const Pagination: FC<PaginationProp> = ({ name, active }) => {
  return (
    <ButtonPagination active={active}>
      {name === 'Previous' ? (
        <Flex jContent='center' alignItems='center'>
          <img src='./assets/icons/Prev.svg' alt='Arrow prev' />
        </Flex>
      ) : name === 'Next' ? (
        <Flex jContent='center' alignItems='center'>
          <img src='./assets/icons/Next.svg' alt='Arrow next' />
        </Flex>
      ) : (
        name
      )}
    </ButtonPagination>
  );
};

export default Pagination;
