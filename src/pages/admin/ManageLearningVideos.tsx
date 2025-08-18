import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import UploadImagePreview from "../../features/admin/LearningVideos/components/UploadImagePreview";
import ChapterForm from "../../features/admin/LearningVideos/components/ChapterForm";
import PartForm from "../../features/admin/LearningVideos/components/PartForm";
import type { AdminOrSubProps } from "../../components/admin-header/Header";

const defaultForm = {
  class: "Class 1",
  subject: "English",
  unit: "Unit 1",
  unitName: "",
  chapter: "Chapter 1",
  chapterName: "",
  chapterShortDesc: "",
  chapterMainDesc: "",
  part: "Part 1",
  partName: "",
  videoUrl: "",
  thumbnail: null as File | null,
  thumbnailPreview: "",
  partDescription: "",
  unitImage: "",
  chapterImage: "",
};

const ManageLearningVideos: React.FC<AdminOrSubProps> = ({type}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const editIndex = location.state?.editIndex ?? null;

  const [form, setForm] = useState({ ...defaultForm });
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const stored = JSON.parse(localStorage.getItem("uploadedVideos") || "[]");
      const data = stored[editIndex];
      if (data) {
        setForm({ ...data });
        setThumbnailPreview(data.thumbnail || "");
      }
    }
  }, [editIndex]);

  const handleUnitImageChange = (_file: File, preview: string) => {
    setForm(prev => ({ ...prev, unitImage: preview }));
  };

  const handleChapterImageChange = (_file: File, preview: string) => {
    setForm(prev => ({ ...prev, chapterImage: preview }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleThumbnailChange = (file: File, preview: string) => {
    setForm(prev => ({
      ...prev,
      thumbnail: file,
      thumbnailPreview: preview,
    }));
    setThumbnailPreview(preview);
  };

  const handleUpload = () => {
    const newEntry = {
      ...form,
      thumbnail: thumbnailPreview,
    };

    const existing = JSON.parse(localStorage.getItem("uploadedVideos") || "[]");
    let updated = [...existing];

    if (editIndex !== null) {
      updated[editIndex] = newEntry;
    } else {
      updated.push(newEntry);
    }

    localStorage.setItem("uploadedVideos", JSON.stringify(updated));

    Swal.fire({
      icon: "success",
      title: editIndex !== null ? "Video Updated!" : "Video Uploaded!",
      text: "Your video has been saved successfully.",
    }).then(() => {
      setForm({ ...defaultForm });
      setThumbnailPreview("");
      navigate(type=='Admin Panel'?"/admin/learning-videos": "/sub-admin/learning-videos");
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-200 p-4 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
          Manage Learning Videos
        </h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate(type=='Admin Panel'?"/admin/learning-videos": "/sub-admin/learning-videos")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            View Uploaded List
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chapter Information</h2>
          <ChapterForm
            form={form}
            handleChange={handleChange}
            handleUnitImageChange={handleUnitImageChange}
            handleChapterImageChange={handleChapterImageChange}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Unit & Chapter Images</h2>

          <UploadImagePreview
            label="Upload Unit Image"
            preview={form.unitImage}
            onThumbnailChange={handleUnitImageChange}
          />

          <UploadImagePreview
            label="Upload Chapter Image"
            preview={form.chapterImage}
            onThumbnailChange={handleChapterImageChange}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
            <textarea
              name="chapterShortDesc"
              value={form.chapterShortDesc}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-2 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Main Description</label>
            <textarea
              name="chapterMainDesc"
              value={form.chapterMainDesc}
              onChange={handleChange}
              rows={6}
              className="w-full border border-gray-300 rounded-lg p-2 resize-none"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Part Details</h2>
          <PartForm
            form={form}
            handleChange={handleChange}
            onThumbnailChange={handleThumbnailChange}
          />
        </div>

        

        <div className="flex justify-end gap-4 pt-4">
          <button
            onClick={() => {
              setForm({ ...defaultForm });
              setThumbnailPreview("");
              if (editIndex !== null) {
                navigate(type=='Admin Panel'?"/admin/learning-videos": "/sub-admin/learning-videos");
              }
            }}
            className="px-6 py-2 bg-gray-400 text-white rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            className="px-6 py-2 bg-blue-900 text-white rounded-lg"
          >
            {editIndex !== null ? "Update Video" : "Upload Video"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageLearningVideos;
