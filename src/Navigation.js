import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutShow: false
    };
  }

  render() {
    let aboutClose = () => this.setState({ aboutShow: false });
    return (
      <div className="top-menu">
        <div className="container">
          <nav className="mainmenu">
            <a
              href=""
              className="menulink"
              onClick={e => {
                e.preventDefault();
                this.setState({ aboutShow: true });
              }}
            >
              About
            </a>
            <a href="#work" className="menulink">
              Work
            </a>
            <a href="#education" className="menulink">
              Education
            </a>
            <a href="#contact" className="menulink">
              Contact
            </a>
            <NavLink to="/github">GitHub</NavLink>
          </nav>
          {/*<!-- nav -->*/}
          <About show={this.state.aboutShow} onHide={aboutClose} />
        </div>
        {/*<!--.top-menu-->*/}
      </div>
    );
  }
}

export default Navigation;
