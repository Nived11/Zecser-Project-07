
import React from 'react';
import ApplicationForm from '../features/career/components/ApplicationForm';

const ApplicationFormPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#E6E6E6] flex flex-col items-center py-10 px-4">
      <section className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-black mb-2">Career</h2>
        <p className="text-xl font-bold leading-snug">
          <span className="text-[#1e2a78]">Ready to Join Us?</span>{" "}
          <span className="text-[#e3a300]">Let's Get to Know You!</span>
        </p>
      </section>

      <ApplicationForm />
    </div>
  );
};

export default ApplicationFormPage;
