import { createStore } from 'redux';
import { rootReducer, AppState } from '../reducers/root.reducer';

const saveToLocalStorage = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
