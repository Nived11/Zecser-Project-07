import React from 'react';
import { Input } from '../../../../components/ui/input';

interface EventsFiltersProps {
  searchTerm: string;
  statusFilter: string;
  filteredEventsCount: number;
  totalEventsCount: number;
  onSearchChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
}

const EventsFilters: React.FC<EventsFiltersProps> = ({
  searchTerm,
  statusFilter,
  filteredEventsCount,
  totalEventsCount,
  onSearchChange,
  onStatusFilterChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        <div className="flex-1 w-full">
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div className="text-sm text-gray-600 w-full lg:w-auto text-center lg:text-left">
          {filteredEventsCount} of {totalEventsCount} events
        </div>
      </div>
    </div>
  );
};

export default EventsFilters; 