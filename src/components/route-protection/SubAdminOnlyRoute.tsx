import { Navigate, Outlet } from "react-router-dom";

const SubAdminOnlyRoute = () => {
  const isAdmin = true;

  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
  
};

export default SubAdminOnlyRoute;
