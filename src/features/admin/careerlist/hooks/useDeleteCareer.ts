import { useState } from "react";
import api from "../../../../lib/api";
import toast from "react-hot-toast";

export const useDeleteCareer = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteCareer = async (id: number) => {
    setIsDeleting(true);
    setError(null);

    try {
      await api.delete(`/jobs/${id}/`);
      return true; 
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error( "Failed to delete career. Please try again.");
      } else {
        setError("Failed to delete career. Please try again.");
      }
      return false; 
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteCareer, isDeleting, error };
};
