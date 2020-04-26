import axios from 'axios';

export const RESET_MOVIE = 'RESET_MOVIE';
export const FETCHING_MOVIE = 'FETCHING_MOVIE';
export const FETCHED_MOVIE = 'FETCHED_MOVIE';

const BASE_URL = process.env.REACT_APP_MOVIE_API;

const resetMovie = () => ({ type: RESET_MOVIE });

const fetchingMovie = () => ({
  type: FETCHING_MOVIE,
});

const fetchedMovie = (response) => ({
  type: FETCHED_MOVIE,
  payload: response,
});

export const fetchMovie = () => async (dispatch) => {
  dispatch(fetchingMovie());

  try {
    const response = await axios.get(BASE_URL);
    dispatch(fetchedMovie(response.data));
  } catch (err) {
    dispatch(resetMovie());
    console.log(err.message);
  }
};
