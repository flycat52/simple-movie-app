import React from 'react';
import SearchBar from './SearchBar.component';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin: 30px 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Movie Gallery</h1>
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
