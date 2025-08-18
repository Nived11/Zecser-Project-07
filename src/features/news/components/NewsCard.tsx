import type { NewsItem } from "../../../types/news";
import { useNavigate } from "react-router-dom";

interface Props {
  news: NewsItem;
}

const NewsCard = ({ news }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/news/details/${news.id}`)}
      className="cursor-pointer border rounded-md shadow-md p-4 hover:shadow-lg transition bg-white"
    >
      <img src={news.imageUrl} alt={news.title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{news.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{news.description.slice(0, 80)}...</p>
      <span className="text-blue-600 text-sm mt-2 block">Read more →</span>
    </div>
  );
};

export default NewsCard;
