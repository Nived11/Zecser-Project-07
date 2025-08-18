import { useState } from "react";
import type { VaccancyFormData } from "../types";

export const useAddVaccancy = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState<string | null>(null);

  const addVaccancy = async (formData: VaccancyFormData) => {
    setLoading(true);
    setError(null);

    try {
      // ---- Simulate an API call ----
      await new Promise((res) => setTimeout(res, 1200));

      // In real use:
      // const fd = new FormData();
      // Object.entries(formData).forEach(([k, v]) => {
      //   if (k === "description" && v) fd.append("description", v as File);
      //   else fd.append(k, String(v ?? ""));
      // });
      // await axios.post("/api/admin/vaccancies/", fd, { headers: { "Content-Type": "multipart/form-data" } });

      console.log("Vaccancy posted:", formData);
      return true;
    } catch (e) {
      setError("Failed to post vacancy. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { addVaccancy, loading, error };
};
