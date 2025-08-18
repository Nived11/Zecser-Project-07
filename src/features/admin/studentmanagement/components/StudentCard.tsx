import React from "react";
import type { Student } from "../types";

interface Props {
  student: Student;
  onView: () => void;
}

const StudentCard: React.FC<Props> = ({ student, onView }) => {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <img
        src={student.image}
        alt={student.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="font-bold text-lg">{student.name}</h2>
      <p>{student.admissionNo}</p>
      <p>{student.className}</p>
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={onView}
      >
        View More
      </button>
    </div>
  );
};

export default StudentCard;
