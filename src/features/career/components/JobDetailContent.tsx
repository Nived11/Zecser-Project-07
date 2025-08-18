import React from 'react';

interface Job {
  id: number;
  title: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
}

const JobDetailContent: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="job-info">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-meta"><strong>Location:</strong> {job.location}</p>
      <p className="job-meta"><strong>Experience:</strong> {job.experience}</p>
      <p className="job-description">{job.description}</p>

      <h3 className="requirement-heading">Requirements</h3>
      <ul className="requirement-list">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDetailContent;
