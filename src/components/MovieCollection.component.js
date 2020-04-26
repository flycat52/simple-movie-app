import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar.component';
import Collection from './Collection.component';

const MovieCollection = () => {
  const movieCollection = useSelector((state) => state.movies.results);
  const searchResult = useSelector((state) => state.search.results);

  let movieData = [];
  if (searchResult.length > 0) {
    movieData = searchResult;
  } else {
    movieData = movieCollection;
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
