import React, { useState } from 'react';
import { connect } from 'react-redux';
import ExploreCard from './ExploreCard';

function mapStateToProps(state) {
  return {
    explore: state.onlyDevs.explore,
  };
}

function ExploreContent(props) {
  let exploreArr = props.explore;

  const [index, setIndex] = useState(0);

  let displayExploreCard = (
    <ExploreCard
      username={exploreArr[index].username}
      profilePic={exploreArr[index].profilePic}
      bio={exploreArr[index].bio}
      languages={exploreArr[index].languages}
      current_project={exploreArr[index].languages}
    ></ExploreCard>
  );

  function consumePromise() {
    console.log('consume', index);
    setIndex(index + 1);
  }

  function rejectPromise() {
    console.log('reject', index);
    setIndex(index + 1);
  }

  return (
    <div>
      <center>
        <h1>Your matches with other lonely devs.</h1>
      </center>
      <div id='exploreContentParent'>{displayExploreCard}</div>
      <div>
        <button onClick={consumePromise}>Consume Promise</button>
        <button onClick={rejectPromise}>Reject Promise</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(ExploreContent);
