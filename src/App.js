import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.component';
import MovieCollection from './components/MovieCollection.component';
import { useDispatch } from 'react-redux';
import { fetchMovie } from './actions/movieAction';
import MovieDetail from './components/MovieDetail.component';

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
