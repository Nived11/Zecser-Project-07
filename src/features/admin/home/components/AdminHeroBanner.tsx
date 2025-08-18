import React from 'react';
import adminBanner from '../../../../assets/adminhomeimage.png';

const AdminHeroBanner: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-gray-800 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${adminBanner})`,
        opacity: 0.3
      }}></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
              A Place to Learn, Lead, and Succeed!
            </h3>
            <p className="text-sm text-white leading-relaxed max-w-2xl">
              Welcome to MARTHOMA HIGH SCHOOL KURIANNOOR. Our school is a place where education meets inspiration. 
              We focus on the all-round development of every student through quality teaching, moral values, and 
              co-curricular activities. With experienced teachers, modern classrooms, and a supportive environment, 
              we aim to nurture confident, responsible, and future-ready individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeroBanner; 