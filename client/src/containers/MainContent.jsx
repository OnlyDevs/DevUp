import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import MatchesContent from '../components/MatchesContent';
import LikesContent from '../components/LikesContent';
import ExploreContent from '../components/ExploreContent';

function mapStateToProps(state) {
  return {
    display: state.onlyDevs.currentContent,
  };
}

function MainContent(props) {
  return (
    <div id="mainContentBox">
      <Switch>
        <Route path="/likes" component={LikesContent} />
        <Route path="/explore" component={ExploreContent} />
        <Route path="/" component={MatchesContent} />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, null)(MainContent);
