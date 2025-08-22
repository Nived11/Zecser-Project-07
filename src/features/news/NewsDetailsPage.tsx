import { useParams, useNavigate } from "react-router-dom";
import { useFetchNews } from "./hooks/useFetchNews";
import NewsDetailSkeleton from "./components/NewsDetailSkeleton";
import fallbackImage from "../../assets/noimage.jpg"

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: newsList, loading } = useFetchNews();

  const news = newsList.find((item) => item.id === Number(id));

   if (loading) {
    return <NewsDetailSkeleton />;
  }

  if (!news) return <p className="text-center mt-10">News item not found.</p>;


  const latestNews = newsList.filter((item) => item.id !== Number(id)).slice(0, 4);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <button
          onClick={() => navigate("/news")}
          className="px-4 py-2 text-sm bg-blue-800 text-white rounded hover:bg-blue-700" >
          {"<"} Back to News
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        <div className="md:col-span-2 bg-white shadow-md rounded-md p-6">
          <img
            src={news.image}
            className="w-full h-80 object-cover rounded-md"
            alt={news.title}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = fallbackImage;
            }}
          />
          <h1 className="text-2xl font-bold mt-4 break-words">{news.title}</h1>
          <p className="text-gray-700 mt-2 whitespace-pre-line break-words">
            {news.description}
          </p>
        </div>

        {/* Sidebar Latest News */}
        <div className="bg-white shadow-md rounded-md p-4 h-fit md:sticky md:top-20">
          <h2 className="text-lg font-bold mb-4">Latest News</h2>
          <div className="space-y-4">
            {latestNews.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/news/details/${item.id}`)}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallbackImage;
                  }}
                />
                <div>
                  <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
