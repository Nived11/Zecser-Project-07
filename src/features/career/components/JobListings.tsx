import React, { useState } from "react";
import type { Job } from "../../../types/career";
import { Link } from "react-router-dom";

const jobs: Job[] = [
  { id: 1, title: "Front Desk Executive", description: "Lorem ipsum dolor sit amet..." },
  { id: 2, title: "Admission Officer", description: "Lorem ipsum dolor sit amet..." },
  { id: 3, title: "Computer Science Teacher", description: "Lorem ipsum dolor sit amet..." },
  { id: 4, title: "Exam Coordinator", description: "Lorem ipsum dolor sit amet..." },
  { id: 5, title: "Mathematics Teacher(LP)", description: "Lorem ipsum dolor sit amet..." },
  { id: 6, title: "Physics Teacher(HS)", description: "Lorem ipsum dolor sit amet..." },
  { id: 7, title: "Chemistry Teacher", description: "Lorem ipsum dolor sit amet..." },
  { id: 8, title: "English Teacher", description: "Lorem ipsum dolor sit amet..." },
  { id: 9, title: "Biology Teacher", description: "Lorem ipsum dolor sit amet..." },
  { id: 10, title: "Librarian", description: "Lorem ipsum dolor sit amet..." },
  { id: 11, title: "Admission Officer", description: "Lorem ipsum dolor sit amet..." },
  { id: 12, title: "Computer Science Teacher", description: "Lorem ipsum dolor sit amet..." },
  { id: 13, title: "Watchman", description: "Lorem ipsum dolor sit amet..." },
  { id: 14, title: "care taker", description: "Lorem ipsum dolor sit amet..." },
  { id: 15, title: "Physics Teacher(up)", description: "Lorem ipsum dolor sit amet..." },
  { id: 16, title: "Bus Driver", description: "Lorem ipsum dolor sit amet..." },
  { id: 17, title: "Social Science", description: "Lorem ipsum dolor sit amet..." },
  { id: 18, title: "Lab Assistant", description: "Lorem ipsum dolor sit amet..." },
  { id: 19, title: "Malayalam Teacher(HS)", description: "Lorem ipsum dolor sit amet..." },
];

const JobListings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const visibleJobs = filteredJobs.slice(0, visibleCount);
  const showSeeMore = filteredJobs.length > visibleCount;

  return (
    <section className="px-6 py-10 bg-[#f8f8f8] ">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Job Listings</h2>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(8);
          }}
          className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-64"
        />
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <h4 className="text-lg font-semibold mb-2">{job.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{job.description}</p>
            <Link to={`/career/jobs/${job.id}`}>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* See More */}
      {showSeeMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount(filteredJobs.length)}
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default JobListings;
