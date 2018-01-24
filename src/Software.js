import React from 'react';
import SoftItem from './SoftItem';

const Software = props => {
  return (
    <section className="software">
      <h2>Software Experience</h2>
      {props.software.map((item, index) => (
        <SoftItem key={index} feed={item} />
      ))}
    </section>
  );
};

export default Software;
