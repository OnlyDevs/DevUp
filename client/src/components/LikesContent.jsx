import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../env';
import * as actions from '../actions/actions';

import LikesCard from './LikesCard';

function mapStateToProps(state) {
  return {
    likes: state.onlyDevs.likes,
  };
}

function LikesContent(props) {
  const id = useSelector((state) => state.onlyDevs.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const url = API_URL + `/matches/likedBy?userId=${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch(actions.updateLikedBy(data.likedBy));
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const likesArr = [];

  const like = (otherId) => {
    return fetch(API_URL + `/matches/like`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        selfId: id,
        otherId,
      }),
    });
  };

  for (let i = 0; i < props.likes.length; i++) {
    likesArr.push(
      <LikesCard
        username={props.likes[i].username}
        profilePic={props.likes[i].profileimgurl}
        bio={props.likes[i].bio}
        languages={props.likes[i].languages}
        current_project={props.likes[i].languages}
        onLike={() => like(props.likes[i].id)}
      ></LikesCard>
    );
  }

  return (
    <div>
      <center>
        <h1 className="textPopIn">Lonely devs that you've liked.</h1>
      </center>
      <div id="likesContentParent">{likesArr}</div>
    </div>
  );
}

export default connect(mapStateToProps, null)(LikesContent);
