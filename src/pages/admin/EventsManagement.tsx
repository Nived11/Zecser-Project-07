import React from 'react';
import { EventForm, EventsFilters, EventsHeader, EventsList, useEventsManagement } from '../../features/admin/EventsManagement';


const EventsManagement: React.FC = () => {
  const {
    events,
    filteredEvents,
    showAddForm,
    editingEvent,
    searchTerm,
    statusFilter,
    formData,
    categories,
    organizers,
    setShowAddForm,
    setSearchTerm,
    setStatusFilter,
    handleAddEvent,
    handleEditEvent,
    handleDeleteEvent,
    handleEdit,
    handleFormDataChange,
    handleCancel,
    getStatusColor,
    getCategoryColor
  } = useEventsManagement();

  return (
    <>
      <div className="min-h-screen bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <EventsHeader 
              totalEvents={events.length}
              onAddEvent={() => setShowAddForm(true)}
            />

            <EventsFilters
              searchTerm={searchTerm}
              statusFilter={statusFilter}
              filteredEventsCount={filteredEvents.length}
              totalEventsCount={events.length}
              onSearchChange={setSearchTerm}
              onStatusFilterChange={setStatusFilter}
            />

            <EventForm
              showForm={showAddForm}
              editingEvent={editingEvent}
              formData={formData}
              onFormDataChange={handleFormDataChange}
              onSubmit={editingEvent ? handleEditEvent : handleAddEvent}
              onCancel={handleCancel}
              categories={categories}
              organizers={organizers}
            />

            <EventsList
              events={filteredEvents}
              onEdit={handleEdit}
              onDelete={handleDeleteEvent}
              getStatusColor={getStatusColor}
              getCategoryColor={getCategoryColor}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsManagement; 