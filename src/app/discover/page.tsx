import GenreCard from "@/components/GenreCard";
import { getCategories } from "@/lib/data";

export default async function Discover() {
  const { genres } = await getCategories();
  const categoriesRemoved = ["TV Movie", "Western", "Music"];
  return (
    <div className="grid grid-cols-4 gap-4 h-full overflow-scroll pb-16 max-sm:pb-[180px]">
      {genres
        .filter((genre) => !categoriesRemoved.includes(genre.name))
        .map((genre) => {
          return <GenreCard key={genre.id} id={genre.id} name={genre.name} />;
        })}
    </div>
  );
}
