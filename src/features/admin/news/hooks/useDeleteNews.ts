import { useState } from "react";
import api from "../../../../lib/api"; 
import { toast } from "react-hot-toast";

export const useDeleteNews = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  const deleteNews = async (id: number) => {
    setIsDeleting(true);
    setError("");
    try {
       const res = await api.delete(`/news/${id}/`);

       toast.success(res.data.message || "News deleted successfully");
      return true;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to delete news. Please try again.");
      } return false;
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteNews, isDeleting, error };
};
