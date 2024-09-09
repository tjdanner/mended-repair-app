import JobCard from "./JobCard";

const JobList = ({ jobs, markComplete }) => {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} markComplete={() => markComplete(index)} />
      ))}
    </div>
  );
};
export default JobList;