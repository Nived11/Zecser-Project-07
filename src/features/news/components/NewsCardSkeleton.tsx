import { Skeleton } from "../../../components/ui/skeleton";

const NewsCardSkeleton = () => {
  return (
    <div className="border rounded-md shadow-md p-4 bg-white w-full">
      <Skeleton className="w-full h-40 rounded" />
      <Skeleton className="h-6 w-3/4 mt-3" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-24 mt-3" />
    </div>
  );
};

export default NewsCardSkeleton;
