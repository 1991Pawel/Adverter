import { AdvertsActionTypes, SEARCH_TEXT } from '../types/actions';

const initialState = {
  searchText: '',
};

export const filterReducer = (
  state = initialState,
  action: AdvertsActionTypes
) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return { ...state, searchText: action.text };
    default:
      return state;
  }
};
