import React from 'react';
import { imageSrc } from '../constants/defaultImageSrc';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Colors from '../constants/Colors';

const CollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

export const Card = styled.div`
  margin: 0.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${Colors.white};
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const Img = styled.img`
  color: #212529;
  width: 286px;
  height: 180px;
  vertical-align: middle;
`;

const Link = styled.a`
  cursor: pointer;

  &:hover {
    background-color: ${Colors.lightGrey};
  }
`;

const Body = styled.div`
  width: 286px;
  height: 202px;
  padding: 20px;
`;

export const Info = styled.div`
  margin-top: 2rem;
`;

const Collection = ({ data }) => {
  let history = useHistory();

  return data.length > 0 ? (
    <CollectionContainer>
      {data.map((movie, index) => (
        <Card key={index}>
          <Img src={imageSrc} data-src={movie.image} alt={movie.name} />
          <Link
            onClick={() =>
              history.push(
                `/movie/${movie.name.toLowerCase().split(' ').join('-')}`,
                {
                  details: movie,
                }
              )
            }
          >
            <Body>
              <h2>{movie.name}</h2>
              <Info>
                <label>
                  <b>Year</b>: {movie.productionYear}
                </label>
                <br />
                <label>
                  <b>Genre</b>: {movie.genre}
                </label>
              </Info>
            </Body>
          </Link>
        </Card>
      ))}
    </CollectionContainer>
  ) : (
    <p>No data found.</p>
  );
};

export default Collection;
