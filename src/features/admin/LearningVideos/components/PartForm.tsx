import React from "react";
import UploadImagePreview from "./UploadImagePreview";

interface Props {
  form: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onThumbnailChange: (file: File, preview: string) => void;
}

const PartForm: React.FC<Props> = ({ form, handleChange, onThumbnailChange }) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <div>
          <label className="text-sm font-medium">Select Part</label>
          <select
            name="part"
            value={form.part}
            onChange={handleChange}
            className="w-full p-2 rounded border mt-1"
          >
            <option value="">Select</option>
            <option>Part 1</option>
            <option>Part 2</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Video Title</label>
          <input
            name="videoTitle"
            value={form.videoTitle}
            onChange={handleChange}
            className="w-full p-2 rounded border mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">YouTube Video URL</label>
          <input
            name="youtubeURL"
            value={form.youtubeURL}
            onChange={handleChange}
            className="w-full p-2 rounded border mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Description of this part</label>
          <textarea
            name="partDescription"
            value={form.partDescription}
            onChange={handleChange}
            rows={2}
            className="w-full p-2 rounded border mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Thumbnail</label>
          <UploadImagePreview
            preview={form.thumbnailPreview}
            label="Part Thumbnail"
            onThumbnailChange={onThumbnailChange}
          />
        </div>

        {form.partDescription && form.thumbnailPreview && (
          <div className="mt-2 text-sm text-gray-700">
            <p>{form.partDescription}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PartForm;
