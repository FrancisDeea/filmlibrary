// import "server-only";
import { getCategoriesResponse, getMoviesResponse } from "./definitions";
import { categoryDictionary } from "./utils";

const apiCategories =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";
const apiBase =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&with_release_type=1";
const apiSearch =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US";

const apiTopMovies =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=vote_average.desc&vote_count.gte=3000&with_release_type=1";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${process.env.API_MOVIE_TOKEN}`,
    accept: "application/json",
  },
};

export async function getMovies(
  genre: string | null = null,
  page: string | undefined = "1"
): Promise<getMoviesResponse> {
  let api;
  genre
    ? (api = apiBase + `&with_genres=${genre}` + `&page=${page}`)
    : (api = apiBase + `&page=${page}`);
  try {
    const response = await fetch(api, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const result: getMoviesResponse = await response.json();
    if (genre) {
      result.genre = categoryDictionary[Number(genre)];
    }
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching movies: ${error}`);
  }
}

export async function getCategories(): Promise<getCategoriesResponse> {
  try {
    const response = await fetch(apiCategories, options);
    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.status}`);
    }
    const result: getCategoriesResponse = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching categories: ${error}`);
  }
}

export async function getTopMovies(year: number = 2024) {
  const range = `&primary_release_date.gte=${year}-01-31&primary_release_date.lte=${year}-12-31`;
  const api = apiTopMovies + range;
  try {
    const response = await fetch(api, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const result: getMoviesResponse = await response.json();
    const movies = result?.results.slice(0, 10);
    const chartData = movies?.map((movie) => {
      return { title: movie.title, votes: movie.vote_count };
    });
    return chartData;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching movies: ${error}`);
  }
}

export async function getMovieBySearch(
  query: string,
  page: string = "1"
): Promise<getMoviesResponse> {
  const queryParam = `&query=${encodeURIComponent(query)}`;
  const pageParam = `&page=${page}`;
  const api = apiSearch + queryParam + pageParam;
  try {
    const response = await fetch(api, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const result: getMoviesResponse = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching movies: ${error}`);
  }
}
