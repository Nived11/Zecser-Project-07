import { useState } from "react";
import api from "../../../../lib/api";

export const useDeleteCareer = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteCareer = async (id: number) => {
    setIsDeleting(true);
    setError(null);

    try {
      await api.delete(`/jobs/${id}/`);
        console.log(`Career with id ${id} deleted successfully.`);
      return true; 
    } catch (err: any) {
      setError("Failed to delete job");
      console.error("Delete career error:", err);
      return false; 
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteCareer, isDeleting, error };
};
