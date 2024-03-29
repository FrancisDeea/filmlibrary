export interface LinkButton {
    link: string;
    value: string;
    position?: string;
}

export interface getMoviesResponse {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
  }
  
  export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }

export interface MovieCard {
  title: string
  year: string
  rating: number
  poster_path: string
  genre: string
}

export type Categories = Record<number, string>

export interface getCategoriesResponse {
  genres: Genre[]
}

export interface Genre {
  id: number
  name: string
}

  