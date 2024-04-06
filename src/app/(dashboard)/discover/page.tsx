import { GenreList } from "@/components/GenreList";
import { getCategories } from "@/lib/data";

export default async function Discover() {
  const { genres } = await getCategories();
  console.log(genres)
  const categoriesRemoved = ["TV Movie", "Western", "Music"];
  const filteredGenres = genres.filter((genre) => !categoriesRemoved.includes(genre.name))
  return (
    <div className="h-full">
      <GenreList list={filteredGenres} />
    </div>
  );
}
