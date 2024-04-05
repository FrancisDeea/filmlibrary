import GenreCard from "./GenreCard";
import { Genre } from "@/lib/definitions";

export function GenreList({ list }: { list: Genre[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 h-full overflow-y-scroll max-sm:pb-28">
      {list.map((genre) => {
        return <GenreCard key={genre.id} id={genre.id} name={genre.name} />;
      })}
    </div>
  );
}
