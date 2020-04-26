import React from 'react';
import { useSelector } from '../utils/react-redux-hooks';
import SearchBar from './SearchBar.component';
import Collection from './Collection.component';

const MovieCollection = () => {
  const { movies, search } = useSelector((state) => ({
    movies: state.movies.results,
    search: state.search.results,
  }));

  let movieData = [];
  if (search.length > 0) {
    movieData = search;
  } else {
    movieData = movies;
  }

  return movieData.length > 0 ? (
    <>
      <SearchBar />
      <Collection data={movieData} />
    </>
  ) : (
    <p>No data found. </p>
  );
};

export default MovieCollection;
