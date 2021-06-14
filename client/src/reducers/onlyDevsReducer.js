import * as types from '../actions/actionsTypes';

const initialState = {
  id: null,
  username: '',
  githubToken: null,
  profilePic: '',
  bio: '',
  languages: '',
  current_project: '',
  matches: [],
  likes: [],
  explore: [],
};

function onlyDevsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        username: action.payload.user,
        profilePic: action.payload.profilePic,
      };

    case types.EDIT_PROFILE_NAME:
      return {
        ...state,
        username: action.payload,
      };

    case types.EDIT_PROFILE_PICTURE:
      return {
        ...state,
        profilePic: action.payload,
      };

    case types.GITHUB_TOKEN:
      return {
        ...state,
        githubToken: action.payload,
      };

    case types.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };

    case types.UPDATE_MATCHES:
      return {
        ...state,
        matches: action.payload,
      };

    case types.UPDATE_EXPLORE:
      return {
        ...state,
        explore: action.payload,
      };

    case types.UPDATE_LIKEDBY:
      return {
        ...state,
        likes: action.payload,
      };

    default: {
      return state;
    }
  }
}

export default onlyDevsReducer;
