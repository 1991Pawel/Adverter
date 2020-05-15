import Advert from './adverts';
import { Id } from './id';

export const ADD_ADVERT = 'ADD_ADVERT';
export const REMOVE_ADVERT = 'REMOVE_ADVERT';
export const SEARCH_TEXT = 'SEARCH_TEXT';

export type AddAdvert = {
  type: typeof ADD_ADVERT;
  payload: Advert;
};

export type RemoveAdvert = {
  type: typeof REMOVE_ADVERT;
  id: Id;
};
export type SearchText = {
  type: typeof SEARCH_TEXT;
  text: string;
};

export type AdvertsActionTypes = AddAdvert | RemoveAdvert | SearchText;
export type AppActions = AdvertsActionTypes;
