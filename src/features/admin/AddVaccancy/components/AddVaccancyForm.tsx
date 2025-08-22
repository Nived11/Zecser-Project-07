import React, { useState, useEffect } from "react";
import type { VaccancyFormData } from "../types";
import { useVaccancy } from "../hooks/useVaccancy";
import { Toaster } from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

type AddVaccancyFormProps = {
  initialData?: VaccancyFormData;
  onSubmit?: (data: VaccancyFormData) => Promise<void>;
  isEditMode?: boolean;
  loading?: boolean;
  error?: string | null;
};

export default function AddVaccancyForm({
  initialData,
  isEditMode = false,
  onSubmit,
  loading: parentLoading,
  error: parentError,
}: AddVaccancyFormProps) {
  const [formData, setFormData] = useState<VaccancyFormData>({
    title: "",
    department: "",
    subject: "",
    jobType: "",
    vacancies: "",
    qualification: [],
    description: "",
    deadline: "",
    status: "active",
  });

  const { addVaccancy, loading: addLoading, error: addError } = useVaccancy();
  const navigate = useNavigate();

  const effectiveLoading = isEditMode ? parentLoading : addLoading;
  const effectiveError = isEditMode ? parentError : addError;
  
  useEffect(() => {
    if (formData.qualification.length === 0) {
      setFormData((prev) => ({ ...prev, qualification: [""] }));
    }
  }, [formData.qualification]);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditMode && onSubmit) {
      await onSubmit(formData);
       formData.title = "";
      formData.department = "";
      formData.subject = "";
      formData.jobType = "";
      formData.vacancies = "";  
      formData.qualification = [];
      formData.deadline = "";
      formData.description = "";
      formData.status = "active";
       setTimeout(() => {
        navigate(-1);
      }, 1500);
     
    } else {
      await addVaccancy(formData);
      formData.title = "";
      formData.department = "";
      formData.subject = "";
      formData.jobType = "";
      formData.vacancies = "";  
      formData.qualification = [];
      formData.deadline = "";
      formData.description = "";
      formData.status = "active";
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center mb-4"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 hover:text-gray-800" />
            <span className="ml-2 text-sm text-gray-600 hover:text-gray-800">
              Back
            </span>
          </button>
          {isEditMode ? "Edit Job Vacancy" : "Add New Job Vacancy"}
        </h2>

        {effectiveError && (
          <div className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {effectiveError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter job title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter Department"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter subject"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Job Type</label>
              <input
                type="text"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Full-time / Part-time"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Vacancies
              </label>
              <input
                type="number"
                name="vacancies"
                value={formData.vacancies}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter number of vacancies"
                required
                min={1}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Application Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Job Description
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required={!isEditMode}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Qualification
              </label>

              {formData.qualification.map((q, idx) => (
                <div key={idx} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    name={`qualification-${idx}`}
                    value={q}
                    onChange={(e) => {
                      const newQuals = [...formData.qualification];
                      newQuals[idx] = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        qualification: newQuals,
                      }));
                    }}
                    className="w-full p-2 border rounded"
                    placeholder="Enter qualification"
                    required
                  />
                  {idx > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        const newQuals = formData.qualification.filter(
                          (_, i) => i !== idx
                        );
                        setFormData((prev) => ({
                          ...prev,
                          qualification: newQuals,
                        }));
                      }}
                      className="p-2 text-white bg-red-600 rounded hover:bg-red-700 flex items-center justify-center"
                      title="Remove"
                    >
                      <FiTrash2 />
                    </button>
                  )}
                </div>
              ))}


              {formData.qualification.length > 0 &&
                formData.qualification[formData.qualification.length - 1] !==
                "" && (
                  <div className="flex justify-start mt-1">
                    <button
                      type="button"
                      title="Add More"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          qualification: [...prev.qualification, ""],
                        }))
                      }
                      className="px-4 py-2 text-white bg-blue-900 rounded hover:bg-blue-800 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Status</label>
              <div className="flex items-center space-x-6 mt-1">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={formData.status === "active"}
                    onChange={handleChange}
                  />
                  <span>Active</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    checked={formData.status === "inactive"}
                    onChange={handleChange}
                  />
                  <span>Inactive</span>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:bg-gray-300"
              disabled={effectiveLoading}
            >
              {effectiveLoading
                ? isEditMode
                  ? "Saving..."
                  : "Posting..."
                : isEditMode
                  ? "Save Changes"
                  : "Post Job"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
