import React from 'react';
import JobItem from './JobItem';

const Experience = props => {
  return (
    <section id="work" className="experience">
      <h2>Employment History</h2>
      <article className="worklist">
        {props.jobs.map((item, index) => <JobItem key={index} feed={item} />)}
      </article>
    </section>
  );
};

export default Experience;
