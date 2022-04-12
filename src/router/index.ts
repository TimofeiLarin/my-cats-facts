import { ListOfFacts, Main, RandomFact } from '../pages';

type Route = {
  path: string;
  component: React.ComponentType;
}

export enum RoutesNames {
  MAIN = '/',
  LIST = '/list-of-facts',
  RANDOM = '/random-fact',
}

export const publicRoutes: Route[] = [
  { path: RoutesNames.MAIN, component: Main },
  { path: RoutesNames.LIST, component: ListOfFacts },
  { path: RoutesNames.RANDOM, component: RandomFact },
];
