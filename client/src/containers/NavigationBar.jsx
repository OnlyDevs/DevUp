import React from 'react';

function NavigationBar(props) {
  function openModal() {
    document.querySelector('#profileModal').style.display = 'block';
  }

  return (
    //alex i created acc again to see css
    <div className="section group" id="navHeader">
      <div className="col span_1_of_3 nav nav-message">
        Develop relationships while you develop software.<br></br>Only Devs...
        for Lonely Devs
      </div>
      <div className="col span_2_of_3 nav textLogo">Only Devs</div>
      <div className="col span_1_of_3 nav navProfile">
        <img
          id="navProfilePic"
          src={props.state.profilePic}
          style={{ objectFit: 'cover', marginTop: '5px' }}
        ></img>
        <button id="openUserProfile" onClick={openModal}>
          {props.state.username}
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
