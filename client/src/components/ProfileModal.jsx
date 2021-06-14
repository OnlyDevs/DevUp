import React from 'react';
import { connect } from 'react-redux';
import { editProfileName, editProfilePicture } from '../actions/actions';

function mapStateToProps(state) {
  return {
    username: state.onlyDevs.username,
    profilePic: state.onlyDevs.profilePic,
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
  if (
    event.target == document.getElementById('editProfileModal') ||
    event.target == document.getElementById('profileModal')
  ) {
    document.getElementById('editProfileModal').style.display = 'none';
  }
};

function openEdit() {
  document.getElementById('editProfileModal').style.display = 'block';
}

function ProfileModal(props) {
  // const newName = document.querySelector('#editNameInput').value;
  return (
    <div id='profileModal'>
      <div id='profileContent'>
        <div id='modalProfilePicContainer'>
          <img id='modalProfilePic' src={props.profilePic}></img>
        </div>
        <div id='modalProfileInfoContainer'>
          <h1>{props.username}</h1>
          <p style={{ margin: '20px' }}>{props.bio}</p>
        </div>

        <button
          onClick={openEdit}
          style={{ float: 'right', margin: '0 30px 0 0' }}
        >
          Edit Profile
        </button>

        <div id='editProfileModal'>
          <div id='editProfileModalContent'>
            <input
              id='editNameInput'
              type='text'
              placeholder='New Name'
            ></input>
            <button onClick={props.editProfileName}>Edit Profile Name</button>
            <input
              id='editProfilePictureInput'
              type='text'
              placeholder='New Picture url'
            ></input>
            <button onClick={props.editProfilePicture}>
              Edit Profile Picture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);
// export default ProfileModal;
