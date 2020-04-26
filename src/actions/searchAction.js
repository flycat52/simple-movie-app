export const RESET_DATA = 'RESET_DATA';
export const SEARCHING_DATA = 'SEARCHING_DATA';
export const SEARCHED_DATA = 'SEARCHED_DATA';

const resetData = () => ({ type: RESET_DATA });

const searchingData = () => ({
  type: SEARCHING_DATA,
});

const searchedData = (response, query) => ({
  type: SEARCHED_DATA,
  payload: response,
  query,
});

export const searchData = (movies, query) => async (dispatch) => {
  dispatch(searchingData());

  try {
    const response = movies.filter(
      (movie) =>
        movie.productionYear.toString().indexOf(query.productionYear) !== -1 &&
        movie.genre.indexOf(query.genre) !== -1
    );
    dispatch(searchedData(response, query));
  } catch (err) {
    dispatch(resetData());
    console.log(err.message);
  }
};
