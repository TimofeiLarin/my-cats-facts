import React from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  CardFact,
  Flex,
  Grid,
  Limitations,
  Pagination,
  TitlePage,
  Wrapper,
} from '../../components';

import { Fact, Link } from '../../types';
import { FetchFactsHandler, mapLinks } from './utils';

const ListOfFacts: React.FC = () => {
  const [posts, setPosts] = React.useState<Fact[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [links, setLinks] = React.useState<Link[]>([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  let [searchParams, setSearchParams] = useSearchParams();

  let pageSearchParams = searchParams.get('page');

  React.useEffect(() => {
    if (pageSearchParams && pageSearchParams !== page.toString()) {
      setPage(parseInt(pageSearchParams));
    }
  }, []);

  React.useEffect(() => {
    setSearchParams({ page: page.toString() });
  }, [page]);

  React.useEffect(() => {
    setLoading(true);
    FetchFactsHandler({
      params: {
        limit,
        page,
      },
      resolve: ({ links, data, last_page }) => {
        setPosts(data);
        setLoading(false);
        setLinks(mapLinks(links, page, last_page));
      },
    });
  }, [page, limit]);

  const onClickPagination = (name: string) => {
    if (name === 'Next') {
      return setPage((prev) => prev + 1);
    }
    if (name === 'Previous') {
      return setPage((prev) => prev - 1);
    }
    if (!isNaN(parseInt(name))) {
      setPage(parseInt(name));
    }
  };

  const onClickLimit = (limit: number) => {
    setLimit(limit);
  };

  return (
    <Flex jContent='center' marginTop={55}>
      <Wrapper>
        <TitlePage align='start' alignList>List of facts</TitlePage>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Grid>
              {posts.map(({ fact }, index) => (
                <CardFact key={index} text={fact} />
              ))}
            </Grid>
          </>
        )}
        <Flex jContent='space-between' wrap marginTop={59} marginBottom={150} >
          <Flex wrap jContent='center'>
            {links.map(({ label, active }, index) => (
              <Pagination
                onClickPage={onClickPagination}
                key={`${label}_${index}`}
                name={label}
                active={active}
              />
            ))}
          </Flex>
          <Limitations limitItem={limit} choiceLimit={onClickLimit} />
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default ListOfFacts;
