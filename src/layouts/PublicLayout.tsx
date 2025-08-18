import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
