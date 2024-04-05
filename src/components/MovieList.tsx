"use client";

import type { Movie } from "@/lib/definitions";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

import { useRef } from "react";

export default function MovieList({
  list,
  totalPages,
}: {
  list: Movie[];
  totalPages: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={scrollerRef}
      className="overflow-y-scroll h-full ct-flex-row flex-wrap"
    >
      {list.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
      <Pagination totalPages={totalPages} scroller={scrollerRef} />
    </div>
  );
}
