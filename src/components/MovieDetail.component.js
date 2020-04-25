import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { imageSrc } from '../constants/defaultImageSrc';

const MovieDetail = () => {
  let history = useHistory();
  const { state } = history.location;

  const movie = state.details;
  const MovieDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ShortDescription = styled(Card)`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  `;

  return (
    <MovieDetailContainer>
      <Button variant="primary" onClick={() => history.push('/')}>
        Back to Home
      </Button>
      <ShortDescription>
        <Card.Img
          variant="top"
          src={imageSrc}
          data-src={movie.image}
          alt={movie.name}
          style={{ width: '28rem' }}
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
  );
};

export default MovieDetail;
