import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../../components/common/ErrorMessage";
import defaultImage from "../../../assets/images/learning1.png";
import { useChapters } from "../hooks/useChapters";
import { ChapterCardSkeleton } from "./ChapterCardSkeleton";

const ChaptersOverview = () => {
  const { data, error, isLoading, refetch, classNo, subject, unit } =
    useChapters();

  const navigate = useNavigate();

  if (error)
    return (
      <div className="max-w-4xl mx-auto mt-5">
        <ErrorMessage
          message="Failed to load chapters. Please try again."
          onRetry={() => refetch()}
        />
      </div>
    );

  const renderItems =
    !isLoading &&
    !error && (data?.length > 0 ? 
    data?.map((chapter, index) => (
      <div key={index} className="text-center space-y-2">
        <p className="text-lg font-semibold">Chapter : {chapter?.number}</p>
        <p className="text-2xl font-semibold">{chapter?.title}</p>
        <div
          onClick={() =>
            navigate(
              `/learning?class=${classNo}&subject=${subject}&unit=${unit}&chapter=${chapter?.number}`
            )
          }
          className="rounded overflow-hidden aspect-video cursor-pointer"
        >
          <img
            decoding="async"
            loading="lazy"
            src={chapter?.image || defaultImage}
            alt={chapter?.title}
            className="w-full hover:scale-110 hover:rotate-1 duration-200 ease-in-out"
          />
        </div>
        <p className="mt-4 line-clamp-3">{chapter?.description}</p>
      </div>
    )):<p className="text-center mt-6 text-gray-600">No results found.</p>)

  const renderLoading =
    isLoading &&
    Array.from({ length: 5 }).map((_, i) => <ChapterCardSkeleton key={i} />);

  return (
    <div
      className={`space-y-6 md:space-y-12 p-[20px] sm:p-[30px] max-w-3xl mx-auto `}
    >
      {renderLoading}
      {renderItems}
    </div>
  );
};

export default ChaptersOverview;
