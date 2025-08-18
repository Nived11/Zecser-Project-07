import { Link  } from "react-router-dom";
import ErrorMessage from "../../../components/common/ErrorMessage";
import { useUnits } from "../hooks/useUnits";
import defaultImage from "../../../assets/images/learning1.png";
import UnitCardSkeleton from "./UnitsCardSkeleton";

const UnitsOverview = () => {
  const { data, error, isLoading, refetch, classNo, subject } = useUnits();

  if (error)
    return (
      <div className="max-w-5xl mx-auto mt-5">
        <ErrorMessage
          message="Failed to load units. Please try again."
          onRetry={() => refetch()}
        />
      </div>
    );

  const renderItems =
    !isLoading &&
    !error && (data?.length > 0 ?
    data?.map((unit, index) => (
      <Link
        key={unit?.number || index}
        to={`/learning?class=${classNo}&subject=${subject}&unit=${unit?.number}`}
        className="relative overflow-hidden rounded aspect-square shadow-md hover:scale-[1.02] transition-transform duration-300 flex justify-center flex-col"
      >
        <img
          src={unit?.image || defaultImage}
          loading="lazy"
          decoding="async"
          alt={unit?.title || "Unit Thumbnail"}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 py-5 text-center text-white text-lg md:text-xl font-semibold bg-white/30">
          <p>Unit : {unit.number}</p>
          <p>{unit?.title}</p>
        </div>
      </Link>
    ) ):<p className="text-center mt-6 text-gray-600">No results found.</p>)

  const renderLoading =
    isLoading &&
    Array.from({ length: 5 }).map((_, i) => <UnitCardSkeleton key={i} />);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] p-[20px] sm:p-[30px] max-w-5xl mx-auto `}
    >
      {renderLoading}
      {renderItems}
    </div>
  );
};

export default UnitsOverview;
