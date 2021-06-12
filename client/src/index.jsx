import React from 'react';
import { render } from 'react-dom';
import './index.scss'

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

render(<App />, document.getElementById('root'));