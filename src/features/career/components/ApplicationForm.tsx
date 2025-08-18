import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ApplicationForm: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const jobTitle = location.state?.jobTitle || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    qualification: '',
    location: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = 'Full Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.experience || isNaN(Number(formData.experience)) || Number(formData.experience) < 0) {
      newErrors.experience = 'Enter a valid number of years';
    }

    if (!formData.qualification.trim()) {
      newErrors.qualification = 'Qualification is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!file) {
      newErrors.resume = 'Resume file is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const handleSubmit = () => {
  if (validate()) {
    navigate('/career/application-review', {
      state: {
        ...formData,
        jobTitle,
        resumeFile: file, // ✅ just pass the File object
      },
    });

  }
};

  return (
    <div className="bg-[#E6E6E6] w-full max-w-6xl flex flex-col md:flex-row items-start justify-center gap-10">
      {/* Upload Section */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div
          className="w-full max-w-sm h-52 border-2 border-dashed border-gray-400 bg-white rounded-xl flex flex-col items-center justify-center text-center px-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <span className="text-3xl mb-2">📄</span>
          <p className="text-sm text-gray-600 mb-1">Drag and Drop Files</p>
          <span className="text-xs text-gray-400 mb-2">OR</span>
          <label htmlFor="file-upload" className="text-sm text-white bg-[#001840] px-4 py-1 rounded cursor-pointer">
            Browse Files
          </label>
          <input id="file-upload" type="file" onChange={handleBrowse} className="hidden" />
        </div>

        {file && (
          <div className="w-full max-w-sm mt-4 bg-white rounded-md shadow-sm px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="text-blue-900">📄</span>
              <span className="text-gray-800">{file.name}</span>
            </div>
            <span className="text-green-600 font-semibold text-xs">Completed</span>
          </div>
        )}
        {errors.resume && <p className="text-red-500 text-sm mt-2">{errors.resume}</p>}

        <button
          onClick={handleSubmit}
          className="mt-6 bg-[#001840] text-white px-10 py-3 rounded-md text-lg font-medium hover:bg-[#003080]"
        >
          Next
        </button>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <input
          className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 placeholder-gray-500"
          type="text"
          value={jobTitle}
          placeholder="Job Title"
          readOnly
        />

        <input
          className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 placeholder-gray-500"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}

        <input
          className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 placeholder-gray-500"
          type="email"
          name="email"
          placeholder="Gmail ID"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

        <input
          className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 placeholder-gray-500"
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

        <input
          className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 placeholder-gray-500"
          type="text"
          name="experience"
          placeholder="Year of Experience"
          value={formData.experience}
          onChange={handleChange}
        />
        {errors.experience && <p className="text-red-500 text-xs">{errors.experience}</p>}

        <input
          className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 placeholder-gray-500"
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
        />
        {errors.qualification && <p className="text-red-500 text-xs">{errors.qualification}</p>}

        <input
          className="w-full bg-white px-4 py-3 rounded-md border border-gray-300 placeholder-gray-500"
          type="text"
          name="location"
          placeholder="Current Location, City"
          value={formData.location}
          onChange={handleChange}
        />
        {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
      </div>
    </div>
  );
};

export default ApplicationForm;
