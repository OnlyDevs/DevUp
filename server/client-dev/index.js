const GH_CLIENT_ID = 'a3f21d9065747137acec';
const GH_REDIRECT_URI = 'http://localhost:3001/test';

document.addEventListener('DOMContentLoaded', () => {
  // handle oauth
  const urlParams = new URLSearchParams(window.location.search);
  const ghCode = urlParams.get('code');
  if (ghCode) {
    const url = `http://localhost:3001/auth/github?code=${ghCode}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: Math.random().toString(),
        password: Math.random().toString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.githubToken) {
          document.querySelector('#login-status').innerText = 'logged in';
        }
      });
  }

  // login
  const loginBtn = document.querySelector('#login');
  loginBtn.addEventListener('click', () => {
    const url = `https://github.com/login/oauth/authorize?client_id=${GH_CLIENT_ID}&redirect_uri=${GH_REDIRECT_URI}`;
    window.location.href = url;
  });
});
