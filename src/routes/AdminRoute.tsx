import { Route } from "react-router-dom";
import {
  AdminFacultyPage,
  AdminHome,
  EventsManagement,
  ManageLearningVideos,
  News as AdminNews,
  ResetPassword,
  StudentManagement,
  UploadedVideosListPage,
  AddvaccancyPage,
  ApplicantslistsPage,
  ApplicantlistPage,
  EditVaccancyPage,
  CareerListPage,
  CareerDetailPage,
} from "../pages/admin";
import AdminOnlyRoute from "../components/route-protection/AdminOnlyRoute";
import AdminLayout from "../layouts/AdminLayout";

const AdminRoutes = () => (
  <Route path="/admin/*" element={<AdminOnlyRoute />}>
    <Route element={<AdminLayout />}>
      <Route index element={<AdminHome />} />
      <Route path="studentmanagement" element={<StudentManagement />} />
      <Route path="career" element={<CareerListPage />} />
      <Route path="career/:id" element={<CareerDetailPage />} />
      <Route path="add-vaccancy" element={<AddvaccancyPage />} />
      <Route path="edit-vaccancy/:id" element={<EditVaccancyPage />} />
      <Route path="applicants" element={<ApplicantslistsPage />} />
      <Route path="applicants/:id" element={<ApplicantlistPage />} />
      <Route path="news" element={<AdminNews />} />
      <Route path="faculty" element={<AdminFacultyPage />} />
      <Route
        path="learning-videos/upload"
        element={<ManageLearningVideos type="Admin Panel" />}
      />
      <Route
        path="learning-videos"
        element={<UploadedVideosListPage type="Admin Panel" />}
      />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="events-management" element={<EventsManagement />} />
    </Route>
  </Route>
);

export default AdminRoutes;
