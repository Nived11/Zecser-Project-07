import { Outlet } from "react-router-dom";
import Header from "../components/admin-header/Header";
import Footer from "../components/common/Footer";

const SubAdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header type="Sub-Admin Panel" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SubAdminLayout;
