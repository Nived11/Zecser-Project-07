import { useEffect, useState } from "react";
import type { Student } from "../types";
import { getStudents, addStudentAPI, deleteStudentAPI, updateStudentAPI } from "../apis/studentApi";

const useDummyData = true;

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filterClass, setFilterClass] = useState("");
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    const data = await getStudents(useDummyData);
    setStudents(data || []); // ✅ Fix: default to empty array
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  const filtered = filterClass
    ? students.filter((s) => s.className === filterClass)
    : students;

  return {
    students: filtered,
    classes: [...new Set(students.map((s) => s.className))],
    filterClass,
    setFilterClass,
    loading,
    addStudent: async (student: Omit<Student, "id">) => {
      const newStudent = await addStudentAPI(student, useDummyData);
      if (!newStudent) return;
      setStudents((prev) => [...prev, newStudent]);
    },
    deleteStudent: async (id: string) => {
      await deleteStudentAPI(id, useDummyData);
      setStudents((prev) => prev.filter((s) => s.id !== id));
    },
    updateStudent: async (id: string, student: Omit<Student, "id">) => {
      const updated = await updateStudentAPI(id, student, useDummyData);
      if (!updated) return; // 🚫 Don't update if API returns undefined

      setStudents((prev) =>
      prev.map((s) => (s.id === id ? updated : s))
      );
    },
  };
};
