import { Skeleton } from "../../../components/ui/skeleton";

const UnitCardSkeleton = () => {
  return (
    <div
      className="relative overflow-hidden rounded aspect-square shadow-md flex justify-center flex-col"
    >
      <Skeleton className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 py-5 text-center text-white text-lg md:text-xl font-semibold bg-white/20">
        <Skeleton className="h-5 w-1/3 mx-auto mb-2" />
        <Skeleton className="h-5 w-2/3 mx-auto" />
      </div>
    </div>
  );
};

export default UnitCardSkeleton;
