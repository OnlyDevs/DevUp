import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import './index.scss';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';
import Github from './components/GitHub';
import * as actions from './actions/actions';
import store from './store';
import { API_URL } from './env';
import Onboard from './components/Onboard';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const githubToken = localStorage.getItem('githubToken');
    if (githubToken) {
      dispatch(actions.githubToken(githubToken));

      fetch(API_URL + `/users/github`, {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.user.username) {
            return history.push('/onboard');
          }
          // put the user in the github store
          dispatch(actions.updateUser(data.user));
        })
        .catch(console.log);
    }
  }, []);

  return (
    <Switch>
      <Route path="/edit" component={Onboard} />
      <Route path="/onboard" component={Onboard} />
      <Route path="/auth" component={LoginContainer} />
      <Route path="/github" component={Github} />
      <Route component={MainContainer} />
    </Switch>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

render(<Root />, document.getElementById('root'));
