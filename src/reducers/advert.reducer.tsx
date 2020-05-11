import Advert from '../types/adverts';
import { AdvertsActionTypes } from '../types/actions';

const initState: Advert[] = [
  {
    id: '1',
    title: 'Piękna w pełni umeblowana Willa Parkowa pomorskie',
    price: 1490000,
    size: '222',
    link:
      'https://www.otodom.pl/oferta/piekna-w-pelni-umeblowana-willa-parkowa-pomorskie-ID45A5Y.html',
    image:
      'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImIwMzc3dGl3ejE1MTMtQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.XrmdEW2Mfv8dotEG0bS1AFj68FAgXLvUay8RRMZqOIA/image;s=1280x1024;q=80',
  },
];

export const advertReducer = (
  state = initState,
  action: AdvertsActionTypes
): Advert[] => {
  switch (action.type) {
    case 'ADD_ADVERT':
      return [...state, action.payload];
    case 'REMOVE_ADVERT':
      return [...state.filter((item) => item.id !== action.id)];
    default:
      return state;
  }
};
