import React from 'react';
import { connect } from 'react-redux';

import LikesCard from './LikesCard';

function mapStateToProps(state) {
  return {
    likes: state.onlyDevs.likes,
  };
}

function LikesContent(props) {
  const likesArr = [];

  for (let i = 0; i < props.likes.length; i++) {
    likesArr.push(
      <LikesCard
        username={props.likes[i].username}
        profilePic={props.likes[i].profilePic}
        bio={props.likes[i].bio}
        languages={props.likes[i].languages}
        current_project={props.likes[i].languages}
      ></LikesCard>
    );
  }

  return (
    <div>
      <center>
        <h1>Lonely devs that you've liked.</h1>
      </center>
      <div id='likesContentParent'>{likesArr}</div>
    </div>
  );
}

export default connect(mapStateToProps, null)(LikesContent);
