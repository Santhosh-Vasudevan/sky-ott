import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MovieCard from "../components/MovieCard";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { fetchMovies } from "../services/api";

import { Movie } from "../types/index";

const Container = styled.div`
  padding: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  select {
    padding: 6px 10px;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
`;

const SearchBar = styled.div`
  input {
    width: 100%;
    max-width: 400px;
    padding: 8px 12px;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;

    &:focus {
      border-color: #0070f3;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const NoResults = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-top: 20px;
`;

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const allGenres = Array.from(new Set(movies.flatMap((movie) => movie.genre))).sort();

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  if (error) return <p>{error}</p>;

  return (
    <Layout>
      {loading ?
        <Loader /> :
        <Container>
          <h1>Movies</h1>
          <FilterContainer>
            <SearchBar>
              <input
                name="search"
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBar>
            <div>
              <label>Filter by Genre: </label>
              <select
                id="genre"
                name="genre"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="All">All</option>
                {allGenres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

          </FilterContainer>

          {filteredMovies.length === 0 ? (
            <NoResults>No movies found.</NoResults>
          ) : (
            <Grid>
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.name} movie={movie} />
              ))}
            </Grid>
          )}
        </Container>}
    </Layout>
  );
};

export default MoviesPage;