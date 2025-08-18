import { Skeleton } from "../../../../components/ui/skeleton";

const NewsCardSkeleton = () => {
  return (
    <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <Skeleton className="w-32 h-32 rounded-md" />

      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-3/4" />

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />

        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 w-16 rounded-md" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
