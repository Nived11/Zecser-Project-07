import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface SubAdminHeaderProps {
  className?: string;
}

const SubAdminHeader: React.FC<SubAdminHeaderProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Adjust if using a different auth key
    navigate('/login'); // Redirect after logout
  };

  return (
    <header className={`bg-white border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/subadmin/home" className="text-gray-800 font-bold text-xl flex items-center">
              <svg className="w-8 h-8 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Sub-Admin Portal
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/subadmin/home" className="text-gray-600 hover:text-blue-600 transition">
              Dashboard
            </Link>
            <Link to="/subadmin/student-management" className="text-gray-600 hover:text-blue-600 transition">
              Students
            </Link>
            <Link to="/subadmin/content-creation" className="text-gray-600 hover:text-blue-600 transition">
              Content
            </Link>
            <Link to="/subadmin/event-management" className="text-gray-600 hover:text-blue-600 transition">
              Events
            </Link>
          </nav>

          {/* User Menu and Logout */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <span>Welcome,</span>
              <span className="ml-1 font-medium">Sub-Admin</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SubAdminHeader; 