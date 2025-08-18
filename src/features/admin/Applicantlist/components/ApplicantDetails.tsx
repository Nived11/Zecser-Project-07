import { useParams, Link } from "react-router-dom";
import { useApplicants } from "../hooks/useApplicants";
import type { Applicant } from "../index"; 
import { ArrowLeft } from "lucide-react";

const ApplicantDetails = () => {
  const { id } = useParams();
  const { getApplicantById } = useApplicants();
  const applicant: Applicant | undefined = getApplicantById(id || "");

  if (!applicant) return <div className="text-center p-8">Applicant not found.</div>;

  return (
    <div className="bg-white rounded-xl p-8 shadow-md">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link to="/admin/applicants" className="mr-3">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <p className="text-sm text-gray-500">Applicants info</p>
          <h2 className="text-xl font-semibold">{applicant.name} <span className="font-normal text-sm">• {applicant.role}</span></h2>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {/* Resume Viewer */}
        <div className="w-full md:w-1/2 h-[600px] border rounded-xl overflow-hidden shadow-sm">
          <iframe
            src="/resumes/Best-Resume-Template-Free-Download-MS-Word--724x1024.jpg"
            title="Resume"
            className="w-full h-full"
          />
        </div>

        {/* General Information */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-4">General Information</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-semibold">Job Title:</span>
              <span>Primary Teacher</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Full Name:</span>
              <span className="text-black font-medium">{applicant.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Email ID:</span>
              <span>{applicant.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Phone Number:</span>
              <span>{applicant.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Years of Experience:</span>
              <span>{applicant.experience}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Qualification:</span>
              <span>{applicant.qualification}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Current Location, City:</span>
              <span>{applicant.currentLocation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;
