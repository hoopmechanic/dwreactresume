import React from 'react';

const SkillItem = props => {
  const skillIcons = props.skill.items;
  const showIcons = skillIcons.map(function(item, index) {
    return <span key={index} className={skillIcons[index].icon} />;
  });
  return (
    <div id="icons">
      {/* Display the group name */}
      <div id={props.skill.id} className="icon-block">
        <h5>{props.skill.name}</h5>
        {/* Display icons */}
        {showIcons}
      </div>
    </div>
  );
};

export default SkillItem;
