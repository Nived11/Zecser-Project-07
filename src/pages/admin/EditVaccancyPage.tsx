import { useParams } from "react-router-dom";
import { useCareers } from "../../features/admin/careerlist";
import { AddVaccancyForm } from "../../features/admin/AddVaccancy";
import type { VaccancyFormData } from "../../features/admin/AddVaccancy/types";

export default function EditVaccancyPage() {
  const { id } = useParams<{ id: string }>();
  const { careers, isLoading } = useCareers();

  if (isLoading) {
    return <div className="text-center py-10">Loading career data...</div>;
  }

  const career = careers.find((c) => c.id === id);

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
    description: null, // file upload not pre-filled
    deadline: career.applyBy,
  };

  const handleUpdate = async (data: VaccancyFormData) => {
    console.log("Editing Career ID:", id);
    console.log("Updated Data:", data);
    // TODO: Replace with API call to update the vacancy
    alert("Job updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Edit Job Vacancy</h2>
        <AddVaccancyForm initialData={initialData} onSubmit={handleUpdate} />
      </div>
    </div>
  );
}
