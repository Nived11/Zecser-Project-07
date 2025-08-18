import { useState } from 'react';
import Swal from 'sweetalert2';
import type { Event, FormData } from '../types';


export const useEventsManagement = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Annual Sports Day',
      description: 'Annual sports competition featuring various athletic events for all students.',
      date: '2024-03-15',
      time: '09:00',
      location: 'School Ground',
      category: 'Sports',
      organizer: 'Sports Department',
      status: 'upcoming',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Science Fair 2024',
      description: 'Students showcase their innovative science projects and experiments.',
      date: '2024-02-20',
      time: '14:00',
      location: 'School Auditorium',
      category: 'Academic',
      organizer: 'Science Department',
      status: 'upcoming',
      createdAt: '2024-01-20'
    },
    {
      id: '3',
      title: 'Parent-Teacher Meeting',
      description: 'Quarterly meeting to discuss student progress and academic performance.',
      date: '2024-01-25',
      time: '16:00',
      location: 'Classrooms',
      category: 'Administrative',
      organizer: 'Administration',
      status: 'completed',
      createdAt: '2024-01-10'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    organizer: '',
    status: 'upcoming',
    images: []
  });

  const categories = [
    'Academic',
    'Sports',
    'Cultural',
    'Administrative',
    'Technology',
    'Arts',
    'Community Service',
    'Competition',
    'Workshop',
    'Celebration'
  ];

  const organizers = [
    'Administration',
    'Academic Department',
    'Sports Department',
    'Science Department',
    'Arts Department',
    'Student Council',
    'Parent Association',
    'Technology Club',
    'Cultural Club',
    'Community Service Club'
  ];

  const handleAddEvent = () => {
    if (formData.title && formData.description && formData.date && formData.time && 
        formData.location && formData.category && formData.organizer) {
      
      // Convert File objects to URLs for storage (in a real app, you'd upload to server)
      const imageUrls = formData.images?.map((file: File) => 
        URL.createObjectURL(file)
      ) || [];

      const newEvent: Event = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        category: formData.category,
        organizer: formData.organizer,
        status: formData.status,
        createdAt: new Date().toISOString().split('T')[0],
        images: imageUrls
      };
      setEvents([...events, newEvent]);
      resetForm();
      setShowAddForm(false);
      
      Swal.fire({
        icon: 'success',
        title: `Event "${formData.title}" has been added successfully!`,
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please fill in all required fields!',
        showConfirmButton: true
      });
    }
  };

  const handleEditEvent = () => {
    if (editingEvent && formData.title && formData.description && formData.date && 
        formData.time && formData.location && formData.category && formData.organizer) {
      
      // Convert File objects to URLs for storage (in a real app, you'd upload to server)
      const imageUrls = formData.images?.map((file: File) => 
        URL.createObjectURL(file)
      ) || [];

      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { 
              ...event, 
              title: formData.title,
              description: formData.description,
              date: formData.date,
              time: formData.time,
              location: formData.location,
              category: formData.category,
              organizer: formData.organizer,
              status: formData.status,
              images: imageUrls
            }
          : event
      ));
      resetForm();
      setEditingEvent(null);
      
      Swal.fire({
        icon: 'success',
        title: `Event "${formData.title}" has been updated successfully!`,
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please fill in all required fields!',
        showConfirmButton: true
      });
    }
  };

  const handleDeleteEvent = (id: string) => {
    const eventToDelete = events.find(event => event.id === id);
    if (eventToDelete) {
      Swal.fire({
        title: `Are you sure you want to delete "${eventToDelete.title}"?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          setEvents(events.filter(event => event.id !== id));
          Swal.fire(
            'Deleted!',
            `Event "${eventToDelete.title}" has been deleted successfully!`,
            'success'
          );
        }
      });
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      category: event.category,
      organizer: event.organizer,
      status: event.status,
      images: [] // For editing, we start with empty images array
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: '',
      organizer: '',
      status: 'upcoming',
      images: []
    });
  };

  const handleFormDataChange = (field: string, value: string | File[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingEvent(null);
    resetForm();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-purple-100 text-purple-800';
      case 'Sports': return 'bg-orange-100 text-orange-800';
      case 'Cultural': return 'bg-pink-100 text-pink-800';
      case 'Administrative': return 'bg-indigo-100 text-indigo-800';
      case 'Technology': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return {
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
  };
}; 