import React from 'react';

function NavigationBar(props) {
  function openModal() {
    document.querySelector('#profileModal').style.display = 'block';
  }

  return (
    <div className='section group' id='navHeader'>
      <div className='col span_1_of_3 nav'>
        Meet the lonely dev you deserve.<br></br>Only Devs... for Lonly Devs
      </div>
      <div className='col span_2_of_3 nav textLogo'>Only Devs</div>
      <div className='col span_1_of_3 nav navProfile'>
        <img id='navProfilePic' src={props.state.profilePic}></img>
        <button id='openUserProfile' onClick={openModal}>
          {props.state.username}
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
