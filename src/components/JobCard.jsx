const JobCard = ({ job, markComplete }) => {
  return (
    <div className="job-card">
      <h3>{job.clientName}</h3>
      <p>Machine: {job.machineType}</p>
      <p>Issue: {job.issue}</p>
      <p>Status: {job.status}</p>
      {
        job.status === 'In Progress' &&
        <button onClick={markComplete}>
          Mark as Completed
        </button>}
    </div>
  );
};
export default JobCard;