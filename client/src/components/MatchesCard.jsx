import React from 'react';

function MatchesCard({
  username,
  profilePic,
  bio,
  languages,
  current_project,
}) {
  return (
    <article className="matchesCard">
      <div>
        <center>
          <img className="matchesCardProfilePic" src={profilePic}></img>
        </center>
      </div>
      <div className="matchesCardDetails">
        <h2>{username}</h2>
        <p style={{ marginTop: '10px' }}>Bio: {bio}</p>
        <p style={{ marginTop: '10px' }}>Languages: {languages}</p>
        <p style={{ marginTop: '10px' }}>Current Projects: {current_project}</p>
      </div>
    </article>
  );
}

export default MatchesCard;
