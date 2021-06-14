import React from 'react';
import SideBarTab from '../components/SideBarTab';
import { connect } from 'react-redux';
import {
  displayMatches,
  displayLikes,
  displayExplore,
} from '../actions/actions';

function mapDispatchToProps(dispatch) {
  return {
    displayMatches: function () {
      dispatch(displayMatches());
    },
    displayLikes: function () {
      dispatch(displayLikes());
    },
    displayExplore: function () {
      dispatch(displayExplore());
    },
  };
}

function SideBar(props) {
  return (
    <div id='sideBar'>
      <SideBarTab
        tabName='Matches'
        description='Checkout some of the matches you have made'
        onClick={props.displayMatches}
      ></SideBarTab>
      <SideBarTab
        tabName='Likes'
        description='Devs you have liked. They will respond soon...hopefully'
        onClick={props.displayLikes}
      ></SideBarTab>
      <SideBarTab
        tabName='Explore'
        description='Explore some lonely devs that can be your next partner'
        onClick={props.displayExplore}
      ></SideBarTab>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(SideBar);
