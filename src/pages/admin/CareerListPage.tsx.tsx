import { useState } from "react";
import {
  CareerCard,
  FilterBar,
  useCareers,
} from "../../features/admin/careerlist";

const PAGE_SIZE = 5;

const CareerListPage = () => {
  const { careers } = useCareers();
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const statusOptions = ["All", "Open", "Closed"];

  const filtered = careers.filter((career) => {
    const matchesStatus =
      statusFilter === "All" || (career as any)?.status === statusFilter;

    const matchesSearch =
      career.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedCareers = filtered.slice(start, start + PAGE_SIZE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">New Job Vacancies</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search by job role..."
          className="px-4 py-2 w-full md:w-1/3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <FilterBar
          selected={statusFilter}
          onChange={(val) => {
            setStatusFilter(val);
            setCurrentPage(1);
          }}
          options={statusOptions}
          label="Status"
        />
      </div>

      {paginatedCareers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {paginatedCareers.map((career) => (
            <CareerCard key={career.id} {...career} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-12">
          No careers found for current search or filter.
        </p>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            aria-label="Previous Page"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-1 rounded text-sm font-medium ${
                currentPage === page
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            aria-label="Next Page"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CareerListPage;
