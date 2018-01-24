import React from 'react';

const Header = props => {
  return (
    <header>
      <div className="container">
        <h1>Dwayne Washington</h1>
        <h2>UX/UI Specialist and Full Stack Developer</h2>
        <p className="tagline">
          Designer and developer with an excellent eye for detail, solid
          communication skills, and experience in fast-paced, agile development
          environments. Enjoys building useful, usable, well-constructed sites
          and applications, solving problems, working with a team and constantly
          learning.
        </p>
        <div className="social-media">
          {/*<!--<a href="#" target="_blank"><i className="fa fa-twitter"></i></a>-->*/}
          <a
            href="https://www.linkedin.com/in/dwayne-washington-UX-UI-Dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
          {/*<!--<a href="#" target="_blank"><i className="fa fa-facebook"></i></a>-->*/}
        </div>
        {/*<!--.social-media-->*/}
        <div className="download">
          <a
            href="https://s3-us-west-1.amazonaws.com/dwaynewashington.com/static/media/dwresume.pdf"
            alt="Download Dwayne Washington resume"
            download="Dwayne Washington Resume"
          >
            <p>Download Resume</p>
          </a>
        </div>
        {/*<!--.download-->*/}
      </div>
      {/*<!--.container-->*/}
    </header>
  );
};

export default Header;
