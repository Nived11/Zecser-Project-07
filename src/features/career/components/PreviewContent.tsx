import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
    resumeName,
    resumeURL, // 👈 Receive resumeURL
  } = location.state || {};

  useEffect(() => {
    return () => {
      if (resumeURL) {
        URL.revokeObjectURL(resumeURL); // 🔁 Clean up object URL to prevent memory leaks
      }
    };
  }, [resumeURL]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    alert('Application submitted successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] flex flex-col items-center py-10 px-4">
      <h2 className="text-2xl font-semibold mb-2">Application Preview</h2>
      <p className="text-center font-medium text-lg text-gray-700 mb-6">
        Please review your application before submitting
      </p>

      <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ReviewItem label="Job Title" value={jobTitle} />
          <ReviewItem label="Full Name" value={fullName} />
          <ReviewItem label="Gmail ID" value={email} />
          <ReviewItem label="Phone Number" value={phone} />
          <ReviewItem label="Years of Experience" value={experience} />
          <ReviewItem label="Qualification" value={qualification} />
          <ReviewItem label="Current Location" value={currentLocation} />

          {/* 👇 Resume Link */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-medium">Resume File</span>
            {resumeName && resumeURL ? (
              <a
                href={resumeURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline mt-1"
              >
                📄 {resumeName}
              </a>
            ) : (
              <span className="text-base text-gray-800">-</span>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#001840] text-white rounded hover:bg-[#003080]"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

const ReviewItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm text-gray-500 font-medium">{label}</span>
    <span className="text-base text-gray-800">{value || '-'}</span>
  </div>
);

export default ApplicationPreviewPage;
