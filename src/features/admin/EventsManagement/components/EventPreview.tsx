import React from 'react';
import { Button } from '../../../../components/ui/button';
import type { Event } from '../types';

interface EventPreviewProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
  getStatusColor: (status: string) => string;
  getCategoryColor: (category: string) => string;
}

const EventPreview: React.FC<EventPreviewProps> = ({
  event,
  isOpen,
  onClose,
  onEdit,
  onDelete,
  getStatusColor,
  getCategoryColor
}) => {
  if (!isOpen || !event) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
            <p className="text-sm text-gray-500 mt-1">Event ID: {event.id}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Event Details */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </div>

            {/* Event Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Event Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Date</span>
                  <p className="text-gray-900 font-medium">{formatDate(event.date)}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">Time</span>
                  <p className="text-gray-900 font-medium">{formatTime(event.time)}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">Location</span>
                  <p className="text-gray-900 font-medium">{event.location}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">Organizer</span>
                  <p className="text-gray-900 font-medium">{event.organizer}</p>
                </div>
              </div>
            </div>

            {/* Status and Category */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Status & Category</h3>
              
              <div className="flex flex-wrap gap-3">
                <div>
                  <span className="text-sm font-medium text-gray-500 block mb-1">Status</span>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500 block mb-1">Category</span>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Created Date */}
            <div>
              <span className="text-sm font-medium text-gray-500">Created</span>
              <p className="text-gray-900">{formatDate(event.createdAt)}</p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Event Images</h3>
            
            {event.images && event.images.length > 0 ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  {event.images.length} image{event.images.length !== 1 ? 's' : ''} uploaded
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {event.images.map((imageUrl: string, index: number) => (
                    <div key={index} className="relative group">
                      <img
                        src={imageUrl}
                        alt={`Event ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-sm">No images uploaded</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
          <Button
            onClick={() => {
              onEdit(event);
              onClose();
            }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Edit Event
          </Button>
          <Button
            onClick={() => {
              onDelete(event.id);
              onClose();
            }}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Event
          </Button>
          <Button
            onClick={onClose}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventPreview; 