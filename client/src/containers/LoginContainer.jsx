import React from 'react';
import { connect } from 'react-redux';
import { GH_CLIENT_ID, GH_REDIRECT_URI } from '../env';

function mapStateToProps(state) {
  return {};
}

function LoginContainer() {
  function loginLogic() {
    window.location = `https://github.com/login/oauth/authorize?client_id=${GH_CLIENT_ID}&redirect_uri=${GH_REDIRECT_URI}`;
  }

  return (
    <div
      className="loginPage"
      style={{
        margin: '1rem auto',
        maxWidth: '36rem',
      }}
    >
      <center>
        <button id="loginBtn" onClick={loginLogic}></button>
      </center>
    </div>
  );
}

export default connect(mapStateToProps, null)(LoginContainer);
