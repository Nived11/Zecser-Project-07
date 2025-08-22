import { useParams } from "react-router-dom";
import { useCareerById } from "../../features/admin/careerlist/hooks/useCareerById";
import AddVaccancyForm from "../../features/admin/AddVaccancy/components/AddVaccancyForm";
import type { VaccancyFormData } from "../../features/admin/AddVaccancy/types";
import { useVaccancy } from "../../features/admin/AddVaccancy/hooks/useVaccancy";
import FormSkelton from "../../features/admin/AddVaccancy/components/FormSkeleton";

export default function EditVaccancyPage() {
  const { id } = useParams<{ id: string }>();
  const { career, isLoading, error: careerError } = useCareerById(id);
  const { updateVaccancy, loading, error } = useVaccancy();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <FormSkelton />
      </div>
    );
  }

  if (careerError || !career) {
    return (
      <div className="text-center text-red-500 mt-10">Career not found.</div>
    );
  }

  const initialData: VaccancyFormData = {
    title: career.title,
    department: career.department,
    subject: career.subject || "",
    jobType: career.jobType,
    vacancies: career.vacancies || "",
    qualification: career.qualification ? career.qualification.split(", "): [],
    description: career.description || "",
    deadline: career.applyBy,
    status: career.is_active ? "active" : "inactive", 
  };

  const handleUpdate = async (data: VaccancyFormData) => {
    try {
      await updateVaccancy(id!, data); 
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        throw err;
      } else {
        console.error("Error updating vacancy");
        throw new Error("Error updating vacancy");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-6">
          <AddVaccancyForm
            initialData={initialData}
            onSubmit={handleUpdate}
            isEditMode
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </>
  );
}
