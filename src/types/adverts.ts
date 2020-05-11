import { Id } from './id';

type Advert = {
  title: string;
  image: string;
  id: Id | string;
  price: number | string;
  size: string;
  link: string;
};

export default Advert;
