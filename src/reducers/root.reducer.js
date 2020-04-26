import { combineReducers } from 'redux';
import movieReducer from './movie.reducer';
import searchReducer from './search.reducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  search: searchReducer,
});

export default rootReducer;
