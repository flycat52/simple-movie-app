import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { imageSrc } from '../constants/defaultImageSrc';
import Button from './Button.component';
import { Card, Info } from './Collection.component';

const Body = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
`;

const MovieDetail = () => {
  let history = useHistory();
  const { state } = history.location;

  const movie = state && state.details;

  return (
    <>
      <Button primary onClick={() => history.push('/')}>
        Back to Home
      </Button>
      {movie ? (
        <MovieDetailContainer>
          <Card>
            <Img src={imageSrc} data-src={movie.image} alt={movie.name} />
            <Body>
              <h2>{movie.name}</h2>
              <Info>
                <b>Year</b>: {movie.productionYear}
                <br />
                <b>Genre</b>: {movie.genre}
                <br />
                <b>Overview</b>
                <br />
                {movie.synopsisShort}
              </Info>
            </Body>
          </Card>
          <Card>
            <Body>
              <h2>Synopsis</h2>
              <label
                dangerouslySetInnerHTML={{ __html: movie.synopsis }}
              ></label>
            </Body>
          </Card>
        </MovieDetailContainer>
      ) : (
        <p>No data found.</p>
      )}
    </>
  );
};

export default MovieDetail;
