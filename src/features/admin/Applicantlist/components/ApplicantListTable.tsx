import { Link } from "react-router-dom";
import { useApplicants } from "../hooks/useApplicants";

const ApplicantListTable = () => {
  const { applicants } = useApplicants();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Applicants</h2>
      <div className="space-y-4">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex justify-between items-start border-b pb-3"
          >
            <div>
              <Link
                to={`/admin/applicants/${applicant.id}`}
                className="text-base font-medium text-blue-800 hover:underline"
              >
                {applicant.name}
              </Link>
              <div className="text-sm text-gray-500">{applicant.role}</div>
            </div>
            <span className="text-sm text-gray-400">{applicant.appliedOn}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantListTable;
