import React from 'react';
import SubAdminFeatureCard from './SubAdminFeatureCard';

const SubAdminFeatureCards: React.FC = () => {
  const featureCards = [
    {
      title: 'Add Learning Videos',
      icon: (
        <svg className=" w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      linkTo: '/sub-admin/learning-videos'
    },
    {
      title: 'Add Events',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      linkTo: '/sub-admin/events-management'
    },
    
    {
      title: 'Add Students',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      linkTo: '/sub-admin/studentmanagement'
    },
    
    {
      title: 'Add Sports',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      linkTo: '/sub-admin/events-management'
    }
  ];

  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sub-Admin Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <SubAdminFeatureCard
                key={index}
                title={card.title}
                icon={card.icon}
                linkTo={card.linkTo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminFeatureCards; 