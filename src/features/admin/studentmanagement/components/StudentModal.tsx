import React from "react";
import type { Student } from "../types";

interface Props {
  student: Student;
  onClose: () => void;
  onDelete: (id: string) => void;
  onEdit: () => void;
}

const StudentModal: React.FC<Props> = ({ student, onClose, onDelete, onEdit }) => {
  const formatDob = (dob?: { day: string; month: string; year: string }) =>
    dob ? `${dob.day} ${dob.month} ${dob.year}` : "N/A";

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50 overflow-auto p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 md:flex gap-6">
        {/* Image */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src={student.image}
            alt={student.name}
            className="w-full h-auto max-w-xs rounded-lg object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">{student.name}</h2>

          <div className="text-sm space-y-2">
            <p><span className="font-semibold">Admission No:</span> {student.admissionNo}</p>
            <p><span className="font-semibold">Class:</span> {student.className}</p>
            <p><span className="font-semibold">Date of Birth:</span> {formatDob(student.dob)}</p>
            <p><span className="font-semibold">Gender:</span> {student.gender}</p>
            <p><span className="font-semibold">Guardian Name:</span> {student.guardianName}</p>
            <p><span className="font-semibold">Contact Number:</span> {student.contactNumber}</p>
            <p><span className="font-semibold">Email:</span> {student.email}</p>
            <p><span className="font-semibold">Address:</span> {student.address}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-end gap-3 mt-6">
            <button onClick={onEdit} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
            <button onClick={() => onDelete(student.id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
