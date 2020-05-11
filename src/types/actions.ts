import Advert from './adverts';
import { Id } from './id';

export const ADD_ADVERT = 'ADD_ADVERT';
export const REMOVE_ADVERT = 'REMOVE_ADVERT';

export type AddAdvert = {
  type: typeof ADD_ADVERT;
  payload: Advert;
};

export type RemoveAdvert = {
  type: typeof REMOVE_ADVERT;
  id: Id;
};

export type AdvertsActionTypes = AddAdvert | RemoveAdvert;
export type AppActions = AdvertsActionTypes;
