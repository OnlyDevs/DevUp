import * as types from './actionsTypes';

export function editProfileName(newName) {
  return {
    type: types.EDIT_PROFILE_NAME,
    payload: newName,
  };
}

export function editProfilePicture(newPicture) {
  return {
    type: types.EDIT_PROFILE_PICTURE,
    payload: newPicture,
  };
}

export function logIn(username, profilePic) {
  return {
    type: types.LOG_IN,
    payload: { username: username, profilePic: profilePic },
  };
}

export function displayMatches() {
  return {
    type: types.DISPLAY_MATCHES,
  };
}

export function displayLikes() {
  return {
    type: types.DISPLAY_LIKES,
  };
}

export function displayExplore() {
  return {
    type: types.DISPLAY_EXPLORE,
  };
}
