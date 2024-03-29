import "server-only";
import { getCategoriesResponse, getMoviesResponse } from "./definitions";

const urlBase = "https://advanced-movie-search.p.rapidapi.com/discover/movie";
const urlCategories =
  "https://advanced-movie-search.p.rapidapi.com/genre/movie/list";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.API_KEY as string,
    "X-RapidAPI-Host": process.env.API_HOST as string,
  },
};

export async function getMovies(
  genre: string | null = null,
  page: string | undefined = "1"
): Promise<getMoviesResponse> {
  let api;
  genre
    ? (api = urlBase + `?with_genres=${genre}` + `&page=${page}`)
    : (api = urlBase + `?page=${page}`);
  console.log(api)
  try {
    const response = await fetch(api, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const result: getMoviesResponse = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching movies: ${error}`);
  }
}

export async function getCategories(): Promise<getCategoriesResponse> {
  try {
    const response = await fetch(urlCategories, options);
    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.status}`);
    }
    const result: getCategoriesResponse = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching categories: ${error}`);
  }
}
