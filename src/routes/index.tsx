import { Routes, Route } from "react-router-dom";
import StudentLogin from "../pages/StudentLogin";
import NotFound from "../pages/NotFound";
import UserRoute from "./UserRoute";
import AdminRoutes from "./AdminRoute";
import SubAdminRoutes from "./SubAdminRoutes";
import { SubAdminLogin } from "../pages/admin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<StudentLogin />} />
      <Route path="/admin/login" element={<SubAdminLogin admin={true} />} />
      <Route
        path="/sub-admin/login"
        element={<SubAdminLogin admin={false} />}
      />
      {UserRoute()}
      {AdminRoutes()}
      {SubAdminRoutes()}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
