import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";

export default function Loading() {
  const skeletons = Array.from({ length: 20 }, (_, index) => (
    <MovieCardSkeleton key={index} />
  ));
  return (
    <div className="h-full">
      <div className="overflow-y-scroll h-full ct-flex-row flex-wrap">
        {skeletons}
      </div>
    </div>
  );
}
