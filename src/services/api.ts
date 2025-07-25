import { DataPoint, Movie } from "../types/index";

const API_BASE_URL = "https://my-json-server.typicode.com/alb90";

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/aieng-tech-test-assets/data`);
    if (!response.ok) {
      throw new Error(`Something went wrong`);
    }
    const data: Movie[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchTimeseriesData = async (): Promise<DataPoint[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/aieng-tech-test-timeseries/data`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data: DataPoint[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
