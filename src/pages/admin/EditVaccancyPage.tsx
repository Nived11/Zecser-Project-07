import { useParams } from "react-router-dom";
import { useCareers } from "../../features/admin/careerlist";
import AddVaccancyForm from "../../features/admin/AddVaccancy/components/AddVaccancyForm";
import type { VaccancyFormData } from "../../features/admin/AddVaccancy/types";
import { useVaccancy } from "../../features/admin/AddVaccancy/hooks/useVaccancy";

export default function EditVaccancyPage() {
  const { id } = useParams<{ id: string }>();
  const { careers, isLoading } = useCareers();
  const { updateVaccancy, loading, error } = useVaccancy();

  if (isLoading) {
    return <div className="text-center py-10">Loading career data...</div>;
  }

  const career = careers.find((c) => c.id === Number(id));
  if (!career) {
    return <div className="text-center text-red-500 mt-10">Career not found.</div>;
  }

  const initialData: VaccancyFormData = {
    title: career.title,
    department: career.department,
    subject: career.subject || "",
    jobType: career.jobType,
    vacancies: career.vacancies || "",
    qualification: career.qualification || "",
    description: null,
    deadline: career.applyBy,
  };

  const handleUpdate = async (data: VaccancyFormData) => {
    try {
      await updateVaccancy(id!, data);
      
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update job vacancy.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-6">
        <AddVaccancyForm 
        initialData={initialData} 
        onSubmit={handleUpdate} 
        isEditMode  
        loading={loading} 
        error={error} />
      </div>
    </div>
  );
}
