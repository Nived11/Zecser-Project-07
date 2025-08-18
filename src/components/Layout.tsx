import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AboutUs: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs; 