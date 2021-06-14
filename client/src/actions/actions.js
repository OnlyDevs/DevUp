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

export function githubToken(token) {
  return {
    type: types.GITHUB_TOKEN,
    payload: token,
  };
}

export function updateUser(user) {
  return {
    type: types.UPDATE_USER,
    payload: user,
  };
}

export function updateExplore(users) {
  return {
    type: types.UPDATE_EXPLORE,
    payload: users,
  };
}

export function updateMatches(users) {
  return {
    type: types.UPDATE_MATCHES,
    payload: users,
  };
}

export function updateLikedBy(users) {
  return {
    type: types.UPDATE_LIKEDBY,
    payload: users,
  };
}
