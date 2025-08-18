import { useParams } from "react-router-dom";

import { useFetchNews } from "./hooks/useFetchNews";
import Spinner from "../../components/common/Spinner";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { data: newsList, loading } = useFetchNews();

  const news = newsList.find((item) => item.id === Number(id));

  if (loading)
    return (
      <div className="min-h-screen">
        <Spinner />
      </div>
    );
  if (!news) return <p className="text-center mt-10">News item not found.</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10 bg-white shadow-md rounded-md mt-8">
        <img
          src={news.imageUrl}
          className="w-full h-80 object-cover rounded-md"
          alt={news.title}
        />
        <h1 className="text-2xl font-bold mt-4">{news.title}</h1>
        <p className="text-gray-700 mt-2">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsDetailPage;
