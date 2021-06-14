import React from 'react';
import { connect } from 'react-redux';
import MatchesCard from './MatchesCard';

function mapStateToProps(state) {
  return {
    matches: state.onlyDevs.matches,
  };
}

function MatchesContent(props) {
  const matchesArr = [];

  for (let i = 0; i < props.matches.length; i++) {
    matchesArr.push(
      <MatchesCard
        username={props.matches[i].username}
        profilePic={props.matches[i].profilePic}
        bio={props.matches[i].bio}
        languages={props.matches[i].languages}
        current_project={props.matches[i].languages}
      ></MatchesCard>
    );
  }

  return (
    <div>
      <center>
        <h1>Your matches with other lonely devs.</h1>
      </center>
      <div id='matchesContentParent'>{matchesArr}</div>
    </div>
  );
}

export default connect(mapStateToProps, null)(MatchesContent);
