import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { imageSrc } from '../constants/defaultImageSrc';
import SearchBar from './SearchBar.component';

const MovieCollection = () => {
  let history = useHistory();

  const movieCollection = useSelector((state) => state.movies.results);
  const searchResult = useSelector((state) => state.search.results);
  const movieResults =
    searchResult.length === 0 ? movieCollection : searchResult;

  const MovieCollectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  `;

  return movieCollection.length !== 0 ? (
    <>
      <SearchBar />
      <MovieCollectionContainer>
        {movieResults.map((movie, index) => (
          <Card style={{ width: '22rem' }} key={index} className="m-1">
            <Card.Img
              variant="top"
              src={imageSrc}
              data-src={movie.image}
              alt={movie.name}
            />
            <Button
              variant={'light'}
              onClick={() =>
                history.push(
                  `/movie/${movie.name.toLowerCase().split(' ').join('-')}`,
                  {
                    details: movie,
                  }
                )
              }
            >
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text className="mb-0">
                  <b>Year</b>: {movie.productionYear}
                </Card.Text>
                <Card.Text className="mb-0">
                  <b>Genre</b>: {movie.genre}
                </Card.Text>
              </Card.Body>
            </Button>
          </Card>
        ))}
      </MovieCollectionContainer>
    </>
  ) : (
    <p>The movie collection is currently unavailable.</p>
  );
};

export default MovieCollection;
