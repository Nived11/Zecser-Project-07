import React from "react";
import {
  AdminHeroBanner,
  AdminContentSection,
  AdminFeatureCards,
} from "../../features/admin/home";

const AdminHome: React.FC = () => {
  return (
    <>
      <AdminHeroBanner />
      <AdminContentSection />
      <AdminFeatureCards />
    </>
  );
};

export default AdminHome;
