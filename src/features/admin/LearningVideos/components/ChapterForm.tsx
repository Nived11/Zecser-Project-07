import React, { useState } from "react";
import UploadImagePreview from "../../../../features/admin/LearningVideos/components/UploadImagePreview";

interface Props {
  form: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleUnitImageChange: (file: File, preview: string) => void;
  handleChapterImageChange: (file: File, preview: string) => void;
}

const ChapterForm: React.FC<Props> = ({
  form,
  handleChange,
  handleUnitImageChange,
  handleChapterImageChange,
}) => {
  const [showInput, setShowInput] = useState({
    class: false,
    subject: false,
    unit: false,
    chapter: false,
  });

  const [options, setOptions] = useState({
    class: ["Class 1", "Class 2", "Class 3", "Class 4"],
    subject: [""],
    unit: [""],
    chapter: [""],
  });

  const [addedField, setAddedField] = useState<{ type: string; value: string } | null>(null);

  const handleAddCustom = (field: keyof typeof showInput) => {
    setShowInput((prev) => ({ ...prev, [field]: true }));
    handleChange({
      target: { name: field, value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleCancelCustom = (field: keyof typeof showInput) => {
    setShowInput((prev) => ({ ...prev, [field]: false }));
  };

  const handleSaveCustom = (field: keyof typeof showInput) => {
    const value = form[field]?.trim();
    if (value && !options[field].includes(value)) {
      setOptions((prev) => ({
        ...prev,
        [field]: [...prev[field], value],
      }));
      setShowInput((prev) => ({ ...prev, [field]: false }));
      setAddedField({ type: field, value });
      setTimeout(() => setAddedField(null), 2000);
    }
  };

  const renderAddedMessage = (field: keyof typeof showInput) => {
    return addedField?.type === field ? (
      <p className="text-green-600 text-sm mt-1">
        Added "{addedField.value}" successfully ✅
      </p>
    ) : null;
  };

  return (
    <>
      {/* Class & Subject */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Class */}
        <div>
          <label className="text-sm font-medium">Select Class</label>
          {!showInput.class ? (
            <div className="flex gap-2">
              <select
                name="class"
                value={form.class}
                onChange={handleChange}
                className="w-full p-2 rounded border mt-1"
              >
                <option value="">-- Select Class --</option>
                {options.class.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="px-3 text-white bg-blue-600 rounded mt-1"
                onClick={() => handleAddCustom("class")}
              >
                +
              </button>
            </div>
          ) : (
            <div className="flex gap-2 items-start">
              <input
                name="class"
                value={form.class}
                onChange={handleChange}
                placeholder="Enter new class"
                className="w-full p-2 rounded border mt-1"
              />
              <button
                type="button"
                className="px-3 text-white bg-green-600 rounded mt-1"
                onClick={() => handleSaveCustom("class")}
              >
                Add
              </button>
              <button
                type="button"
                className="px-3 text-white bg-red-500 rounded mt-1"
                onClick={() => handleCancelCustom("class")}
              >
                Cancel
              </button>
            </div>
          )}
          {renderAddedMessage("class")}
        </div>

        {/* Subject */}
        <div>
          <label className="text-sm font-medium">Select Subject</label>
          {!showInput.subject ? (
            <div className="flex gap-2">
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-2 rounded border mt-1"
              >
                <option value="">-- Select Subject --</option>
                {options.subject.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="px-3 text-white bg-blue-600 rounded mt-1"
                onClick={() => handleAddCustom("subject")}
              >
                +
              </button>
            </div>
          ) : (
            <div className="flex gap-2 items-start">
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter new subject"
                className="w-full p-2 rounded border mt-1"
              />
              <button
                type="button"
                className="px-3 text-white bg-green-600 rounded mt-1"
                onClick={() => handleSaveCustom("subject")}
              >
                Add
              </button>
              <button
                type="button"
                className="px-3 text-white bg-red-500 rounded mt-1"
                onClick={() => handleCancelCustom("subject")}
              >
                Cancel
              </button>
            </div>
          )}
          {renderAddedMessage("subject")}
        </div>
      </div>

      {/* Unit & Unit Image */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium">Select Unit</label>
          {!showInput.unit ? (
            <div className="flex gap-2">
              <select
                name="unit"
                value={form.unit}
                onChange={handleChange}
                className="w-full p-2 rounded border mt-1"
              >
                <option value="">-- Select Unit --</option>
                {options.unit.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="px-3 text-white bg-blue-600 rounded mt-1"
                onClick={() => handleAddCustom("unit")}
              >
                +
              </button>
            </div>
          ) : (
            <>
              <div className="flex gap-2 items-start">
                <input
                  name="unit"
                  value={form.unit}
                  onChange={handleChange}
                  placeholder="Enter new unit"
                  className="w-full p-2 rounded border mt-1"
                />
                <button
                  type="button"
                  className="px-3 text-white bg-green-600 rounded mt-1"
                  onClick={() => handleSaveCustom("unit")}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="px-3 text-white bg-red-500 rounded mt-1"
                  onClick={() => handleCancelCustom("unit")}
                >
                  Cancel
                </button>
              </div>
              <UploadImagePreview
                label="Unit Image"
                preview={form.unitImage}
                onThumbnailChange={handleUnitImageChange}
              />
            </>
          )}
          {renderAddedMessage("unit")}
        </div>

        <div>
          <label className="text-sm font-medium">Unit Name</label>
          <input
            name="unitName"
            value={form.unitName}
            onChange={handleChange}
            className="w-full p-2 rounded border mt-1"
          />
        </div>
      </div>

      {/* Chapter & Chapter Image */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium">Select Chapter</label>
          {!showInput.chapter ? (
            <div className="flex gap-2">
              <select
                name="chapter"
                value={form.chapter}
                onChange={handleChange}
                className="w-full p-2 rounded border mt-1"
              >
                <option value="">-- Select Chapter --</option>
                {options.chapter.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="px-3 text-white bg-blue-600 rounded mt-1"
                onClick={() => handleAddCustom("chapter")}
              >
                +
              </button>
            </div>
          ) : (
            <>
              <div className="flex gap-2 items-start">
                <input
                  name="chapter"
                  value={form.chapter}
                  onChange={handleChange}
                  placeholder="Enter new chapter"
                  className="w-full p-2 rounded border mt-1"
                />
                <button
                  type="button"
                  className="px-3 text-white bg-green-600 rounded mt-1"
                  onClick={() => handleSaveCustom("chapter")}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="px-3 text-white bg-red-500 rounded mt-1"
                  onClick={() => handleCancelCustom("chapter")}
                >
                  Cancel
                </button>
              </div>
              <UploadImagePreview
                label="Chapter Image"
                preview={form.chapterImage}
                onThumbnailChange={handleChapterImageChange}
              />
            </>
          )}
          {renderAddedMessage("chapter")}
        </div>

        <div>
          <label className="text-sm font-medium">Chapter Name</label>
          <input
            name="chapterName"
            value={form.chapterName}
            onChange={handleChange}
            className="w-full p-2 rounded border mt-1"
          />
        </div>
      </div>
    </>
  );
};

export default ChapterForm;
