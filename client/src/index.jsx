import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './mainRouter';

import './index.css';

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
