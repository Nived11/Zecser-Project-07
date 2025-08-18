import React from 'react';
import { Button } from '../../../../components/ui/button';

interface EventsHeaderProps {
  totalEvents: number;
  onAddEvent: () => void;
}

const EventsHeader: React.FC<EventsHeaderProps> = ({ totalEvents, onAddEvent }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Events Management</h1>
          <p className="text-gray-600 mt-2">Manage school events, activities, and programs</p>
          <p className="text-sm text-blue-600 mt-1">Total Events: {totalEvents}</p>
        </div>
        <Button 
          onClick={onAddEvent}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg w-full sm:w-auto"
        >
          Add New Event
        </Button>
      </div>
    </div>
  );
};

export default EventsHeader; 