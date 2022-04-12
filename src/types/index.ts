export type Fact = {
  fact: string;
  length: number;
};

export type Link = {
  url: string | null;
  label: string;
  active: boolean;
};

export type FetchFacts = {
  current_page: number;
  data: Fact[];
  last_page: number;
  total: number;
  per_page: number;
  links: Link[];
};
