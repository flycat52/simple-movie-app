import React from 'react';
import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

const SearchBarContainer = styled.div`
  margin: 30px 0;
  display: flex;
`;

const SearchBar = () => {
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

  const yearMapping = productionYears && (
    <DropdownButton className="ml-3" title="Year">
      {productionYears.map((year, index) => (
        <Dropdown.Item key={index}>{year}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
  const genreMapping = genres && (
    <DropdownButton title="Genre" className="ml-3">
      {genres.map((genre, index) => (
        <Dropdown.Item key={index}>{genre}</Dropdown.Item>
      ))}
    </DropdownButton>
  );

  return (
    <SearchBarContainer>
      <InputGroup className="mb-3">
        <FormControl placeholder="Start to search..." aria-label="Search" />
      </InputGroup>
      {yearMapping}
      {genreMapping}
    </SearchBarContainer>
  );
};

export default SearchBar;
