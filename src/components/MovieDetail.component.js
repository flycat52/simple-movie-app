import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { imageSrc } from '../constants/defaultImageSrc';
import Button from './Button';

const MovieDetail = () => {
  let history = useHistory();
  const { state } = history.location;

  const movie = state && state.details;

  const MovieDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ShortDescription = styled(Card)`
    display: flex;
    flex-direction: row !important;
    margin-bottom: 20px;
  `;

  return (
    <>
      <Button primary>Back to Home</Button>
      {movie ? (
        <MovieDetailContainer>
          <ShortDescription>
            <Card.Img
              variant="left"
              src={imageSrc}
              data-src={movie.image}
              alt={movie.name}
            />
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text className={'mb-0'}>
                <b>Year</b>: {movie.productionYear}
              </Card.Text>
              <Card.Text className={'mb-0'}>
                <b>Genre</b>: {movie.genre}
              </Card.Text>
              <Card.Text className={'mb-0'}>
                <b>Overview</b>
              </Card.Text>
              <Card.Text>{movie.synopsisShort}</Card.Text>
            </Card.Body>
          </ShortDescription>
          <Card>
            <Card.Body>
              <Card.Title>Synopsis</Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{ __html: movie.synopsis }}
              ></Card.Text>
            </Card.Body>
          </Card>
        </MovieDetailContainer>
      ) : (
        <p>No data found.</p>
      )}
    </>
  );
};

export default MovieDetail;
