import React from 'react';

const ExploreCard = ({
  username,
  profilePic,
  bio,
  languages,
  current_project,
}) => {
  return (
    <article className="exploreCard">
      <div>
        <center>
          <img className="exploreCardProfilePic" src={profilePic}></img>
        </center>
      </div>
      <div className="exploreCardDetails">
        <h2>{username}</h2>
        <p>Bio: {bio}</p>
        <p>Languages: {languages}</p>
        <p>Current Projects: {current_project}</p>
      </div>
    </article>
  );
};

export default ExploreCard;
