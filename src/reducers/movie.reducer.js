import { FETCHING_MOVIE, FETCHED_MOVIE } from '../actions/movie.action';

const initialState = {
  busy: false,
  results: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIE:
      return {
        ...state,
        busy: true,
      };
    case FETCHED_MOVIE:
      return {
        ...state,
        results: [...action.payload],
        busy: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
