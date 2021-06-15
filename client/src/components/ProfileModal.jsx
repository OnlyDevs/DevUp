import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions/actions';
import { useHistory } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    username: state.onlyDevs.username,
    profilePic: state.onlyDevs.profileimgurl,
    bio: state.onlyDevs.bio,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editProfileName: function () {
      dispatch(editProfileName(document.querySelector('#editNameInput').value));
    },
    editProfilePicture: function () {
      dispatch(
        editProfilePicture(
          document.querySelector('#editProfilePictureInput').value
        )
      );
    },
  };
}

window.onclick = function (event) {
  if (event.target == document.getElementById('profileModal')) {
    document.getElementById('profileModal').style.display = 'none';
  }
};

function ProfileModal(props) {
  const history = useHistory();

  function openEdit() {
    history.push('/edit');
  }
  return (
    <div id="profileModal">
      <div id="profileContent">
        <div id="modalProfilePicContainer">
          <img id="modalProfilePic" src={props.profilePic}></img>
        </div>
        <div id="modalProfileInfoContainer">
          <h1>{props.username}</h1>
          <p style={{ margin: '20px' }}>{props.bio}</p>
        </div>

        <button
          onClick={openEdit}
          style={{ float: 'right', margin: '0 30px 0 0' }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);
// export default ProfileModal;
