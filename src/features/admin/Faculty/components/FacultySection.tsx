// src/components/faculty/FacultySection.tsx
import React from "react";
import { type Faculty } from '../types/faculty';
import FacultyCard from "./FacultyCard";

interface Props {
  title: string;
  description: string;
  faculty: Faculty[];
  onAdd: (category: Faculty["category"]) => void;
  onEdit: (f: Faculty) => void;
}

const FacultySection: React.FC<Props> = ({
  title,
  description,
  faculty,
  onAdd,
  onEdit,
}) => {
  const getCategoryFromTitle = (): Faculty["category"] => {
    if (title.includes("Retired")) return "retired";
    if (title.includes("Forever")) return "forever";
    return "dedicated";
  };

  return (
    <div className="mb-8">
     <div
  className="text-white text-center px-4 py-3 rounded-md font-semibold"
  style={{
    background: "linear-gradient(to right, #eeeeee, #001242, #eeeeee)",
  }}
>

        {title}
      </div>
      <p className="text-sm text-gray-700 p-4">{description}</p>
      <div className="flex gap-4 flex-wrap px-4 pb-4">
        <button
          onClick={() => onAdd(getCategoryFromTitle())}
          className="w-[160px] h-[160px] bg-blue-900 text-white text-4xl rounded-md flex items-center justify-center"
        >
          +
        </button>
        {faculty.map((f) => (
          <FacultyCard key={f.id} data={f} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default FacultySection;
