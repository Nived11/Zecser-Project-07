import { Skeleton } from "../../../components/ui/skeleton";

const NewsDetailSkeleton = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <Skeleton className="h-9 w-32 rounded" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="md:col-span-2 bg-white shadow-md rounded-md p-6">
          <Skeleton className="w-full h-80 rounded-md" />
          <Skeleton className="h-8 w-3/4 mt-4" />
          <div className="mt-4 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[95%]" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[85%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 h-fit">
          <Skeleton className="h-6 w-32 mb-4" />
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Skeleton className="w-16 h-16 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailSkeleton;
