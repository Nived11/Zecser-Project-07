import { Skeleton } from "../../../components/ui/skeleton";

export function ChapterCardSkeleton() {
  return (
    <div className="text-center space-y-2">
      <Skeleton className="mx-auto h-6 w-32" />
      <Skeleton className="mx-auto h-8 w-48" />

      <div className="rounded overflow-hidden aspect-video cursor-pointer">
        <Skeleton className="w-full h-full" />
      </div>

      <Skeleton className="mx-auto mt-4 h-4 w-3/4" />
      <Skeleton className="mx-auto h-4 w-2/3" />
    </div>
  );
}
