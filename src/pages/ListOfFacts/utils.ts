import axios from 'axios';

import { FetchFacts, Link } from '../../types';

type FetchParams = {
  params: {
    limit: number;
    page: number;
  };
  resolve: (data: FetchFacts) => void;
  reject?: (error: any) => void;
};

export const FetchFactsHandler = ({
  params: { limit, page },
  resolve,
  reject,
}: FetchParams) => {
  axios
    .get<FetchFacts>(`https://catfact.ninja/facts?limit=${limit}&page=${page}`)
    .then(({ data }) => {
      resolve(data);
    })
    .catch((e) => {
      if (reject) {
        reject(e);
      }
    });
};

export const mapLinks = (links: Link[], page: number, totalPage: number) => {
  if (page === totalPage) {
    return links.filter((link) => link.label !== 'Next');
  }
  if (page === 1) {
    return links.filter((link) => link.label !== 'Previous');
  }
  return links;
};
