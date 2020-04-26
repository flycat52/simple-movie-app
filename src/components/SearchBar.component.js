import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { searchData } from '../actions/searchAction';
import Selection from './Selection.component';
import Button from './Button.component';

const SearchBarContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
`;

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);

  const [query, setQuery] = useState(searchQuery);

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

  const searchMovie = () => {
    debounceSearch(query);
  };

  return (
    <SearchBarContainer>
      <Selection
        options={productionYears}
        value={query.productionYear}
        label={'Select Year'}
        onChange={(e) => {
          e.preventDefault();
          setQuery({ ...query, productionYear: e.target.value });
        }}
      />
      <Selection
        options={genres}
        value={query.genre}
        label={'Select Genre'}
        onChange={(e) => {
          e.preventDefault();
          setQuery({ ...query, genre: e.target.value });
        }}
      />

      <Button onClick={searchMovie} primary>
        Search
      </Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
