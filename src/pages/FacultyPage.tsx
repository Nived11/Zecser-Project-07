import React from "react";
import FacultyCard, {
  dummyFaculty,
  memoriamFaculty,
} from "../features/faculty/components/facultyCard";

const FacultyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-8">
      <h1 className="text-xl font-bold text-center mb-6">Our Faculties</h1>

      {/* --- Active Faculty --- */}
      <section className="mb-8">
        <h2
          className="text-lg font-semibold text-white text-center px-4 py-3 rounded-md"
          style={{
            background: "linear-gradient(to right, #eeeeee, #001242, #eeeeee)",
          }}
        >
          Meet Our Dedicated Team
        </h2>
        <p className="text-sm text-gray-700 mt-2 mb-4 text-center max-w-4xl mx-auto">
          The Dedicated Faculty are the present-day educators who bring energy,
          passion, and purpose into every classroom...
        </p>

        <div className="overflow-x-auto w-full mt-4 scroll-thin">
          <div className="inline-flex gap-4 px-4 py-2 min-w-full justify-center ">
            {dummyFaculty.map((member, idx) => (
              <div key={`team-${idx}`} className="min-w-[200px]">
                <FacultyCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Retired Faculty --- */}
      <section className="mb-8">
        <h2
          className="text-lg font-semibold text-white text-center px-4 py-3 rounded-md"
          style={{
            background: "linear-gradient(to right, #eeeeee, #001242, #eeeeee)",
          }}
        >
          Thank You for the Years of Service (Retired)
        </h2>
        <p className="text-sm text-gray-700 mt-2 mb-4 text-center max-w-4xl mx-auto">
          Our Retired Faculty have spent decades dedicating their lives to
          education...
        </p>

        <div className="overflow-x-auto w-full mt-4 scroll-thin">
          <div className="inline-flex gap-4 px-4 py-2 min-w-full justify-center ">
            {dummyFaculty.map((member, idx) => (
              <div key={`retired-${idx}`} className="min-w-[200px]">
                <FacultyCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- In Memoriam --- */}
      <section>
        <h2
          className="text-lg font-semibold text-white text-center px-4 py-3 rounded-md"
          style={{
            background: "linear-gradient(to right, #eeeeee, #001242, #eeeeee)",
          }}
        >
          Forever in Our Hearts
        </h2>
        <p className="text-sm text-gray-700 mt-2 mb-4 text-center max-w-4xl mx-auto">
          This section is a tribute to those teachers who are no longer with
          us...
        </p>

        <div className="overflow-x-auto w-full mt-4 scroll-thin">
          <div className="inline-flex gap-4 px-4 py-2 min-w-full justify-center ">
            {memoriamFaculty.map((member, idx) => (
              <div key={`memoriam-${idx}`} className="min-w-[200px]">
                <FacultyCard {...member} isInMemoriam />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;
