import React from "react";

import {
  SubAdminHeroBanner,
  SubAdminContentSection,
  SubAdminFeatureCards,
} from "../../features/subAdmin";

const SubAdminHome: React.FC = () => {
  return (
    <>
      <SubAdminHeroBanner />
      <SubAdminContentSection />
      <SubAdminFeatureCards />
    </>
  );
};

export default SubAdminHome;
