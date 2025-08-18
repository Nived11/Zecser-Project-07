import React, { useState, useEffect } from "react";
import type { Student, Gender } from "../types";

interface Props {
  student?: Student | null;
  onClose: () => void;
  onSubmit: (data: Omit<Student, "id">) => void;
}

const StudentFormModal: React.FC<Props> = ({ student, onClose, onSubmit }) => {
  const [form, setForm] = useState<Omit<Student, "id">>({
    name: "",
    admissionNo: "",
    className: "",
    image: "",
    dob: { day: "", month: "", year: "" },
    gender: undefined,
    guardianName: "",
    contactNumber: "",
    email: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (student) {
      setForm({
        name: student.name,
        admissionNo: student.admissionNo,
        className: student.className,
        image: student.image,
        dob: student.dob || { day: "", month: "", year: "" },
        gender: student.gender,
        guardianName: student.guardianName || "",
        contactNumber: student.contactNumber || "",
        email: student.email || "",
        address: student.address || "",
      });
    }
  }, [student]);

  const handleGenderSelect = (selected: Gender) => {
    setForm({ ...form, gender: selected });
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.admissionNo.trim())
      errors.admissionNo = "Admission number is required";
    if (!form.className.trim()) errors.className = "Class is required";
    if (!form.contactNumber?.trim())
      errors.contactNumber = "Contact number is required";
    else if (!/^\d{10}$/.test(form.contactNumber || ""))
      errors.contactNumber = "Invalid mobile number";
    if (!form.email?.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email || ""))
      errors.email = "Invalid email";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(form);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm top-0 left-0 right-0  bg-white/30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md max-h-[90vh] max-w-md w-full overflow-y-auto no-scrollbar">
        <h2 className="text-lg font-bold mb-4">
          {student ? "Edit Student" : "Add Student"}
        </h2>

        <input
          className="w-full mb-1 p-2 border rounded"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {formErrors.name && (
          <p className="text-red-500 text-sm mb-2">{formErrors.name}</p>
        )}

        <input
          className="w-full mb-1 p-2 border rounded"
          placeholder="Enter Admission Number"
          value={form.admissionNo}
          onChange={(e) => setForm({ ...form, admissionNo: e.target.value })}
        />
        {formErrors.admissionNo && (
          <p className="text-red-500 text-sm mb-2">{formErrors.admissionNo}</p>
        )}

        <input
          className="w-full mb-1 p-2 border rounded"
          placeholder="Enter Class & Section"
          value={form.className}
          onChange={(e) => setForm({ ...form, className: e.target.value })}
        />
        {formErrors.className && (
          <p className="text-red-500 text-sm mb-2">{formErrors.className}</p>
        )}

        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium">
            Date of Birth
          </label>
          <div className="flex gap-2">
            <input
              className="w-1/3 p-2 border rounded"
              placeholder="Date"
              value={form.dob?.day}
              onChange={(e) =>
                setForm({ ...form, dob: { ...form.dob!, day: e.target.value } })
              }
            />
            <input
              className="w-1/3 p-2 border rounded"
              placeholder="Month"
              value={form.dob?.month}
              onChange={(e) =>
                setForm({
                  ...form,
                  dob: { ...form.dob!, month: e.target.value },
                })
              }
            />
            <input
              className="w-1/3 p-2 border rounded"
              placeholder="Year"
              value={form.dob?.year}
              onChange={(e) =>
                setForm({
                  ...form,
                  dob: { ...form.dob!, year: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium">Gender</label>
          <div className="flex gap-2">
            {["Female", "Male", "Other"].map((g) => (
              <button
                key={g}
                type="button"
                className={`px-4 py-1 border rounded ${
                  form.gender === g ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
                onClick={() => handleGenderSelect(g as Gender)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <input
          className="w-full mb-1 p-2 border rounded"
          placeholder="Enter Guardian Name"
          value={form.guardianName}
          onChange={(e) => setForm({ ...form, guardianName: e.target.value })}
        />

        <div className="flex mb-1">
          <span className="px-3 flex items-center bg-gray-100 border border-r-0 rounded-l">
            +91
          </span>
          <input
            className="w-full p-2 border rounded-r"
            placeholder="Enter Mobile Number"
            value={form.contactNumber}
            onChange={(e) =>
              setForm({ ...form, contactNumber: e.target.value })
            }
          />
        </div>
        {formErrors.contactNumber && (
          <p className="text-red-500 text-sm mb-2">
            {formErrors.contactNumber}
          </p>
        )}

        <input
          className="w-full mb-1 p-2 border rounded"
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm mb-2">{formErrors.email}</p>
        )}

        <textarea
          className="w-full mb-2 p-2 border rounded"
          placeholder="Enter Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <input
          className="w-full mb-4 p-2 border rounded"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <div className="flex justify-center gap-6">
          <button
            onClick={onClose}
            className="bg-gray-200 text-black px-8 py-2 rounded-full"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="bg-gray-800 text-white px-8 py-2 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentFormModal;
