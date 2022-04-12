import React from 'react';

import Flex from '../Flex';
import { ButtonPagination } from './Pagination.style';

type PaginationProp = {
  name: string;
  active: boolean;
  onClickPage: (name: string) => void
}

const Pagination: React.FC<PaginationProp> = ({ name, active, onClickPage }) => {

  const onClickHandler = React.useCallback(() => {
    onClickPage(name)
  }, [onClickPage, name])
  return (
    <ButtonPagination active={active} onClick={onClickHandler}>
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
