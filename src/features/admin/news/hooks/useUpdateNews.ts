import { useState } from "react";
import { z } from "zod";
import type { NewsType } from "./useNews";
import api from "../../../../lib/api";
import { toast } from "react-hot-toast";

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
      formData.append("content", data.description); 
      if (data.file) formData.append("image", data.file);

      const res = await api.post("/news/", formData);
      
      toast.success(res.data.message || "News Added successfully.");
      return {
        ...res.data,
        description: res.data.content, 
        image: res.data.image || res.data.image_url,
      } as NewsType;
    } catch (err) {
      setError("Failed to create news.");
      return null; 
    } finally {
      setIsCreating(false);
    }
  };

  const updateNews = async (id: number, data: NewsPayload & { file?: File }) => {
    const result = NewsSchema.omit({ image_url: true }).safeParse(data);
    if (!result.success) {
      setError(result.error.issues[0].message);
     return null; 
    }

    try {
      setIsUpdating(true);
      setError("");

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.description); 
      if (data.file) formData.append("image", data.file);

      const res = await api.put(`/news/${id}/`, formData);
      toast.success(res.data.message || "News Updated successfully.");
      
      return {
        ...res.data,
        description: res.data.content, 
        image: res.data.image || res.data.image_url,
      } as NewsType;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      else {
        setError("Failed to update news.");
      }
         return null;
    }
     finally {
      setIsUpdating(false);
    }
  };

  return { updateNews, createNews, isUpdating, isCreating, error };
};
