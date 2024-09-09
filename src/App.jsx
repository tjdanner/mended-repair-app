import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import CompletedJobs from "./components/CompletedJobs";
import { useState } from "react";

function App() {
  const [jobsInProgress, setJobsInProgress] = useState([]);
  const [completeJobs, setCompletedJobs] = useState([]);

  const addJob = (job) => {
    setJobsInProgress([...jobsInProgress, job]);
  };

  const markComplete = (index) => {
    const completedJob = jobsInProgress[index];
    completedJob.status = 'Completed';
    setCompletedJobs([...completeJobs, completedJob]);
    setJobsInProgress(jobsInProgress.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Sewing Repair Tracker</h1>
      <JobForm addJob={addJob} />
      <h2>Jobs In Progress</h2>
      <JobList jobs={jobsInProgress} markComplete={markComplete} />
      <h2>Completed Jobs</h2>
      <CompletedJobs jobs={completeJobs} />
    </div>
  );
}

export default App;
