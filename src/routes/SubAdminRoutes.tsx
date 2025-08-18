import { Route } from "react-router-dom";
import { SubAdminHome } from "../pages/SubAdmin";
import SubAdminOnlyRoute from "../components/route-protection/SubAdminOnlyRoute";
import SubAdminLayout from "../layouts/SubAdminLayout";
import { EventsManagement, ManageLearningVideos, ResetPassword, StudentManagement, UploadedVideosListPage } from "../pages/admin";

const SubAdminRoutes = () => (
  <Route path="/sub-admin/*" element={<SubAdminOnlyRoute />}>
    <Route element={<SubAdminLayout />}>
      <Route index element={<SubAdminHome />} />
      <Route path="studentmanagement" element={<StudentManagement />} />
      <Route path="learning-videos/upload" element={<ManageLearningVideos type="Sub-Admin Panel" />} />
      <Route path="learning-videos" element={<UploadedVideosListPage type="Sub-Admin Panel" />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="events-management" element={<EventsManagement />} />
    </Route>
  </Route>
);

export default SubAdminRoutes;
