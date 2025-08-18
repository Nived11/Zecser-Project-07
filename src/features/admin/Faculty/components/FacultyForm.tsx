// src/components/faculty/FacultyForm.tsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { type Faculty, type FacultyCategory } from "../types/faculty";

interface Props {
    initialData?: Faculty;
    onCancel: () => void;
    onSave: (data: Faculty) => void;
}

const FacultyForm: React.FC<Props> = ({ initialData, onCancel, onSave }) => {
    const [formData, setFormData] = useState<Faculty>(
        initialData || {
            id: Date.now().toString(),
            name: "",
            dob: "",
            contact: "",
            email: "",
            doj: "",
            experience: "",
            degree: "",
            college: "",
            passingYear: "",
            image: "",
            category: "dedicated",
        }
    );

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFormData((prev) => ({ ...prev, image: url }));
        }
    };

    const handleCategoryChange = (value: FacultyCategory) => {
        setFormData((prev) => ({ ...prev, category: value }));
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.dob) newErrors.dob = "Date of birth is required";
        if (!formData.contact || !/^\d{10}$/.test(formData.contact))
            newErrors.contact = "Contact must be a 10-digit number";
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Valid email is required";
        if (!formData.doj) newErrors.doj = "Date of joining is required";
        if (!formData.experience || isNaN(Number(formData.experience)))
            newErrors.experience = "Valid experience is required";
        if (!formData.degree) newErrors.degree = "Degree is required";
        if (!formData.college) newErrors.college = "College is required";
        if (!formData.passingYear || !/^\d{4}$/.test(formData.passingYear))
            newErrors.passingYear = "Valid passing year is required";

        if (formData.category === "forever" && !formData.dod) {
            newErrors.dod = "Date of death is required";
        }

        return newErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        Swal.fire({
            title: initialData ? "Save Changes?" : "Publish Faculty?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                onSave(formData);
                Swal.fire({
                    title: initialData ? "Changes Saved!" : "Faculty Published!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This faculty will be permanently removed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                onSave({ ...formData, _delete: true } as any);
                Swal.fire({
                    title: "Deleted!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center overflow-auto">
            <div className="bg-white p-6 rounded-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                    <label className="mt-20 w-[150px] h-[150px] bg-blue-900 text-white flex items-center justify-center rounded-md cursor-pointer overflow-hidden">
                        {formData.image ? (
                            <img
                                src={formData.image}
                                alt="Faculty"
                                className="w-full h-full object-cover rounded-md"
                            />
                        ) : (
                            "+"
                        )}
                        <input type="file" className="hidden" onChange={handleImageUpload} />
                    </label>

                    <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
                        <label>
                            <input
                                type="radio"
                                checked={formData.category === "dedicated"}
                                onChange={() => handleCategoryChange("dedicated")}
                            /> Dedicated Team
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={formData.category === "retired"}
                                onChange={() => handleCategoryChange("retired")}
                            /> Retired Faculties
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={formData.category === "forever"}
                                onChange={() => handleCategoryChange("forever")}
                            /> Forever in Our Hearts
                        </label>
                    </div>

                    {initialData && (
                        <button
                            className="mt-6 text-red-500 font-semibold underline"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    )}
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                    <div className="grid gap-3">
                        <div>
                            <input
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <DatePicker
                                selected={formData.dob ? new Date(formData.dob) : null}
                                onChange={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        dob: date?.toISOString().split("T")[0] || "",
                                    }))
                                }
                                placeholderText="Date of Birth"
                                className="border p-2 rounded w-full"
                            />
                            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                        </div>

                        <div>
                            <input
                                name="contact"
                                type="tel"
                                placeholder="Contact Number"
                                value={formData.contact}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    if (/^\d{0,10}$/.test(val)) {
                                        setFormData((prev) => ({ ...prev, contact: val }));
                                    }
                                }}
                                className="border p-2 rounded w-full"
                            />
                            {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
                        </div>

                        <div>
                            <input
                                name="email"
                                placeholder="Email ID"
                                value={formData.email}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <DatePicker
                                selected={formData.doj ? new Date(formData.doj) : null}
                                onChange={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        doj: date?.toISOString().split("T")[0] || "",
                                    }))
                                }
                                placeholderText="Date of Joining"
                                className="border p-2 rounded w-full"
                            />
                            {errors.doj && <p className="text-red-500 text-sm">{errors.doj}</p>}
                        </div>

                        <div>
                            <input
                                name="experience"
                                placeholder="Total Experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                            {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
                        </div>

                        <div>
                            <input
                                name="degree"
                                placeholder="Degree"
                                value={formData.degree}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                            {errors.degree && <p className="text-red-500 text-sm">{errors.degree}</p>}
                        </div>

                        <div>
                            <input
                                name="college"
                                placeholder="College"
                                value={formData.college}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                            {errors.college && <p className="text-red-500 text-sm">{errors.college}</p>}
                        </div>

                        <div>
                            <input
                                name="passingYear"
                                placeholder="Passing Year"
                                value={formData.passingYear}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                            {errors.passingYear && <p className="text-red-500 text-sm">{errors.passingYear}</p>}
                        </div>

                        {formData.category === "forever" && (
                            <div>
                                <DatePicker
                                    selected={formData.dod ? new Date(formData.dod) : null}
                                    onChange={(date) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            dod: date?.toISOString().split("T")[0] || "",
                                        }))
                                    }
                                    placeholderText="Date of Death"
                                    className="border p-2 rounded w-full"
                                />
                                {errors.dod && <p className="text-red-500 text-sm">{errors.dod}</p>}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-300 rounded text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-[#03113D] text-white rounded text-sm"
                        >
                            {initialData ? "Save" : "Publish"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyForm;
