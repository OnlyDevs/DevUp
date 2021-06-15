import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../actions/actions';

function Onboard() {
  const state = useSelector((state) => state.onlyDevs);

  const [name, setName] = useState(state.username || '');
  const [bio, setBio] = useState(state.bio || '');
  const [languages, setLanguages] = useState(state.languages || '');
  const [picture, setPicture] = useState(state.profileimgurl || '');
  const [project, setProject] = useState(state.current_project);

  const githubToken = useSelector((state) => state.onlyDevs.githubToken);

  const history = useHistory();
  const dispatch = useDispatch();

  const _data = {
    username: name,
    bio: bio,
    languages: languages,
    profileImgUrl: picture,
    current_project: project,
  };

  function submitInputs() {
    fetch('http://localhost:3001/users/setup', {
      method: 'PATCH',
      headers: {
        Authorization: `token ${githubToken}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(_data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(actions.updateUser(data.user));
        // document.getElementById('navProfilePic').classList.remove('hidden');
        // document.getElementById('openUserProfile').classList.remove('hidden');
        // document.getElementById('sideBar').classList.remove('hidden');

        history.push('/');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div style={{ maxWidth: '36rem', margin: '1rem auto' }}>
      <button onClick={() => history.goBack()}>Back</button>
      <form>
        <label htmlFor="nameInput">Name: </label>
        <br />
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <label htmlFor="bioInput">Bio: </label>
        <br />
        <input
          id="bioInput"
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></input>
        <br />
        <label htmlFor="languagesInput">Languages: </label>
        <br />
        <input
          id="languagesInput"
          type="text"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        ></input>
        <br />
        <label htmlFor="pictureInput">Picture:</label>
        <br />
        <input
          id="pictureInput"
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        ></input>
        <br />
        <label htmlFor="projectInput">Current Projects:</label>
        <br />
        <input
          id="projectInput"
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        ></input>
      </form>
      <br />
      <button onClick={submitInputs}>Submit</button>
    </div>
  );
}

export default Onboard;
