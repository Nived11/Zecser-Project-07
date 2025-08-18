import type { Career } from "../types";
import { Link } from "react-router-dom";

const CareerCard = ({ id, title, department, location, jobType, applyBy }: Career) => {
  return (
    <div className="rounded-lg shadow overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gray-200 text-center py-2">
        <h4 className="text-gray-800 font-semibold text-sm">{title}</h4>
      </div>

      <div className="bg-white p-5 space-y-2">
        <h3 className="text-md font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">Department: {department}</p>
        <p className="text-sm">Job Type: {jobType}</p>
        <p className="text-sm">Location: {location}</p>
        <p className="text-sm text-gray-500">Apply by: {applyBy}</p>

        {/* Buttons: View Applicants & View More */}
        <div className="flex justify-between items-center pt-2">
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
