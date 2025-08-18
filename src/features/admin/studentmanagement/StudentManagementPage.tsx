import { useState } from "react";
import StudentCard from "./components/StudentCard";
import StudentModal from "./components/StudentModal";
import StudentFormModal from "./components/StudentFormModal";
import { useStudents } from "./hooks/useStudents";
import type { Student } from "./types";

//dummy data in studentApi.ts

const StudentManagementPage = () => {
  const {
    students,
    loading,
    deleteStudent,
    updateStudent,
    addStudent,
    classes,
    filterClass,
    setFilterClass,
  } = useStudents();
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-gray-100 min-h-screen sm:mx-5 px-5 py-8">
        <h1 className="text-3xl font-bold mb-6">Student Directory</h1>

        <div className="flex items-center gap-4 mb-4">
          <label className="font-semibold">Filter by Class:</label>
          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="px-4 py-2 border rounded"
          >
            <option value="">All</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>

          <button
            className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setShowForm(true)}
          >
            Add Student
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onView={() => setSelectedStudent(student)}
              />
            ))}
          </div>
        )}

        {selectedStudent && (
          <StudentModal
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
            onDelete={deleteStudent}
            onEdit={() => {
              setShowForm(true);
            }}
          />
        )}

        {showForm && (
          <StudentFormModal
            student={selectedStudent}
            onClose={() => {
              setSelectedStudent(null);
              setShowForm(false);
            }}
            onSubmit={(data) => {
              if (selectedStudent) {
                updateStudent(selectedStudent.id, data);
              } else {
                addStudent(data);
              }
              setShowForm(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default StudentManagementPage;
