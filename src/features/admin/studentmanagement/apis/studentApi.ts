import type { Student } from "../types";

let dummyStudents: Student[] = [
  {
    id: "1",
    name: "John Mathew",
    admissionNo: "ADM2035",
    className: "5A",
    image: "/kid2.jpg",
  },
  {
    id: "2",
    name: "Jane Doe",
    admissionNo: "ADM2036",
    className: "6B",
    image: "kis1.jpg",
  },
];

export const getStudents = async (dummy = true) => {
  if (dummy) return dummyStudents;
  // else make actual GET request
};

export const addStudentAPI = async (student: Omit<Student, "id">, dummy = true) => {
  if (dummy) {
    const newStudent = { ...student, id: Date.now().toString() };
    dummyStudents.push(newStudent);
    return newStudent;
  }
  // else make POST request
};

export const deleteStudentAPI = async (id: string, dummy = true) => {
  if (dummy) {
    dummyStudents = dummyStudents.filter((s) => s.id !== id);
  }
  // else make DELETE request
};

export const updateStudentAPI = async (id: string, data: Omit<Student, "id">, dummy = true) => {
  if (dummy) {
    const index = dummyStudents.findIndex((s) => s.id === id);
    if (index > -1) dummyStudents[index] = { id, ...data };
    return dummyStudents[index];
  }
  // else make PUT request
};
