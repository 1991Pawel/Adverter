import { combineReducers } from 'redux';
import { filterReducer as filter } from './filter.reducer';
import { advertReducer as adverts } from './advert.reducer';

export const rootReducer = combineReducers({
  adverts,
  filter,
});

export type AppState = ReturnType<typeof rootReducer>;
