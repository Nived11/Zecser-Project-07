import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CareerCardSkeleton from "../../features/admin/careerlist/components/CareerCardSkeleton";
import { CareerCard, FilterBar, useCareers } from "../../features/admin/careerlist";

const CareerListPage = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  const [currentPage, setCurrentPage] = useState(1);

  const { careers, isLoading, nextPage, prevPage } = useCareers(
  currentPage,
  debouncedSearch,
  statusFilter
);

  const navigate = useNavigate();
  useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearch(searchTerm);
  }, 400); // 400ms delay

  return () => {
    clearTimeout(handler);
  };
}, [searchTerm]);

  const handlePrev = () => {
    if (prevPage) setCurrentPage((p) => Math.max(p - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (nextPage) setCurrentPage((p) => p + 1);
    window.scrollTo(0, 0);

  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">New Job Vacancies</h1>

      {/* Search & Filter */}
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
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <FilterBar
            selected={statusFilter}
            onChange={(val) => {
              setStatusFilter(val);
              setCurrentPage(1);
            }}
            options={["All", "Open", "Closed"]}
            label="Status"
          />
          <button
            onClick={() => navigate("/admin/add-vaccancy")}
            className="px-4 py-2 text-sm bg-gray-700 rounded-full text-white hover:bg-gray-800 whitespace-nowrap"
          >
            + Add Jobs
          </button>
        </div>
      </div>

      {/* Career Cards */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[...Array(6)].map((_, i) => (
            <CareerCardSkeleton key={i} />
          ))}
        </div>
      ) : careers.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {careers.map((career) => (
              <CareerCard key={career.id} {...career} />
            ))}
          </div>
          {(prevPage || nextPage) && (
            <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
              <button
                onClick={handlePrev}
                disabled={!prevPage}
                className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
              >
                Prev
              </button>
              <span className="px-4 py-1 text-sm font-medium bg-gray-200">
                {currentPage}
              </span>

              <button
                onClick={handleNext}
                disabled={!nextPage}
                className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-12">No careers found</p>
      )}

    </div>
  );
};

export default CareerListPage;
