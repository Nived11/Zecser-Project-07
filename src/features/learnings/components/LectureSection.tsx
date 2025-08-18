
import ErrorMessage from "../../../components/common/ErrorMessage";
import { useLectures } from "../hooks/useLectures";
import LectureSectionSkeleton from "./LectureSectionSkeleton";

const LectureSection = () => {
  const { data, isLoading, error, refetch } = useLectures();

  if (isLoading)
    return Array.from({ length: 5 }).map((_, i) => (
      <LectureSectionSkeleton key={i} />
    ));

  if (error)
    return (
      <div className="max-w-5xl mx-auto mt-5">
        <ErrorMessage
          message="Failed to load lectures. Please try again."
          onRetry={() => refetch()}
        />
      </div>
    );
  if (!data) return <p className="text-center mt-6 text-gray-600">No results found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-700 mb-6">{data.description}</p>

      <div className="grid gap-6">
        {data?.videos?.length > 0 ? data.videos.map((video, idx) => (
          <a
            href={video?.link}
            target="_blank"
            key={idx}
            className="border flex items-start sm:items-center h-full rounded-lg shadow hover:shadow-lg transition p-2 overflow-hidden"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="aspect-square w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded object-cover shrink-0"
            />

            <div className="p-3 flex-1 overflow-hidden h-full">
              <h2 className="text-sm md:text-lg font-semibold line-clamp-2 break-words">
                {video.title} 
              </h2>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2 break-words">
                {video.description}
              </p>
            </div>
          </a>
        )) : <p className="text-center mt-6 text-gray-600">No videos found.</p>}
      </div>
    </div>
  );
};

export default LectureSection;
