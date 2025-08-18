
import CurriculumSection from "./components/CurriculumSection";
import ActivitiesSection from "./components/ActivitiesSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import FacilitiesSection from "./components/FacilitiesSection";
import { useNavigate } from "react-router-dom";

const UserHomePage = () => {
  const goTo = useNavigate();
  return (
    <div className="bg-white">
      <div
        className="relative bg-cover bg-center h-[300px]"
        style={{ backgroundImage: "url('/schoolfront.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-start p-8 text-white">
          <h1 className="text-2xl font-bold">
            Nurturing Young Minds, Building Futures
          </h1>
          <p className="max-w-md mt-2">
            Empowering students to achieve and exceed academic excellence
            through enriched curriculum, nurturing values and future-ready
            skills.
          </p>
          <button
            onClick={() => goTo("/about")}
            className="mt-4 px-4 py-2 bg-white text-blue-800 rounded font-semibold"
          >
            Learn More
          </button>{" "}
          {/* add redirection here */}
        </div>
      </div>

      <CurriculumSection />
      <ActivitiesSection />
      <StatsSection />
      <FeaturesSection />
      <FacilitiesSection />
    </div>
  );
};

export default UserHomePage;
