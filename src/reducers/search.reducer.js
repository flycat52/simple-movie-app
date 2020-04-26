const {
  SEARCHING_DATA,
  SEARCHED_DATA,
  RESET_DATA,
} = require('../actions/search.action');

const initialState = {
  busy: false,
  results: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING_DATA:
      return {
        ...state,
        busy: true,
      };
    case SEARCHED_DATA:
      return {
        ...state,
        results: [...action.payload],
        busy: false,
      };
    default:
    case RESET_DATA:
      return state;
  }
};

export default searchReducer;
