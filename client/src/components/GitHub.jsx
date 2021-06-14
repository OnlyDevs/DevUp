import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import * as actions from '../actions/actions';

function GitHub() {
  const history = useHistory();
  const { search } = useLocation(); // ?code=123...
  const queryParams = qs.parse(search, { ignoreQueryPrefix: true }); // {code: 123...}

  const dispatch = useDispatch();
  // dispatch(action)

  useEffect(() => {
    fetch(`http://localhost:3001/auth/github?code=${queryParams.code}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // put the token into the redux store - data.githubToken
        localStorage.setItem('githubToken', data.githubToken);
        dispatch(actions.githubToken(data.githubToken));

        if (!data.user.username) {
          return history.push('/onboard');
        }
        // put the user in the github store
        dispatch(actions.updateUser(data.user));
        return history.push('/');
      });
  }, []);

  return null;
}

export default GitHub;
