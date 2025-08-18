import Spinner from "../../components/common/Spinner";
import NewsCard from "./components/NewsCard";
import { useFetchNews } from "./hooks/useFetchNews";

const NewsPage = () => {
  const { data, loading } = useFetchNews();

  const hasNews = Array.isArray(data) && data.length > 0;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-blue-800 bg-[url('/school2.jpg')] bg-center bg-cover bg-no-repeat bg-blend-overlay text-white text-center py-16">
        <h1 className="text-2xl font-bold">NEWS</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 min-h-[300px]">
        {loading ? (
          <Spinner />
        ) : hasNews ? (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {data.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No news to show.</p>
        )}
      </div>

    </div>
  );
};

export default NewsPage;
