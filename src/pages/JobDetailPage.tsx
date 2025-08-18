import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs.json";

const JobDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-xl">
        Job not found.
      </div>
    );
  }

  const handleApply = () => {
    navigate("/career/application-form", { state: { jobTitle: job.title } });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg my-10">
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{job.title}</h1>

      {/* Subsection: Location */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-1">Location</h2>
        <p className="text-gray-600">{job.location}</p>
      </div>

      {/* Subsection: Experience */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-1">Experience</h2>
        <p className="text-gray-600">{job.experience}</p>
      </div>

      {/* Subsection: Requirements */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-1">Requirements</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {job.requirements?.map((req: string, idx: number) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleApply}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-300"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetailPage;
