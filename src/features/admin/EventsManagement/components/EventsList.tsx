import React from 'react';
import EventCard from './EventCard';
import EventsTable from './EventsTable';
import type { Event } from '../types';

interface EventsListProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
  getStatusColor: (status: string) => string;
  getCategoryColor: (category: string) => string;
}

const EventsList: React.FC<EventsListProps> = ({
  events,
  onEdit,
  onDelete,
  getStatusColor,
  getCategoryColor
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Mobile Cards View */}
      <div className="block lg:hidden">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onEdit={onEdit}
            onDelete={onDelete}
            getStatusColor={getStatusColor}
            getCategoryColor={getCategoryColor}
          />
        ))}
      </div>
      
      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <EventsTable
          events={events}
          onEdit={onEdit}
          onDelete={onDelete}
          getStatusColor={getStatusColor}
          getCategoryColor={getCategoryColor}
        />
      </div>
    </div>
  );
};

export default EventsList; 