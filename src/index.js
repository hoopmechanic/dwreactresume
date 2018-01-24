import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <App />
      {/* External link to GitHub */}
      <Route
        path="/github"
        component={() => (window.location = 'https://github.com/hoopmechanic/')}
      />
    </div>
  </Router>,
  document.getElementById('main-wrapper')
);
