import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ApplicationReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const previousData = location.state;

  const [formData, setFormData] = useState({
    relocate: '',
    exploringOpportunities: '',
    salaryExpectations: '',
    questionsOrConcerns: '',
  });

  const [errors, setErrors] = useState({
    relocate: '',
    exploringOpportunities: '',
    salaryExpectations: '',
    questionsOrConcerns: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const validate = () => {
    const newErrors: typeof errors = {
      relocate: '',
      exploringOpportunities: '',
      salaryExpectations: '',
      questionsOrConcerns: '',
    };

    if (!formData.relocate.trim()) newErrors.relocate = 'This field is required.';
    if (!formData.exploringOpportunities.trim()) newErrors.exploringOpportunities = 'This field is required.';
    if (!formData.salaryExpectations.trim()) newErrors.salaryExpectations = 'This field is required.';
    if (formData.questionsOrConcerns.length > 10000)
      newErrors.questionsOrConcerns = 'Must be less than 1,000 characters.';

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === '');
  };

  const handleNext = () => {
    if (validate()) {
      navigate('/career/application-preview', {
        state: {
          ...previousData,
          ...formData,
        },
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl bg-gray-175 rounded-lg shadow-md p-8 relative">
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-3xl text-black hover:text-blue-700 font-bold transition-all"
        >
          ←
        </button>

        <h1 className="text-center text-xl font-semibold mb-6">Career</h1>
        <h2 className="text-center text-md mb-8 font-medium">
          "Answer a Few Questions to Help Us Know You Better"
        </h2>

        <div className="space-y-6">
          <div className="rounded-md p-4">
            <label className="block text-sm font-medium mb-1">Are you willing to relocate if required?</label>
            <input
              type="text"
              name="relocate"
              value={formData.relocate}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.relocate && <p className="text-red-500 text-sm mt-1">{errors.relocate}</p>}
          </div>

          <div className="rounded-md p-4">
            <label className="block text-sm font-medium mb-1">
              Are you currently exploring other job opportunities?
            </label>
            <input
              type="text"
              name="exploringOpportunities"
              value={formData.exploringOpportunities}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.exploringOpportunities && <p className="text-red-500 text-sm mt-1">{errors.exploringOpportunities}</p>}
          </div>

          <div className="rounded-md p-4">
            <label className="block text-sm font-medium mb-1">What are your salary expectations?</label>
            <input
              type="text"
              name="salaryExpectations"
              value={formData.salaryExpectations}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.salaryExpectations && <p className="text-red-500 text-sm mt-1">{errors.salaryExpectations}</p>}
          </div>

          <div className="rounded-md p-4">
            <label className="block text-sm font-medium mb-1">
              Do you have any questions or concerns before we move forward?
            </label>
            <textarea
              name="questionsOrConcerns"
              value={formData.questionsOrConcerns}
              onChange={handleChange}
              rows={4}
              placeholder="Describe...."
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.questionsOrConcerns && (
              <p className="text-red-500 text-sm mt-1">{errors.questionsOrConcerns}</p>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleNext}
            className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-all"
          >
            Go to preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReviewPage;
