import axios from 'axios';
import React, { useState } from 'react';
import {
  CardFact,
  Flex,
  Grid,
  Pagination,
  TitlePage,
  Wrapper,
} from '../../components';

interface IFetchFact {
  fact: string;
  length?: number;
}

const ListOfFacts: React.FC = () => {
  const [posts, setPosts] = useState<IFetchFact[]>([]);
  const [links, setLinks] = useState([]);
  const [page, setPage] = useState(12);
  const [limit, setLimit] = useState(12);

  React.useEffect(() => {
    axios
      .get(`https://catfact.ninja/facts?limit=${limit}&page=${page}`)
      .then(
        ({ data }) => (
          console.log(data), setPosts(data.data), setLinks(data.links)
        )
      );
  }, [page, limit]);

  console.log(links);

  // const clickPogination = (name) => {
  //   if(name === 'Next'){
  //     setPage(page - 1);
  //   }  else if(name === 'Next') {

  //   }
  //   setPage(name)
  // }
  return (
    <Flex jContent='center' marginTop={55}>
      <Wrapper>
        <TitlePage align='start'>List of facts</TitlePage>
        <Grid>
          {posts.map(({ fact }, index) => (
            <CardFact key={index} text={fact} />
          ))}
        </Grid>
        <Flex marginTop={59}>
          {links.map(({ label, active }) => (
            <Pagination
              key={label}
              name={label}
              active={active}
            />
          ))}
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default ListOfFacts;
