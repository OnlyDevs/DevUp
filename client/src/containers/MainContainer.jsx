import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from './NavigationBar';
import SideBar from './SideBar';
import MainContent from './MainContent';
import ChatBar from './ChatBar';
import ProfileModal from '../components/ProfileModal';

function mapStateToProps(state) {
  return {
    username: state.onlyDevs.username,
    profilePic: state.onlyDevs.profileimgurl,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

function MainContainer(props) {
  return (
    <div style={{ height: '100%' }}>
      {/* <div>{props.user}</div> */}
      <NavigationBar state={props}></NavigationBar>

      <div className="parent">
        <div className="div1">
          <SideBar></SideBar>
        </div>
        <div className="div2">
          <MainContent></MainContent>
          <ProfileModal></ProfileModal>
        </div>
        <div className="div3">
          <ChatBar></ChatBar>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
