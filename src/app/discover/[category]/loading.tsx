import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";

export default function Loading() {
  const skeletons = Array.from({ length: 20 }, (_, index) => (
    <MovieCardSkeleton key={index} />
  ));
  return (
    <div className="overflow-scroll h-full flex flex-wrap justify-center items-center gap-5 p-4 pb-12">
      {skeletons}
    </div>
  );
}
