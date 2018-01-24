import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const About = props => {
  return (
    // Display the modal
    <Modal {...props} bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">About</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Welcome to my responsive React resume site. This site is a full stack
          React project. This project was bootstrapped with the
          "create-react-app" module. It features a Node.js and NPM installation
          using the Webpack workflow to process and transcode the HTML and
          Javascript files.
        </p>
        <p>
          Leveraging ES6, Bootstrap, jQuery and a few of the other vast array of
          Javascript libraries, the site consist of 13 React components. It is
          fully responsive changing from a two column to a stacked design as the
          size of the viewport is adjusted. Several of the sections are
          generated dynamically with JSON data stored both locally and remotely.
          The Employment History section is rendered from data stored remotely
          in Firebase, a Backend-as-a-Service database provided by Google and
          the Software Experience section is rendered from local data with
          custom Javascript code to create the level indicators and the text
          rating from a single level value. This code can be found in the
          SoftItem.js.
        </p>

        <p>
          The site is hosted on a Amazon Web Services S3 bucket. The files for
          the complete project are posted on my GitHub repository. Click the
          GitHub link in the main menu to navigate to my repository.
        </p>

        <p>
          To download a PDF version of this resume, please click the Download
          Resume button.
        </p>

        <p>I hope you enjoy this project!!!</p>

        <p>
          For more information, please contact me at dwash@xplosv.com. I look
          forward to working with you.
        </p>

        <p>
          <em>Sincerely,</em>
        </p>
        <p>Dwayne Washington</p>
      </Modal.Body>
      <Button onClick={props.onHide}>Close</Button>
      <Modal.Footer />
    </Modal>
  );
};

export default About;
