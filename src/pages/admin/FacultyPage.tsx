// src/pages/admin/FacultyPage.tsx
import React, { useState } from "react";
import { dummyFaculty } from "../../data/dummyfaculty";
import { type Faculty } from '../../features/admin/Faculty/types/faculty';
import FacultySection from "../../features/admin/Faculty/components/FacultySection";
import FacultyForm from "../../features/admin/Faculty/components/FacultyForm";


const AdminFacultyPage: React.FC = () => {
  const [faculties, setFaculties] = useState<Faculty[]>(dummyFaculty);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [showForm, setShowForm] = useState(false);

  const openForm = (faculty?: Faculty, category?: Faculty["category"]) => {
    if (faculty) {
      setSelectedFaculty(faculty);
    } else if (category) {
      setSelectedFaculty({
        id: Date.now().toString(),
        name: "",
        dob: "",
        contact: "",
        email: "",
        doj: "",
        experience: "",
        degree: "",
        college: "",
        passingYear: "",
        image: "",
        category,
      });
    } else {
      setSelectedFaculty(null);
    }
    setShowForm(true);
  };

  const handleSave = (updated: Faculty) => {
    if ((updated as any)._delete) {
      setFaculties((prev) => prev.filter((f) => f.id !== updated.id));
    } else if (faculties.find((f) => f.id === updated.id)) {
      setFaculties((prev) =>
        prev.map((f) => (f.id === updated.id ? updated : f))
      );
    } else {
      setFaculties((prev) => [...prev, updated]);
    }

    setShowForm(false);
    setSelectedFaculty(null);
  };

  const categorized = {
    dedicated: faculties.filter((f) => f.category === "dedicated"),
    retired: faculties.filter((f) => f.category === "retired"),
    forever: faculties.filter((f) => f.category === "forever"),
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Our Faculties</h1>

      <FacultySection
        title="Meet Our Dedicated Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        faculty={categorized.dedicated}
        onAdd={(cat) => openForm(undefined, cat)}
        onEdit={(f) => openForm(f)}
      />

      <FacultySection
        title="Thank You for the Years of Service (Retired)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        faculty={categorized.retired}
        onAdd={(cat) => openForm(undefined, cat)}
        onEdit={(f) => openForm(f)}
      />

      <FacultySection
        title="Forever in Our Hearts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        faculty={categorized.forever}
        onAdd={(cat) => openForm(undefined, cat)}
        onEdit={(f) => openForm(f)}
      />

      {showForm && selectedFaculty && (
        <FacultyForm
          initialData={selectedFaculty}
          onCancel={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default AdminFacultyPage;
