import { useParams, useNavigate } from "react-router-dom";
import { useCareers } from "./hooks/useCareers";
import { FaUserCircle } from "react-icons/fa";

const CareerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { careers, isLoading } = useCareers();
  const navigate = useNavigate();

  const career = careers.find((c) => c.id === id);

  // Show skeleton loader while data is loading
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto my-10 animate-pulse space-y-4">
        <div className="bg-gray-300 h-14 rounded-md" />
        <div className="bg-gray-300 h-6 w-1/2 rounded-md" />
        <div className="bg-gray-300 h-6 w-1/3 rounded-md" />
        <div className="bg-gray-300 h-6 w-2/3 rounded-md" />
        <div className="bg-gray-300 h-40 rounded-md" />
      </div>
    );
  }

  // Show error after loading completes
  if (!career) {
    return <p className="text-red-500 text-center mt-10">Career not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {/* Header */}
        <div className="bg-gray-300 flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-800 text-white rounded-full p-2 text-xl">
              <FaUserCircle />
            </div>
            <span className="font-medium text-gray-700">{career.title}</span>
          </div>
          <button
            className="text-sm text-blue-600 font-medium hover:underline"
            onClick={() => navigate(`/admin/edit-vaccancy/${career.id}`)}
          >
            Edit
          </button>
        </div>

        {/* Job Info */}
        <div className="p-5 space-y-2">
          <div>
            <strong className="text-gray-800">Job Title:</strong>{" "}
            <span className="text-gray-700">{career.title}</span>
          </div>
          <div>
            <strong className="text-gray-800">Department:</strong>{" "}
            <span className="text-gray-700">{career.department}</span>
          </div>
          <div>
            <strong className="text-gray-800">Job Type:</strong>{" "}
            <span className="text-gray-700">{career.jobType}</span>
          </div>
          <div>
            <strong className="text-gray-800">Location:</strong>{" "}
            <span className="text-gray-700">{career.location}</span>
          </div>
          <div>
            <strong className="text-gray-800">Apply By:</strong>{" "}
            <span className="text-gray-700">{career.applyBy}</span>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white border-t p-5 space-y-4">
          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-1">Job Description</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              We are seeking an enthusiastic {career.title} to nurture the academic and emotional growth of
              children in Grades 1–3. The ideal candidate will foster curiosity and build foundational skills
              through creative, age-appropriate teaching methods.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-1">Qualification Required</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Bachelor’s Degree + B.Ed / D.El.Ed / TTC (Mandatory)</li>
              <li>1+ year of teaching experience preferred</li>
              <li>Strong classroom management skills</li>
              <li>Good command of spoken and written English</li>
              <li>Passionate about early education and child development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
