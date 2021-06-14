import React from 'react';
import { connect } from 'react-redux';
import MatchesContent from '../components/MatchesContent';
import LikesContent from '../components/LikesContent';
import ExploreContent from '../components/ExploreContent';

function mapStateToProps(state) {
  return {
    display: state.onlyDevs.currentContent,
  };
}

function MainContent(props) {
  let mainContentDisplaying;

  if (props.display === 'Matches') {
    mainContentDisplaying = <MatchesContent></MatchesContent>;
  } else if (props.display === 'Likes') {
    mainContentDisplaying = <LikesContent></LikesContent>;
  } else if (props.display === 'Explore') {
    mainContentDisplaying = <ExploreContent></ExploreContent>;
  }

  return <div id='mainContentBox'>{mainContentDisplaying}</div>;
}

export default connect(mapStateToProps, null)(MainContent);
