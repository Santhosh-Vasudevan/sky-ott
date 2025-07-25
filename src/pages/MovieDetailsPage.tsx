import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import { fetchMovies } from "../services/api";

import { Movie } from "../types";
import Loader from "../components/Loader";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
`;

const Poster = styled.img`
  max-width: 385px;
  border-radius: 10px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Details = styled.div`
  flex: 1;

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 15px;
`;

const Genres = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const GenreTag = styled.span`
  background: #e0f0ff;
  color: #0070f3;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #0070f3;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const MovieDetailsPage: React.FC = () => {
  const { movieName } = useParams<{ movieName: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      const allMovies = await fetchMovies();
      const matched = allMovies.find(
        (movie) => movie.name.toLowerCase() === decodeURIComponent(movieName || "").toLowerCase()
      );
      setMovie(matched || null);
      setLoading(false);
    };
    loadMovie();
  }, [movieName]);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  if (!movie) {
    return (
      <Layout>
        <h2>Movie not found</h2>
        <Link to="/movies">Go back to Movies</Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <Poster src={movie.videoImage} alt={movie.name} />
        <Details>
          <h1>{movie.name}</h1>
          <p>{movie.description}</p>
          <Info>
            <span>Provider: {movie.provider}</span>
            <span>Duration: {Math.round(movie.duration / 60)} mins</span>
            <span>Total Views: {movie.totalViews.total.toLocaleString()}</span>
          </Info>
          <Genres>
            {movie.genre.map((g) => (
              <GenreTag key={g}>{g}</GenreTag>
            ))}
          </Genres>
          <BackLink to="/movies">Back to Movies</BackLink>
        </Details>
      </Container>
    </Layout>
  );
};

export default MovieDetailsPage;
