import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Movie } from "../types/index";

interface Props {
  movie: Movie;
}

const PosterCard = styled.div`
  width: 200px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 140px;
  }

  img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const MoviePosterCard: React.FC<Props> = ({ movie }) => {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.name)}`}>
      <PosterCard>
        <img src={movie.videoImage} alt={movie.name} loading="lazy" />
      </PosterCard>
    </Link>
  );
};

export default MoviePosterCard;