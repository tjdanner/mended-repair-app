import './JobForm.css';

import { useState } from "react";

const JobForm = ({ addJob }) => {
  const [job, setJob] = useState({
    clientName: '',
    machineType: '',
    issue: '',
    status: 'In Progress'
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job);
    setJob({
      clientName: '',
      machineType: '',
      issue: '',
      status: 'In Progress'
    });
  };

  return (
    <form id="job-form" onSubmit={handleSubmit}>
      <label htmlFor="clientName">Client Name</label>
      <input type="text" name="clientName" value={job.clientName} onChange={handleChange} required />

      <label htmlFor="machineType">Machine Type</label>
      <input type="text" name="machineType" value={job.machineType} onChange={handleChange} required />

      <label htmlFor="issue">Issue</label>
      <input type="text" name="issue" value={job.issue} onChange={handleChange} required />

      <button type="submit">Add Job</button>
    </form>
  );
};
export default JobForm;