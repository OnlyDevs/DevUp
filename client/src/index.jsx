import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';

import MainContainer from './containers/MainContainer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MainContainer></MainContainer>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
