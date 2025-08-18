import { Outlet } from "react-router-dom";
import Header from "../components/admin-header/Header";
import Footer from "../components/common/Footer";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header type="Admin Panel" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLayout;
