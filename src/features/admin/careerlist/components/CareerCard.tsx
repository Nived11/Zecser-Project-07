import type { Career } from "../types";
import { Link } from "react-router-dom";

const CareerCard = ({ id, title, department, jobType, applyBy }: Career) => {
  return (
    <div className="rounded-lg shadow overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gray-200 text-center py-2">
        <h4 className="text-gray-800 font-semibold text-sm">{title}</h4>
      </div>

      <div className="bg-white p-5 space-y-3">
        {/* Job Title */}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {/* Details with centered colon */}
        <div className="text-sm text-gray-700 space-y-1">
          <div className="grid grid-cols-[120px_10px_1fr]">
            <span className="font-medium text-gray-800">Department</span>
            <span className="text-center">:</span>
            <span>{department}</span>
          </div>
          <div className="grid grid-cols-[120px_10px_1fr]">
            <span className="font-medium text-gray-800">Job Type</span>
            <span className="text-center">:</span>
            <span>{jobType}</span>
          </div>
          <div className="grid grid-cols-[120px_10px_1fr]">
            <span className="font-medium text-gray-800">Apply By</span>
            <span className="text-center">:</span>
            <span className="text-gray-600">{applyBy}</span>
          </div>
        </div>

        {/* Buttons: View Applicants & View More */}
        <div className="flex justify-between items-center pt-3">
          <Link to="/admin/applicants">
            <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded shadow hover:bg-gray-800">
              View Applicants
            </button>
          </Link>

          <Link to={`/admin/career/${id}`}>
            <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded shadow hover:bg-gray-800">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
