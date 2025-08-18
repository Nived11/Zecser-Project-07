import React, { useState } from 'react';
import { Button } from '../../../../components/ui/button';
import EventPreview from './EventPreview';
import type { Event } from '../types';

interface EventsTableProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
  getStatusColor: (status: string) => string;
  getCategoryColor: (category: string) => string;
}

const EventsTable: React.FC<EventsTableProps> = ({
  events,
  onEdit,
  onDelete,
  getStatusColor,
  getCategoryColor
}) => {
  const [previewEvent, setPreviewEvent] = useState<Event | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreview = (event: Event) => {
    setPreviewEvent(event);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setPreviewEvent(null);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{event.title}</div>
                    <div className="text-sm text-gray-500 mt-1">{event.description}</div>
                    <div className="text-xs text-gray-400 mt-1">Organizer: {event.organizer}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{event.date}</div>
                  <div className="text-sm text-gray-500">{event.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {event.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={() => handlePreview(event)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-xs w-full sm:w-auto"
                    >
                      Preview
                    </Button>
                    <Button
                      onClick={() => onDelete(event.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 text-xs w-full sm:w-auto"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EventPreview
        event={previewEvent}
        isOpen={isPreviewOpen}
        onClose={handleClosePreview}
        onEdit={onEdit}
        onDelete={onDelete}
        getStatusColor={getStatusColor}
        getCategoryColor={getCategoryColor}
      />
    </>
  );
};

export default EventsTable; 