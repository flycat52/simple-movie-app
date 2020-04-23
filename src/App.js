import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.component';
import MovieCollection from './components/MovieCollection.component';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <Route path="/" exact component={MovieCollection} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
