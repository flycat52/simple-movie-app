import React, { useState, useCallback, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { searchData } from '../actions/search.action';

const SearchBarContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;

const Selection = styled.select`
  cursor: pointer;
  width: 100%;
  line-height: 24px;
`;

const SearchBar = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState({
    productionYear: '',
    genre: '',
  });

  const movieCollection = useSelector((state) => state.movies.results);
  const productionYears = [
    ...new Set(
      movieCollection
        .map((movie) => movie.productionYear)
        .sort()
        .reverse()
    ),
  ];

  const genres = [
    ...new Set(movieCollection.map((movie) => movie.genre).sort()),
  ];

  const debounceSearch = useCallback(
    debounce((query) => {
      dispatch(searchData(movieCollection, query));
    }, 800),
    []
  );

  const yearMapping = productionYears && (
    <Selection
      value={query.productionYear}
      onChange={(e) => setQuery({ ...query, productionYear: e.target.value })}
    >
      <option value="">Select Year</option>
      {productionYears.map((year, index) => (
        <option key={index} value={year}>
          {year}
        </option>
      ))}
    </Selection>
  );
  const genreMapping = genres && (
    <Selection
      value={query.genre}
      onChange={(e) => setQuery({ ...query, genre: e.target.value })}
    >
      <option value="">Select Genre</option>
      {genres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </Selection>
  );

  const searchMovie = () => {
    console.log('start searching...');
    debounceSearch(query);
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <SearchBarContainer>
      {yearMapping}
      {genreMapping}
      <Button onClick={searchMovie}>Search</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
