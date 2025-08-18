// UploadImagePreview.tsx
import React, { useRef, useEffect, useState } from "react";

export interface UploadImagePreviewProps {
  label: string;
  preview: string;
  onThumbnailChange: (file: File, preview: string) => void;
}

const UploadImagePreview: React.FC<UploadImagePreviewProps> = ({
  label,
  preview,
  onThumbnailChange,
}) => {
  const [localPreview, setLocalPreview] = useState<string>(preview || "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalPreview(preview);
  }, [preview]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const previewUrl = reader.result as string;
        setLocalPreview(previewUrl);
        onThumbnailChange(file, previewUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-6">
      <label className="text-sm font-medium block mb-2">{label}</label>
      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer w-full h-48 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-md bg-white hover:bg-gray-50 overflow-hidden"
      >
        {localPreview ? (
          <img
            src={localPreview}
            alt="Preview"
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="text-gray-500">Click to upload</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadImagePreview;