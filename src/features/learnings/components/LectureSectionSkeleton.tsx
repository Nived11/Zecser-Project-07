import { Skeleton } from "../../../components/ui/skeleton";

const LectureSectionSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Skeleton className="h-6 w-48 mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />

      <div className="grid gap-6">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="border flex items-start sm:items-center rounded-lg shadow p-2 overflow-hidden"
          >
            <Skeleton className="aspect-square w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded shrink-0" />

            <div className="p-3 flex-1 space-y-2 overflow-hidden">
              <Skeleton className="h-4 w-full max-w-[80%]" />
              <Skeleton className="h-4 w-full max-w-[90%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LectureSectionSkeleton;
