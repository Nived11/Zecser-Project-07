# SubAdmin Feature

This feature contains all components and logic related to the Sub-Admin portal functionality.

## Structure

```
subAdmin/
├── components/
│   ├── SubAdminHeader/
│   │   └── Navbar.tsx           # SubAdmin navigation header
│   ├── SubAdminHeroBanner.tsx   # Hero banner for SubAdmin dashboard
│   ├── SubAdminContentSection.tsx # Content section with stats
│   ├── SubAdminFeatureCards.tsx # Grid of feature cards
│   └── SubAdminFeatureCard.tsx  # Individual feature card component
├── index.ts                     # Feature exports
└── README.md                   # This file
```

## Components

### SubAdminHeader
Navigation header with SubAdmin branding, navigation links, and logout functionality.

### SubAdminHeroBanner
Hero section with SubAdmin-specific welcome message and description.

### SubAdminContentSection
Content section displaying SubAdmin portal information and statistics.

### SubAdminFeatureCards
Grid layout of feature cards for different SubAdmin functionalities:
- Student Management
- Content Creation
- Event Management
- Attendance Tracking
- Reports & Analytics
- Communication Hub

### SubAdminFeatureCard
Individual feature card component with hover effects and navigation.

## Features

The SubAdmin portal provides access to:
- **Student Management**: Manage student records and information
- **Content Creation**: Create and manage educational content
- **Event Management**: Handle school events and activities
- **Attendance Tracking**: Monitor student attendance
- **Reports & Analytics**: Generate reports and view analytics
- **Communication Hub**: Manage communications with students and parents

## Usage

```tsx
import { 
  SubAdminHeader,
  SubAdminHeroBanner, 
  SubAdminContentSection, 
  SubAdminFeatureCards 
} from '../features/subAdmin';

// Use in your component
<>
  <SubAdminHeader />
  <SubAdminHeroBanner />
  <SubAdminContentSection />
  <SubAdminFeatureCards />
</>
```

## Styling

- Uses Tailwind CSS for styling
- Blue/Indigo color scheme to differentiate from Admin portal
- Responsive design for all screen sizes
- Hover effects and transitions for better UX

## Routes

- `/subadmin/home` - Main SubAdmin dashboard
- `/subadmin/student-management` - Student management (to be implemented)
- `/subadmin/content-creation` - Content creation (to be implemented)
- `/subadmin/event-management` - Event management (to be implemented)
- `/subadmin/attendance-tracking` - Attendance tracking (to be implemented)
- `/subadmin/reports-analytics` - Reports and analytics (to be implemented)
- `/subadmin/communication-hub` - Communication hub (to be implemented) 