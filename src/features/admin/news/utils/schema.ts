import { z } from "zod";

export const newsUpdateSchema = z.object({
  title: z.string().min(3, "Title is too short"),
  description: z.string().min(10, "Description is too short"),
  image_url: z.string().url("Invalid image URL or data"),
});

export type NewsUpdateInput = z.infer<typeof newsUpdateSchema>;
