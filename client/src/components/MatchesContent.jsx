import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import MatchesCard from './MatchesCard';
import { useSelector } from 'react-redux';
import { API_URL } from '../env';
import * as actions from '../actions/actions';

function mapStateToProps(state) {
  return {
    matches: state.onlyDevs.matches,
  };
}

function MatchesContent(props) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.onlyDevs.id);

  useEffect(() => {
    if (id) {
      const url = API_URL + `/matches?userId=${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch(actions.updateMatches(data.matches));
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const matchesArr = [];

  for (let i = 0; i < props.matches.length; i++) {
    matchesArr.push(
      <MatchesCard
        key={i}
        username={props.matches[i].username}
        profilePic={props.matches[i].profileimgurl}
        bio={props.matches[i].bio}
        languages={props.matches[i].languages}
        current_project={props.matches[i].languages}
      ></MatchesCard>
    );
  }

  return (
    <div>
      <center>
        <h1 className="textPopIn">Your matches with other lonely devs.</h1>
      </center>
      <div id="matchesContentParent">{matchesArr}</div>
    </div>
  );
}

export default connect(mapStateToProps, null)(MatchesContent);
