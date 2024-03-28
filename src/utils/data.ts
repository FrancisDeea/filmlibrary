import "server-only";
import { getMoviesResponse } from "./definitions";

const urlBase =
  "https://advanced-movie-search.p.rapidapi.com/discover/movie?page=";
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
  page: number = 12
): Promise<getMoviesResponse> {
  const genreParam = genre ? `&with_genres=${genre}` : null;
  const api = urlBase + page + genreParam;
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
