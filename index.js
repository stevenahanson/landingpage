import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Demo from './components/villages/Demo';
import LandingPage from './components/villages/Landing Page.js';

class App extends React.Component {
  render() {
    return (
      <>
        <LandingPage/>
        <Demo/>
      </>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
