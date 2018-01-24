import React from 'react';

const SoftItem = props => {
  const softGroup = props.feed.groupitems;
  const showSoftware = softGroup.map(function(item, index) {
    // Create a list of dots based on the level value
    const level = softGroup[index].level;
    let levelText = '';
    let dots = [];
    for (let levelItem = 1; levelItem <= 5; levelItem++) {
      if (levelItem <= level) {
        dots.push('fa fa-circle');
      } else {
        dots.push('fa fa-circle-thin');
      }
    }
    // Determine the level text based on the level value
    switch (level) {
      case 1:
        levelText = 'Poor';
        break;
      case 2:
        levelText = 'Needs Work';
        break;
      case 3:
        levelText = 'Good';
        break;
      case 4:
        levelText = 'Very Good';
        break;
      default:
        levelText = 'Excellent';
        break;
    }
    // Return the dots display to the showSoftware
    const levelDots = dots.map(function(dotName, dotItem) {
      return <span key={dotItem} className={dotName} />;
    });
    return (
      <div className="softitem" key={index}>
        <span className="softname">{softGroup[index].name}</span>
        <span className="level">
          {levelDots}
          <p>{levelText}</p>
        </span>
      </div>
    );
  });
  return (
    <article id="software-list">
      <h5>{props.feed.name}</h5>
      {showSoftware}
    </article>
  );
};

export default SoftItem;
