import { useParams, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react"; 
import { useCareerById } from "./hooks/useCareerById";
import { useState } from "react";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { useDeleteCareer } from "./hooks/useDeleteCareer";
import toast, { Toaster } from "react-hot-toast";

const CareerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { career, isLoading, error } = useCareerById(id);
  const { deleteCareer, isDeleting } = useDeleteCareer();
  const navigate = useNavigate();
   const [showDeleteModal, setShowDeleteModal] = useState(false);

const handleConfirmDelete = async () => {
    if (!career?.id) return;
    const success = await deleteCareer(career.id);

    if (success) {
      toast.success("Career deleted successfully");
      setShowDeleteModal(false);
      setTimeout(() => {
        navigate("/admin/career");
      }, 1500);
      
    }
  };
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto my-10 animate-pulse space-y-4">
        <div className="bg-gray-300 h-14 rounded-md" />
        <div className="bg-gray-300 h-6 w-1/2 rounded-md" />
        <div className="bg-gray-300 h-6 w-1/3 rounded-md" />
        <div className="bg-gray-300 h-6 w-2/3 rounded-md" />
        <div className="bg-gray-300 h-40 rounded-md" />
      </div>
    );
  }

  if (!career) {
    return <p className="text-red-500 text-center mt-10">Career not found.</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  return (
    <>
    <Toaster/>
    <div className="max-w-4xl mx-auto my-10">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-4 font-bold"
      >
        <ArrowLeft className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        <span className="ml-2 text-sm text-gray-600 hover:text-gray-800">Back</span>
      </button>

      <div className="bg-white shadow-md rounded-md overflow-hidden">

        <div className="bg-gray-300 flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-800 text-white rounded-full p-2 text-xl">
              <FaUserCircle />
            </div>
            <span className="font-medium text-gray-700">{career.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(`/admin/edit-vaccancy/${career.id}`)}
              className="p-2 rounded-full hover:bg-gray-200"
              title="Edit"
            >
              <Pencil className="w-5 h-5 text-blue-600" />
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              disabled={isDeleting}
              className="p-2 rounded-full hover:bg-gray-200"
              title="Delete"
            >
              <Trash2 className="w-5 h-5 text-red-600" />
            </button>
          </div>
        </div>


        <div className="p-5 space-y-2">
          <div className="grid grid-cols-[140px_10px_1fr] text-sm">
            <span className="font-medium text-gray-800">Job Title</span>
            <span className="text-center">:</span>
            <span className="text-gray-700">{career.title}</span>
          </div>

          <div className="grid grid-cols-[140px_10px_1fr] text-sm">
            <span className="font-medium text-gray-800">Department</span>
            <span className="text-center">:</span>
            <span className="text-gray-700">{career.department}</span>
          </div>

          <div className="grid grid-cols-[140px_10px_1fr] text-sm">
            <span className="font-medium text-gray-800">Job Type</span>
            <span className="text-center">:</span>
            <span className="text-gray-700">{career.jobType}</span>
          </div>

          <div className="grid grid-cols-[140px_10px_1fr] text-sm">
            <span className="font-medium text-gray-800">Vacancies</span>
            <span className="text-center">:</span>
            <span className="text-gray-700">{career.vacancies || "Not specified"}</span>
          </div>

          <div className="grid grid-cols-[140px_10px_1fr] text-sm">
            <span className="font-medium text-gray-800">Apply By</span>
            <span className="text-center">:</span>
            <span className="text-gray-700">{career.applyBy}</span>
          </div>
        </div>

        <div className="bg-white border-t p-5 space-y-4">
          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-1">Job Description</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {career.description || "Not specified"}
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-1">Qualification Required</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {career.qualification
                ? career.qualification.split(", ").map((q: any, idx: any) => (
                    <li key={idx}>{q}</li>
                  ))
                : <li className="text-gray-500">Not specified</li>}
            </ul>
          </div>
        </div>
      </div>
       <ConfirmDeleteModal
        isOpen={showDeleteModal}
        isDeleting={isDeleting}
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
    </>
  );
};

export default CareerDetail;
