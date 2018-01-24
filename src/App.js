import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import Experience from './Experience';
import Personal from './Personal';
import Skills from './Skills';
import Software from './Software';
import Education from './Education';
import Extracurricular from './Extracurricular';

// Import the local data

import softwareData from './data/software.json';
import skillsData from './data/skills.json';

// Main component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Dwayne Washington',
      jobs: [],
      software: softwareData.software.group,
      skills: skillsData.skills.group,
      error: false,
      errorMessage: ''
    };
  }
  // Get the Employment History json data from firebase
  componentDidMount() {
    axios
      .get('https://dw-data-assets.firebaseio.com/jobs.json')
      .then(response => {
        this.setState({ jobs: response.data });
      })
      // Light weight error checking
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  render() {
    const { error, errorMessage, skills, software, jobs } = this.state;
    const jobList = jobs;
    // if the get data is okay
    if (!error) {
      return (
        <div>
          <Navigation />
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <Personal />
                <Skills skills={skills} />
                <Software software={software} />
              </div>
              <div className="col-md-8 col-sm-12">
                <Experience jobs={jobList} />
                <Education />
                <Extracurricular />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navigation />
          <Header />
          <div className="container">
            <h2>Error</h2>
            <p>Could not fetch data</p>
            <p>
              Please click the "Download Resume" button above to retriene a PDF
              version of my resume.
            </p>
            <p>{errorMessage}</p>
          </div>
        </div>
      );
    }
  }
}

export default App;
