import * as types from '../actions/actionsTypes';

const initialState = {
  id: '1',
  username: 'MR MITTENS',
  profilePic:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-cat-breed-1553197454.jpg',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id. Amet porttitor eget dolor morbi non. Lectus mauris ultrices eros in cursus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.',
  languages: 'Javascript obviously',
  current_project: 'Nap time bro',
  matches: [
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id. Amet porttitor eget dolor morbi non. Lectus mauris ultrices eros in cursus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id. Amet porttitor eget dolor morbi non. Lectus mauris ultrices eros in cursus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
  ],
  likes: [
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CATLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id. Amet porttitor eget dolor morbi non. Lectus mauris ultrices eros in cursus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CATLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id. Amet porttitor eget dolor morbi non. Lectus mauris ultrices eros in cursus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
  ],
  explore: [
    {
      id: '2',
      username: 'MRS MITTENS 1',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS 2',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS 3',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS 4',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
    {
      id: '2',
      username: 'MRS MITTENS 5',
      profilePic:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=1.00xw:0.752xh;0,0.233xh&resize=980:*',
      bio: 'MEOW MEOW IMA CAT',
      languages: 'JUST MEOWS',
      current_project: 'DEATH AND DESTRUCTION',
    },
  ],
  currentContent: 'Matches',
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

    case types.DISPLAY_MATCHES:
      return {
        ...state,
        currentContent: 'Matches',
      };

    case types.DISPLAY_LIKES:
      return {
        ...state,
        currentContent: 'Likes',
      };

    case types.DISPLAY_EXPLORE:
      return {
        ...state,
        currentContent: 'Explore',
      };

    default: {
      return state;
    }
  }
}

export default onlyDevsReducer;
