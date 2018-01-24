import React from 'react';

const Education = props => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <article className="edlist">
        <article className="item">
          <h3>University of California Los Angeles Extension</h3>
          <ul>
            <li>User Experience: Mobile First, 2015</li>
            <li>User Experience II Course, 2012</li>
            <li>User Experience I Course, 2012</li>
          </ul>
        </article>
        <article className="item">
          <h3>Moviola</h3>
          <ul>
            <li>Avid Finishing on Media Composer, 2001</li>
          </ul>
        </article>
        <article className="item">
          <h3>University of California Los Angeles</h3>
          <ul>
            <li>Bachelor of Arts, Economics, 1987</li>
          </ul>
        </article>
      </article>
      {/*<!--#education .education-->*/}
    </section>
  );
};

export default Education;
