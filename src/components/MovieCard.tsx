import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Movie } from "../types/index";

interface MovieCardProps {
  movie: Movie;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  width: 220px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: white;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0 0 4px;
`;

const Provider = styled.p`
  font-size: 0.85rem;
  color: #555;
  margin: 0 0 6px;
`;

const Views = styled.p`
  font-size: 0.85rem;
  color: green;
  margin: 0 0 4px;
`;

const Duration = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin: 0;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { name, videoImage, provider, totalViews, duration } = movie;

  const durationMinutes = Math.round(duration / 60);

  return (
    <StyledLink to={`/movies/${encodeURIComponent(name)}`}>
      <Card>
        <Poster src={videoImage} alt={name} />
        <Info>
          <Title>{name}</Title>
          <Provider>{provider}</Provider>
          <Views>
            {totalViews.total.toLocaleString()} views
          </Views>
          <Duration>{durationMinutes} mins</Duration>
        </Info>
      </Card>
    </StyledLink>
  );
};

export default MovieCard;