import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import MoviePosterCard from "../components/MoviePosterCard";
import Loader from "../components/Loader";
import { fetchMovies } from "../services/api";

import { Movie } from "../types/index";

const HeroSection = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  padding: 40px;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
  }

  p {
    margin-top: 10px;
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const HeroButton = styled(Link) <{ secondary?: boolean }>`
  padding: 10px 16px;
  background-color: ${({ secondary }) => (secondary ? "#555" : "#0070f3")};
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#333" : "#005bb5")};
  }
`;

const SectionTitle = styled.h2`
  margin: 20px;
  font-size: 1.5rem;
`;

const ScrollRow = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 20px;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  const skyDisneyMovies = movies.filter(movie => movie.provider === "Sky Disney");
  const skyCinemaMovies = movies.filter(movie => movie.provider === "Sky Cinema");

  const heroMovie = skyDisneyMovies[0];

  if (loading) return (
    <Layout>
      <Loader />
    </Layout>
  );

  return (
    <Layout>
      {heroMovie && (
        <HeroSection style={{ backgroundImage: `url(${heroMovie.videoImage})` }}>
          <Overlay />
          <HeroContent>
            <h1>{heroMovie.name}</h1>
            <p>{heroMovie.description.slice(0, 150)}...</p>
            <HeroButtons>
              <HeroButton to="/movies">Browse Movies</HeroButton>
              <HeroButton to="/timeseries" secondary>View Dashboard</HeroButton>
            </HeroButtons>
          </HeroContent>
        </HeroSection>
      )}

      <SectionTitle>Sky Disney</SectionTitle>
      <ScrollRow>
        {skyDisneyMovies.map(movie => (
          <MoviePosterCard key={movie.name} movie={movie} />
        ))}
      </ScrollRow>

      <SectionTitle>Sky Cinema</SectionTitle>
      <ScrollRow>
        {skyCinemaMovies.map(movie => (
          <MoviePosterCard key={movie.name} movie={movie} />
        ))}
      </ScrollRow>
    </Layout>
  );
};

export default HomePage;