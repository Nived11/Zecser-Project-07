import React from 'react';
import { Link } from 'react-router-dom';

interface AdminFeatureCardProps {
  title: string;
  icon: React.ReactNode;
  linkTo: string;
}

const AdminFeatureCard: React.FC<AdminFeatureCardProps> = ({ title, icon, linkTo }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-8 text-center">
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <Link to={linkTo}>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Add
        </button>
      </Link>
    </div>
  );
};

export default AdminFeatureCard; 