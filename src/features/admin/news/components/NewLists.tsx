import { useState } from "react";
import ErrorMessage from "../../../../components/common/ErrorMessage";
import { useNews } from "../hooks/useNews";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";
import PaginationButtons from "./PaginationButton";
import EditNewsForm from "./EditNewsForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";
import DeleteNewsDialog from "./DeleteNewsDialog";
import { useDeleteNews } from "../hooks/useDeleteNews";
import { Button } from "../../../../components/ui/button";

const NewLists = () => {
  const {
    data = [],
    isLoading,
    error: newsError,
    refetch,
    ...paginationProps
  } = useNews();

  const { deleteNews, isDeleting, error: deleteError } = useDeleteNews();

  const [editId, setEditId] = useState<string | null | boolean>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const currentNews =
    typeof editId === "string" ? data.find((item) => item.id === editId) : null;

  const handleEditSave = async () => {
    setEditId(null);
    refetch();
  };

  const handleDeleteConfirm = async () => {
    if (!deleteId) return;
    console.log("Deleting");
    await deleteNews(deleteId);
    setDeleteId(null);
    console.log("ref");
    refetch();
  };

  if (newsError) {
    return (
      <ErrorMessage
        message="Failed to load news. Please try again."
        onRetry={refetch}
      />
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <Button onClick={() => setEditId(true)} className="text-white">
        Add News
      </Button>

      <div className="space-y-4">
        {isLoading ? (
          Array.from({ length: 2 }).map((_, i) => <NewsCardSkeleton key={i} />)
        ) : data.length > 0 ? (
          data.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              onEdit={() => setEditId(news.id)}
              onDelete={() => setDeleteId(news.id)}
            />
          ))
        ) : (
          <p className="text-center mt-6 text-gray-600">No news found.</p>
        )}
      </div>

      <PaginationButtons {...paginationProps} />

        <Dialog open={!!editId} onOpenChange={() => setEditId(null)}>
          <DialogContent className="max-h-[90vh] overflow-y-auto no-scrollbar">
            <DialogHeader>
              <DialogTitle>
                {editId === true ? "Add News" : "Edit News"}
              </DialogTitle>
            </DialogHeader>
            <EditNewsForm news={currentNews ?? null} onSave={handleEditSave} />
          </DialogContent>
        </Dialog>

      <DeleteNewsDialog
        open={!!deleteId}
        onCancel={() => setDeleteId(null)}
        onConfirm={handleDeleteConfirm}
        isLoading={isDeleting}
        error={deleteError}
      />
    </section>
  );
};

export default NewLists;
