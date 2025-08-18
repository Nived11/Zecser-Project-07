import React, { useState } from "react";
import ChapterForm from "../../../features/admin/LearningVideos/components/ChapterForm";
import PartForm from "../../../features/admin/LearningVideos/components/PartForm";
import UploadImagePreview from "../../../features/admin/LearningVideos/components/UploadImagePreview";

interface FormState {
  subject: string;
  class: string;
  unit: string;
  unitName: string;
  unitImage: File | null;
  unitImagePreview: string;
  chapter: string;
  chapterName: string;
  chapterImage: File | null;
  chapterImagePreview: string;
  partName: string;
  partDescription: string; // ✅ New field
  videoUrl: string;
  thumbnail: File | null;
  thumbnailPreview: string;

  
}

const LearningVideoSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    subject: "",
    class: "",
    unit: "",
    unitName: "",
    unitImage: null,
    unitImagePreview: "",
    chapter: "",
    chapterName: "",
    chapterImage: null,
    chapterImagePreview: "",
    partName: "",
    partDescription: "", // ✅
    videoUrl: "",
    thumbnail: null,
    thumbnailPreview: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
 const handlePartThumbnailChange = (file: File, preview: string) => {
  setForm((prev) => ({
    ...prev,
    thumbnail: file,
    thumbnailPreview: preview,
  }));
};



  const handleImageChange = (
    file: File | null,
    preview: string,
    type: "unit" | "chapter" | "thumbnail"
  ) => {
    if (type === "unit") {
      setForm((prev) => ({ ...prev, unitImage: file, unitImagePreview: preview }));
    } else if (type === "chapter") {
      setForm((prev) => ({ ...prev, chapterImage: file, chapterImagePreview: preview }));
    } else if (type === "thumbnail") {
      setForm((prev) => ({ ...prev, thumbnail: file, thumbnailPreview: preview }));
    }
  };

  const handleSubmit = () => {
    console.log("Final Form Submission Data:", form);
    // You can send the form data to the backend using FormData if needed
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <ChapterForm
        form={form}
        handleChange={handleChange}
        handleUnitImageChange={(file, preview) =>
          handleImageChange(file, preview, "unit")
        }
        handleChapterImageChange={(file, preview) =>
          handleImageChange(file, preview, "chapter")
        }
      />


      <PartForm
        form={form}
        handleChange={handleChange}
        onThumbnailChange={(file, preview) =>
          handleImageChange(file, preview, "thumbnail")
        }
      />

      {/* Part Description Input */}
      <div>
        <label className="block mb-1 font-medium">Part Description</label>
        <textarea
          name="partDescription"
          value={form.partDescription}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
          rows={3}
          placeholder="Enter part description..."
        />
      </div>

      {/* Thumbnail Preview + Description */}
      {form.thumbnailPreview && (
        <div>
          <UploadImagePreview
            preview={form.thumbnailPreview}
            label="Part Thumbnail"
            onThumbnailChange={handlePartThumbnailChange}
          />
          {form.partDescription && (
            <p className="mt-2 text-gray-700 text-sm">{form.partDescription}</p>
          )}
        </div>
      )}


      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

export default LearningVideoSection;
