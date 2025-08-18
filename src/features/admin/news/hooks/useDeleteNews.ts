import { useState } from "react";

export const useDeleteNews = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState("");

    const deleteNews = async (id: string) => {
        setIsDeleting(true);
        setError("");
        try {
            console.log("Deleted:", id);
        } catch (err) {
            setError("Failed to delete news.");
        } finally {
            setIsDeleting(false);
        }
    };

    return { deleteNews, isDeleting, error };
};
