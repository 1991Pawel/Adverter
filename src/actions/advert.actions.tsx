import Advert from '../types/adverts';
import { Id } from '../types/id';
import { AppActions, ADD_ADVERT, REMOVE_ADVERT } from '../types/actions';

export const addAdvert = (payload: Advert): AppActions => ({
  type: ADD_ADVERT,
  payload,
});

export const RemoveAdvert = (id: Id): AppActions => ({
  type: REMOVE_ADVERT,
  id,
});

export type Actions = ReturnType<typeof addAdvert>;
