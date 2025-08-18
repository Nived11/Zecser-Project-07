import React from 'react';
import ClassroomScene from '../../../assets/about banner.jpg';

const SubAdminContentSection: React.FC = () => {
  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <div className="w-full h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <img src={ClassroomScene} alt="adminBanner" className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-black-800 stroke-2" />
                </div>
              </div>
            </div>
            
            {/* Right Column - Text */}
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Our Commitment to Education</h3>
              <div className="space-y-4 text-gray-600">
                <p className="text-md leading-relaxed">
                  Classes are conducted by highly qualified teachers with post-graduation. Children who need 
                  additional learning support are provided. Children who are good at learning are given many 
                  opportunities through quiz competitions and scholarship exams.
                </p>
                <p className="text-lg leading-relaxed">
                  Teachers are always vigilant in raising children with good discipline and sense of value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminContentSection; 