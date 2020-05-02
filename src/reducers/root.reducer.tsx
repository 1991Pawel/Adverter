import { combineReducers } from 'redux';
import { advertReducer as adverts } from './advert.reducer';

export const rootReducer = combineReducers({
  adverts,
});

export type AppState = ReturnType<typeof rootReducer>;
