import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../../components/common/ErrorMessage";
import { Skeleton } from "../../../components/ui/skeleton";
import { useSubjects } from "../hooks/useSubjects";

const SubjectsOverview = () => {
  const { data, error, isLoading, refetch,classNo } = useSubjects();
  const navigate = useNavigate()

  const renderError = error && (<ErrorMessage message="Failed to load subjects. Please try again."onRetry={() => refetch()}/>);
  
  const renderItems =
    !isLoading && !error && (data?.length > 0 ? data?.map((subject, index) => (
      <div
        onClick={()=>navigate(`/learning?class=${classNo}&subject=${subject}`)}
        key={index}
        className="px-6 py-3 text-center cursor-pointer shadow hover:opacity-80 active:translate-y-1 ease-in-out duration-200 rounded bg-[#D9D9D9] font-semibold text-lg md:text-xl" >{subject}
      </div>)): <p className="text-center mt-6 text-gray-600">No results found.</p>)
      
    

  const renderLoading = isLoading && Array.from({ length: 5 }).map((_, i) => (
      <Skeleton key={i} className="h-[50px] rounded w-full bg-gray-300" />
    ));

  return (
    <div className="p-[20px] max-w-[600px] mx-auto space-y-4 md:space-y-6">
      {renderError}
      {renderLoading}
      {renderItems}
    </div>
  );
};

export default SubjectsOverview;
