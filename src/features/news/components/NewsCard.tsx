import type { NewsType } from "../hooks/useFetchNews";
import { useNavigate } from "react-router-dom";

interface Props {
  news: NewsType;
}

const NewsCard = ({ news }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/news/details/${news.id}`)}
      className="cursor-pointer border rounded-md shadow-md p-4 hover:shadow-lg transition bg-white w-full">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-40 object-cover rounded"/>
      <h3 className="text-lg font-bold mt-2 truncate">{news.title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {news.description}
      </p>
      <span className="text-blue-600 text-sm mt-2 block">Read more →</span>
    </div>
  );
};

export default NewsCard;
