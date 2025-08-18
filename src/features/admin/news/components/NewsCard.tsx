import { formateDate } from "../../../../utils/helpers/formate";
import type { NewsType } from "../hooks/useNews";

interface Props {
  news: NewsType;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const NewsCard = ({ news, onEdit, onDelete }: Props) => {
  return (
    <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <img
        src={news.image_url}
        alt={news.title}
        loading="lazy"
        decoding="async"
        className="w-32 h-32 object-cover rounded border"
      />
      <div className="flex-1 space-y-1">
        <h2 className="text-lg font-semibold text-gray-900">{news.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{news.description}</p>
        <div className="flex justify-between items-end">
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
          <p className="text-sm text-gray-500">
            Last updation : {formateDate(news?.updatedAt || news?.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
