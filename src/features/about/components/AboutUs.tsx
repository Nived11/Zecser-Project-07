import React from "react";
import aboutBanner from "../../../assets/about banner.jpg";
import vision from "../../../assets/Rectangle 22.png";
import ideal from "../../../assets/Rectangle 21.png";

const AboutUs: React.FC = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="w-full bg-gray-200 py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Background Image with 3-panel effect */}
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-120 rounded-lg overflow-hidden">
              <img
                src={aboutBanner}
                alt="Classroom scene banner"
                className="w-full h-full object-cover"
              />
              {/* 3-panel overlay effect */}
              <div className="absolute inset-0 flex">
                <div className="flex-1 border-r-5 border-white/100"></div>
                <div className="flex-1 border-r-5  border-white/100"></div>
                <div className="flex-1"></div>
              </div>
            </div>

            {/* Overlay with Title */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40 rounded-lg">
              <div className="text-center">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center drop-shadow-2xl px-4 mb-2">
                  About Us
                </h1>
                <div className="w-16 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Content Section */}
      <div className="w-full bg-gray-200 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
              About Us
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-start">
              {/* Left Column - Image (takes 2/5 of space - approximately 40%) */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={ideal}
                    alt="Ideal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text (takes 3/5 of space - approximately 60%) */}
              <div className="lg:col-span-3 order-1 lg:order-2 space-y-3 sm:space-y-4 text-gray-600 text-justify">
                <p className="text-full-length">
                  Mar Thoma High school Kuriannoor is the goddess of education
                  which gave the first light of knowledge to thousands of
                  individuals in the small village of Kuriannoor. In its journey
                  of 104 years of, the school has becime instrumental in the
                  shaping up of many esteemed personalities like scientists,
                  doctors, engineers, experts in sports etc. There are Many of
                  the school's alumni are holding prestigious positions in
                  various parts of the world.
                </p>
                <p className="">
                  Marthoma High School, established in 1921, has completed 104
                  years in the year 2025. 104 years is a long period for a
                  school. Our forefathers started this school in Kuriannoor at a
                  time when there were no adequate educational institutions even
                  in the urban areas of Kerala. Today, this school is on the
                  path of excellence with innovative ideas and excellent
                  activities, spreading the glory of knowledge to students all
                  over the village of Kuriannoor. This school stands tall by
                  achieving excellent achievements in the field of curricular
                  and extra-curricular activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="bg-gray-200 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Left Column - Text */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Our Vision
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  At our school, our vision is to create a nurturing environment
                  where every child feels valued, inspired, and empowered to
                  reach their full potential. We aim to instill a love for
                  learning through curiosity, creativity, and critical thinking.
                  Our goal is to develop responsible global citizens who respect
                  diversity and uphold moral values. We envision a future where
                  students are not only academically strong but also emotionally
                  and socially aware. We strive to integrate technology and
                  innovation into education to prepare students for a dynamic
                  world. Our school promotes teamwork, leadership, and service
                  to the community. We believe in holistic development that
                  balances intellect, physical health, and character. We aspire
                  to build lifelong learners who contribute positively to
                  society. Our educators are committed to excellence and
                  continuous improvement. Through this vision, we aim to shape
                  the leaders of tomorrow.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="order-1 lg:order-2">
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={vision}
                    alt="Vision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="w-full bg-gray-200 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Card 1 - Ideal Academic Activities */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Ideal Academic Activities
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our comprehensive academic program includes innovative
                  teaching methods, hands-on learning experiences, and regular
                  assessments to ensure continuous improvement and academic
                  excellence.
                </p>
              </div>

              {/* Card 2 - SSLC */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  SSLC
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We prepare students for the Secondary School Leaving
                  Certificate (SSLC) examination with rigorous training,
                  comprehensive study materials, and regular mock tests to
                  ensure excellent results.
                </p>
              </div>

              {/* Card 3 - USS, NMMS Scholarships */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  USS, NMMS Scholarships
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We support and guide students in applying for various
                  scholarships including USS and NMMS, providing them with
                  opportunities to pursue higher education and achieve their
                  academic goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
