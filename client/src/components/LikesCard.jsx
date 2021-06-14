import React from 'react';

function LikesCard({
  username,
  profilePic,
  bio,
  languages,
  current_project,
  onLike,
}) {
  return (
    <article className="likesCard">
      <div>
        <center>
          <img className="likesCardProfilePic" src={profilePic}></img>
        </center>
      </div>
      <div className="likesCardDetails">
        <h2>{username}</h2>
        <p style={{ marginTop: '10px' }}>Bio: {bio}</p>
        <p style={{ marginTop: '10px' }}>Languages: {languages}</p>
        <p style={{ marginTop: '10px' }}>Current Projects: {current_project}</p>
        {/* <button onClick={onLike}>Like Back</button> */}
      </div>
    </article>
  );
}

export default LikesCard;
