import React from "react";

const ApplicationProcess: React.FC = () => {
  return (
    <section className="bg-white p-6 md:p-10 rounded-lg shadow-md mt-8 max-w-5xl mx-auto">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Application Process</h3>
      <ol className="list-decimal list-inside space-y-6 text-sm sm:text-base text-gray-700">
        <li>
          <p className="font-semibold text-gray-900">1. Apply Now</p>
          <p>Browse available positions and select the role that matches your interests and qualifications.</p>
        </li>
        <li>
          <p className="font-semibold text-gray-900">2. Enter Your Details & Upload Resume</p>
          <p>Complete the application form with your personal information and attach your updated resume.</p>
        </li>
        <li>
          <p className="font-semibold text-gray-900">3. Preview Your Application</p>
          <p>Review all entered details to ensure accuracy before submission.</p>
        </li>
        <li>
          <p className="font-semibold text-gray-900">4. Submit Application</p>
          <p>Send your application for consideration. Our recruitment team will get in touch with shortlisted candidates.</p>
        </li>
      </ol>
    </section>
  );
};

export default ApplicationProcess;
