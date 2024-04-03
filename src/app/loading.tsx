import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";

export default function Loading() {

    return (
        <div className="overflow-scroll h-full flex flex-wrap justify-center items-center gap-5 p-4 pb-12">
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
        </div>
    )
}