import { useEffect } from "react";
import NewsCard from "./components/NewsCard";
import { useFetchNews } from "./hooks/useFetchNews";
import PaginationButtons from "./components/PaginationButton";
import NewsCardSkeleton from "./components/NewsCardSkeleton"; 

const NewsPage = () => {
  const { data, loading, ...paginationProps } = useFetchNews();
  const hasNews = Array.isArray(data) && data.length > 0;

useEffect(() => {
 if (!loading && hasNews) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [paginationProps.currentPage, loading, hasNews]);


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-blue-800 bg-[url('/school2.jpg')] bg-center bg-cover bg-no-repeat bg-blend-overlay text-white text-center py-16">
        <h1 className="text-2xl font-bold">NEWS</h1>
      </div>

      <div className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>
        ) : hasNews ? (
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No news to show.</p>
        )}
      </div>

      {hasNews && (
        <div className="flex justify-center items-center py-6">
          <PaginationButtons {...paginationProps} />
        </div>
      )}
    </div>
  );
};

export default NewsPage;
