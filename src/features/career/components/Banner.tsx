import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-between gap-8 mb-10 px-4">
      {/* Left Banner with Background Image */}
      <div className="relative flex-1 min-w-[300px]">
        <img
          src="/banner.png"
          alt="Career Banner"
          className="w-full h-auto max-h-[280px] rounded-xl object-cover"
        />

        {/* Top Overlay Text */}
        <div className="absolute top-4 left-5 text-white">
          <p className="text-[22px] font-semibold leading-snug">
            BE A PART OF OUR <br />
            <strong>JOURNEY</strong>
          </p>
        </div>
      </div>

      {/* Application Process (Right Side) */}
      <div className="flex-1 min-w-[300px]">
        <h3 className="text-lg font-bold mb-4">Application Process</h3>
        <ol className="text-sm leading-relaxed list-decimal list-inside space-y-2">
          <li>
            <strong>Apply Now</strong>
            <br />
            Browse available positions and select the role that matches your interests and qualifications.
          </li>
          <li>
            <strong>Enter Your Details & Upload Resume</strong>
            <br />
            Complete the application form with your personal information and attach your updated resume.
          </li>
          <li>
            <strong>Preview Your Application</strong>
            <br />
            Review all entered details to ensure accuracy before submission.
          </li>
          <li>
            <strong>Submit Application</strong>
            <br />
            Send your application for consideration. Our recruitment team will get in touch with shortlisted candidates.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Banner;
