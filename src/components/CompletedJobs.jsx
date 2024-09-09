import JobCard from "./JobCard";

const CompletedJobs = ({ jobs }) => {
  return (
    <div className="completed-jobs">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};
export default CompletedJobs;