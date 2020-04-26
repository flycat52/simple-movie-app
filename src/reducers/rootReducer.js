import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  search: searchReducer,
});

export default rootReducer;
