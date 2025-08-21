const CareerCardSkeleton = () => {
  return (
    <div className="rounded-lg shadow overflow-hidden border border-gray-200 animate-pulse">
      <div className="bg-gray-200 text-center py-2">
        <div className="h-4 w-3/4 mx-auto bg-gray-300 rounded"></div>
      </div>
      <div className="bg-white p-5 space-y-3">
        <div className="h-5 w-2/3 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CareerCardSkeleton;
