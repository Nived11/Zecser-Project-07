import { formateDate } from "../../../../utils/helpers/formate";
import type { NewsType } from "../hooks/useNews";

interface Props {
  news: NewsType;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const NewsCard = ({ news, onEdit, onDelete }: Props) => {
  return (
    <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <img
        src={news.image}
        alt={news.title}
        loading="lazy"
        decoding="async"
        className="w-32 h-32 object-cover rounded border"
      />
      <div className="flex-1 space-y-1">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{news.title}</h2>
          <p className="text-xs sm:text-sm text-gray-500 sm:ml-4 sm:self-start sm:mt-0 mt-1">
            Last updation: {formateDate(news?.updatedAt || news?.createdAt)}
          </p>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">{news.description}</p>

        <div className="mt-2 flex gap-2">
          <button
            className="px-3 py-1.5 text-sm font-medium rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => onEdit?.(news.id)}
          >
            Edit
          </button>
          <button
            className="px-3 py-1.5 text-sm font-medium rounded bg-red-600 text-white hover:bg-red-700"
            onClick={() => onDelete?.(news.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
