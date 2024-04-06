import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";

export default function Loading() {
  return (
    <div className="p-4 flex flex-wrap gap-2 overflow-scroll h-full">
      <div className="flex-1 basis-2/3 p-4 rounded-xl bg-gray-300 animate-pulse dark:bg-gray-700"></div>
      <div className="flex-1 basis-96 aspect-square p-4 rounded-xl bg-gray-300 animate-pulse dark:bg-gray-700"></div>
      <div className="flex-1 basis-2/3 p-4 rounded-xl bg-gray-300 animate-pulse dark:bg-gray-700"></div>
    </div>
  );
}
