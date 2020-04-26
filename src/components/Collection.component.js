import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { imageSrc } from '../constants/defaultImageSrc';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const CollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

const Collection = ({ data }) => {
  let history = useHistory();

  return data.length > 0 ? (
    <CollectionContainer>
      {data.map((movie, index) => (
        <Card style={{ width: '21rem' }} key={index} className="m-1">
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
    </CollectionContainer>
  ) : (
    <p>No data found.</p>
  );
};

export default Collection;
