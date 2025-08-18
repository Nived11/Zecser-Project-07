import { Route } from "react-router-dom";
import ProtectedRoute from "../components/route-protection/ProtectedRoute";
import {
  AboutUs,
  CareerPage,
  JobDetailPage,
  ApplicationFormPage,
  ApplicationPreviewPage,
  ApplicationReviewPage,
  SportsPage,
  FacultyPage,
  News,
  NewsDetails,
  Events,
  EventsDetails,
  WeProvide,
  UserHome,
  Learning,
  ContactUs,
} from "../pages";
import PublicLayout from "../layouts/PublicLayout";

const UserRoute = () => (
  <Route element={<ProtectedRoute />}>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<UserHome />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/career/jobs/:id" element={<JobDetailPage />} />
      <Route path="/career/application-form" element={<ApplicationFormPage />} />
      <Route path="/career/application-review" element={<ApplicationReviewPage />} />
      <Route path="/career/application-preview" element={<ApplicationPreviewPage />} />
      <Route path="/sports" element={<SportsPage />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/details/:id" element={<NewsDetails />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/details/:id" element={<EventsDetails />} />
      <Route path="/we-provide" element={<WeProvide />} />
    </Route>
  </Route>
);

export default UserRoute;
