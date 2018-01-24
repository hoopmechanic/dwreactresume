import React from 'react';
import SkillItem from './SkillItem';

const Skills = props => {
  return (
    <section className="skills">
      <h2>Primary Skills</h2>
      {props.skills.map((item, index) => (
        <SkillItem key={index} skill={item} />
      ))}
    </section>
  );
};

export default Skills;
