import React from 'react';
import { Link } from 'react-router-dom';

interface SubAdminFeatureCardProps {
  title: string;
  icon: React.ReactNode;
  linkTo: string;
}

const SubAdminFeatureCard: React.FC<SubAdminFeatureCardProps> = ({ title, icon, linkTo }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <Link to={linkTo}>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add
        </button>
      </Link>
    </div>
  );
};

export default SubAdminFeatureCard; 