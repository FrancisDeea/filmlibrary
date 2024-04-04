// import "server-only";
import { getCategoriesResponse, getMoviesResponse } from "./definitions";
import { categoryDictionary } from "./utils";

// const urlBase = "https://advanced-movie-search.p.rapidapi.com/discover/movie";
// const urlCategories =
//   "https://advanced-movie-search.p.rapidapi.com/genre/movie/list";
// const options = {
//   method: "GET",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": process.env.API_KEY as string,
//     "X-RapidAPI-Host": process.env.API_HOST as string,
//   },
// };

const apiBase = process.env.API_BASE_URL as string;
const apiCategories = process.env.API_CATEGORIES as string;
// const apiTopMovies = process.env.API_TOP_MOVIES as string;
const apiSearch =
  "https://api.themoviedb.org/3/search/movie?api_key=e3a5cf95aad68c554239087d8f183cf4&include_adult=false&language=en-US&page=1";

const apiTopMovies =
  "https://api.themoviedb.org/3/discover/movie?api_key=e3a5cf95aad68c554239087d8f183cf4&include_adult=false&include_video=false&language=en-US&sort_by=vote_average.desc&vote_count.gte=3000&with_release_type=1";

const options = {
  method: "GET",
  headers: {
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

export async function getTopMovies(
  year: number = 2024
): Promise<getMoviesResponse> {
  const range = `&primary_release_date.gte=${year}-01-31&primary_release_date.lte=${year}-12-31`;
  const api = apiTopMovies + range;
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

export async function getMovieBySearch(
  string: string
): Promise<getMoviesResponse> {
  const query = `&query=${encodeURIComponent(string)}`;
  const api = apiSearch + query;
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
