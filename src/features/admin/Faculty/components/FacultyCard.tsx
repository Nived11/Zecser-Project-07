import React from "react";
import { type Faculty } from "../types/faculty";
import { FaEdit } from "react-icons/fa";

interface Props {
  data: Faculty;
  onEdit: (faculty: Faculty) => void;
}

const FacultyCard: React.FC<Props> = ({ data, onEdit }) => {
  return (
    <div
      onClick={() => onEdit(data)}
      className="w-[180px] h-[240px] rounded-xl overflow-hidden shadow bg-[#e6e6e6] cursor-pointer relative"
    >
      {/* Full Image Background */}
      <div className="relative w-full h-full">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />

        {/* Top-right Edit Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(data);
          }}
          className="absolute top-2 right-2 bg-white p-[6px] rounded-full shadow hover:bg-gray-100 z-10"
        >
          <FaEdit className="text-gray-700 text-sm" />
        </button>

        {/* Bottom-right Rose Icon */}
        {data.category === "forever" && (
          <img
            src="https://landscaprdrawing.wordpress.com/wp-content/uploads/2021/02/8-1-768x435-1.png?w=768"
            alt="Rose"
            className="absolute bottom-[74px] right-2 w-8 h-8 rounded-full bg-white p-1 z-10"
          />
        )}

        {/* Bottom Overlay Details */}
<div className="absolute bottom-0 left-0 w-full bg-gray-500/30 text-white text-center px-2 py-1 backdrop-blur-sm">
  <p className="text-[14px] font-semibold leading-tight">{data.name}</p>
  <p className="text-[12px] font-normal text-gray-200 leading-tight">Primary Teacher</p>

  {data.category === "forever" && (
    <div className="text-[11px] font-medium pt-1 space-y-[2px] leading-tight">
      <p>DOB: {formatDate(data.dob)}</p>
      <p>DOD: {formatDate(data.dod)}</p>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

// Format from "YYYY-MM-DD" to "DD-MM-YYYY"
function formatDate(date?: string): string {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
}

export default FacultyCard;
