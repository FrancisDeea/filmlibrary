import "server-only";
import { getCategoriesResponse, getMoviesResponse } from "./definitions";

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
