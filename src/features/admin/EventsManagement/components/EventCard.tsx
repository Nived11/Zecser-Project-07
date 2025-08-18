import React, { useState } from 'react';
import { Button } from '../../../../components/ui/button';
import EventPreview from './EventPreview';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
  getStatusColor: (status: string) => string;
  getCategoryColor: (category: string) => string;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
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
      <div className="border-b border-gray-200 p-4 hover:bg-gray-50">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{event.description}</p>
            <p className="text-xs text-gray-500 mt-1">Organizer: {event.organizer}</p>
          </div>
          
          {/* Event Images */}
          {event.images && event.images.length > 0 && (
            <div className="mt-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Event Images ({event.images.length})</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {event.images.slice(0, 8).map((imageUrl: string, index: number) => (
                  <div key={index} className="relative">
                    <img
                      src={imageUrl}
                      alt={`Event ${index + 1}`}
                      className="w-full h-16 object-cover rounded-md border border-gray-200"
                    />
                    {index === 7 && event.images!.length > 8 && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                        <span className="text-white text-xs font-medium">
                          +{event.images!.length - 8} more
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Date:</span>
              <p className="text-gray-900">{event.date}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Time:</span>
              <p className="text-gray-900">{event.time}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Location:</span>
              <p className="text-gray-900">{event.location}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Category:</span>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
              {event.status}
            </span>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
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
          </div>
        </div>
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

export default EventCard; 