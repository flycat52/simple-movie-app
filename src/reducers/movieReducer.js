import {
  FETCHING_MOVIE,
  FETCHED_MOVIE,
  RESET_MOVIE,
} from '../actions/movieAction';

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
    case RESET_MOVIE:
    default:
      return state;
  }
};

export default movieReducer;
