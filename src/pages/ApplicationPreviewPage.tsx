// [imports unchanged]
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ApplicationPreviewPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    jobTitle,
    fullName,
    email,
    phone,
    experience,
    qualification,
    location: currentLocation,
    resumeFile,
    relocate,
    exploringOpportunities,
    salaryExpectations,
    questionsOrConcerns,
  } = location.state || {};

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: fullName || '',
    email: email || '',
    phone: phone || '',
    experience: experience || '',
    qualification: qualification || '',
    currentLocation: currentLocation || '',
  });

  const [reviewData] = useState({
    relocate: relocate || '',
    exploringOpportunities: exploringOpportunities || '',
    salaryExpectations: salaryExpectations || '',
    questionsOrConcerns: questionsOrConcerns || '',
  });

  const [newResume, setNewResume] = useState<File | null>(resumeFile || null);
  const [resumeName, setResumeName] = useState(resumeFile?.name || '');

  const handleEdit = () => setIsEditing(true);
  const handleDone = () => setIsEditing(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewResume(file);
      setResumeName(file.name);
    }
  };

  const handleSubmit = async () => {
    const result = await Swal.fire({
      title: 'Submit Application?',
      text: 'Are you sure you want to submit your application?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      Swal.fire('Success!', 'Application submitted successfully.', 'success');
      navigate('/career');
    }
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow p-6 flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Application Preview</h2>
          {!isEditing ? (
            <button onClick={handleEdit} className="text-blue-600 underline text-sm">Edit</button>
          ) : (
            <button onClick={handleDone} className="text-green-600 underline text-sm">Done</button>
          )}
        </div>

        <p className="text-center font-bold text-xl text-gray-900">
          {isEditing ? 'Edit your application details below' : 'Please review your application before submitting'}
        </p>

        <div className="flex flex-col md:flex-row gap-1">
          {/* Resume Section */}
          <div className="w-full md:w-1/2">
            <span className="text-md text-black-500 font-medium mb-1">Resume Preview</span>
            <div className="mt-2">
              {newResume?.type === 'application/pdf' ? (
                <div className="w-[350px]"> {/* Adjust width as needed */}
                 <iframe
                  src={URL.createObjectURL(newResume)}
                 title="Resume Preview"
                 className="w-full h-[500px] border rounded"
                 />
              </div>
              ) : newResume ? (
                <span className="text-red-500 text-sm">
                  Cannot preview .doc/.docx files. Uploaded: {resumeName}
                </span>
              ) : (
                <span className="text-gray-600">No resume uploaded</span>
              )}
            </div>
            {isEditing && (
              <div className="mt-4">
                <label className="text-sm text-gray-500 font-medium mb-1 block">Upload New Resume</label>
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
              </div>
            )}
          </div>

          {/* Form Fields */}
          <div className="flex-1 grid grid-cols-1 gap-4">
            <ReviewItem label="Job Title" value={jobTitle} />
            {isEditing ? (
              <>
                <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
                <InputField label="Gmail ID" name="email" value={formData.email} onChange={handleChange} />
                <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                <InputField label="Years of Experience" name="experience" value={formData.experience} onChange={handleChange} />
                <InputField label="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} />
                <InputField label="Current Location" name="currentLocation" value={formData.currentLocation} onChange={handleChange} />
              </>
            ) : (
              <>
                <ReviewItem label="Full Name" value={formData.fullName} />
                <ReviewItem label="Gmail ID" value={formData.email} />
                <ReviewItem label="Phone Number" value={formData.phone} />
                <ReviewItem label="Years of Experience" value={formData.experience} />
                <ReviewItem label="Qualification" value={formData.qualification} />
                <ReviewItem label="Current Location" value={formData.currentLocation} />
              </>
            )}
          </div>
        </div>

        {/* Additional Questions */}
        <hr className="my-6" />
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Questions</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <ReviewItem label="Willing to Relocate?" value={reviewData.relocate} />
          <ReviewItem label="Exploring Other Opportunities?" value={reviewData.exploringOpportunities} />
          <ReviewItem label="Salary Expectations" value={reviewData.salaryExpectations} />
          <div className="col-span-1 sm:col-span-2">
            <ReviewItem label="Questions or Concerns" value={reviewData.questionsOrConcerns} />
          </div>
        </div>

        {!isEditing && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleSubmit}
              className="bg-[#001840] text-white px-10 py-3 rounded-md text-lg font-medium hover:bg-[#003080] transition"
            >
              Submit Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Components
const ReviewItem: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm text-gray-500 font-medium">{label}</span>
    <span className="text-base text-gray-800 break-words">{value || '-'}</span>
  </div>
);

const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-500 font-medium mb-1">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="px-3 py-2 border rounded-md text-sm"
    />
  </div>
);

export default ApplicationPreviewPage;
