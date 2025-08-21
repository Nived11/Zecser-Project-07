// components/VacancyFormSkeleton.tsx
export default function VacancyFormSkeleton() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-6 animate-pulse space-y-6">
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/6"></div>
        <div className="flex space-x-6">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="h-10 bg-gray-400 rounded w-32"></div>
    </div>
  );
}
