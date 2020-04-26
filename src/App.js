import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header.component';
import MovieCollection from './components/MovieCollection.component';
import { useDispatch } from 'react-redux';
import { fetchMovie } from './actions/movieAction';
import MovieDetail from './components/MovieDetail.component';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <Route path="/" exact component={MovieCollection} />
        <Route path="/movie/:movieName" component={MovieDetail} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
