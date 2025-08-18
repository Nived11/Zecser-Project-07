import React, { useState, useEffect } from "react";
import type { VaccancyFormData } from "../types";
import { useAddVaccancy } from "../hooks/useVaccancy";

type AddVaccancyFormProps = {
  initialData?: VaccancyFormData;
  onSubmit?: (data: VaccancyFormData) => Promise<void>;
  isEditMode?: boolean;
};

export default function AddVaccancyForm({
  initialData,
  onSubmit,
  isEditMode = false,
}: AddVaccancyFormProps) {
  const [formData, setFormData] = useState<VaccancyFormData>({
    title: "",
    department: "",
    subject: "",
    jobType: "",
    vacancies: "",
    qualification: "",
    description: null,
    deadline: "",
  });

  const { addVaccancy, loading, error } = useAddVaccancy();

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, description: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      await onSubmit(formData);
    } else {
      await addVaccancy(formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        {isEditMode ? "Edit Job Vacancy" : "Add New Job Vacancy"}
      </h2>

      {error && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
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
            <label className="block text-sm font-medium mb-1">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Editor/Department"
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
              Qualification
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter qualification required"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Job Description (PDF)
            </label>
            <input
              type="file"
              name="description"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
              accept=".pdf"
              required={!isEditMode}
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
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:bg-blue-300"
            disabled={loading}
          >
            {loading
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
  );
}
