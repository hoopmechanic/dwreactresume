import React from 'react';

const JobItem = props => {
  const subJobsList = props.feed.subJobs;
  let showSubJobs = [];
  // Check that subJobs data exist in JSON
  if (subJobsList) {
    showSubJobs = subJobsList.map(function(item, jobIndex) {
      const subJobsTaskList = subJobsList[jobIndex].tasks;
      const showSubJobTasks = subJobsTaskList.map(function(item, index) {
        // Prepare the tasks for the subJob
        return <li key={index}>{subJobsTaskList[index].task}</li>;
      });
      return (
        <div key={jobIndex}>
          <h5>
            {subJobsList[jobIndex].title} for<br />{' '}
            {subJobsList[jobIndex].company}
          </h5>
          <p>{subJobsList[jobIndex].description}</p>
          <ul>{showSubJobTasks}</ul>
        </div>
      );
    });
  }
  let showTasks = [];
  // Check that tasks data exist in JSON
  const taskList = props.feed.tasks;
  if (taskList) {
    showTasks = taskList.map(function(item, index) {
      return <li key={index}>{taskList[index].task}</li>;
    });
  }
  return (
    <article className="item">
      <div className="header">
        <div className="jobtitle">
          <h3>{props.feed.jobTitle}</h3>
          <h4>{props.feed.companyLine1}</h4>
          <h4>{props.feed.companyLine2}</h4>
          <h4>{props.feed.companyLine3}</h4>
        </div>
        <h4 className="dateitem">{props.feed.dates}</h4>
      </div>
      {showSubJobs}
      <p>{props.feed.description}</p>
      <ul>{showTasks}</ul>
    </article>
  );
};

export default JobItem;
