import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";

export default function Loading() {
  const skeletons = Array.from({ length: 20 }, (_, index) => {
    return (
      <div
        key={index}
        className="min-h-24 max-lg:col-span-2 rounded-xl bg-gray-300 dark:bg-gray-700 animate-pulse"
      ></div>
    );
  });
  return (
    <div className="grid grid-cols-4 gap-4 p-4 h-full overflow-scroll">
      {skeletons}
    </div>
  );
}
