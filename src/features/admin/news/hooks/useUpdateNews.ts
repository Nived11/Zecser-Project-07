import { useState } from "react";
import { z } from "zod";
import type { NewsType } from "./useNews";
import { newData } from "../mock-data";

const NewsSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image_url: z.string().optional(),
});

type NewsPayload = z.infer<typeof NewsSchema>;

export const useUpdateNews = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState("");
  const createNews = async (data: NewsPayload & { file?: File }) => {
    const result = NewsSchema.omit({ image_url: true }).safeParse(data);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    try {
      setIsCreating(true);
      setError("");

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (data.file) formData.append("image", data.file);

      return  newData[0].data;
    } catch (err) {
      setError("Failed to create news.");
    } finally {
      setIsCreating(false);
    }
  };

  const updateNews = async (id: string, data: NewsPayload & { file?: File }) => {
    const result = NewsSchema.omit({ image_url: true }).safeParse(data);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    try {
      setIsUpdating(true);
      setError("");

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (data.file) formData.append("image", data.file);

      const res = await fetch(`/api/news/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to update news");

      const updated = await res.json();
      return updated as NewsType;
    } catch (err) {
      setError("Failed to update news.");
    } finally {
      setIsUpdating(false);
    }
  };


  return { updateNews, createNews, isUpdating, isCreating, error };
};
