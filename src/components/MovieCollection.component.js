import React from 'react';
import { useSelector } from '../utils/react-redux-hooks';
import SearchBar from './SearchBar.component';
import Collection from './Collection.component';

const MovieCollection = () => {
  const { movies, search } = useSelector((state) => ({
    movies: state.movies.results,
    search: state.search,
  }));

  let movieData = [];
  if (
    search.results.length > 0 ||
    search.query.productionYear !== '' ||
    search.query.genre !== ''
  ) {
    movieData = search.results;
  } else {
    movieData = movies;
  }

  return (
    <>
      <SearchBar />
      {movieData.length > 0 ? (
        <Collection data={movieData} />
      ) : (
        <p>No data found. </p>
      )}
    </>
  );
};

export default MovieCollection;
