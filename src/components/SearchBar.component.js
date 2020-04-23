import React from 'react';
import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <InputGroup className="mb-3 mr-3">
        <FormControl placeholder="Start to search..." aria-label="Search" />
      </InputGroup>
      <DropdownButton className="mr-3" title="Year">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <DropdownButton title="Genre">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
