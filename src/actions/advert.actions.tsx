import Advert from '../types/adverts';
import { AppActions } from '../types/actions';

export const addAdvert = (payload: Advert): AppActions => ({
  type: 'ADD_ADVERT',
  payload,
});

export const RemoveAdvert = (id: number): AppActions => ({
  type: 'REMOVE_ADVERT',
  id,
});

export type Actions = ReturnType<typeof addAdvert>;
