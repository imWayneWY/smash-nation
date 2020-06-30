import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const navBar = css`
  position: fixed;
  width: 100vw;
  height: 63px;
  background-color: #3A2A2F;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const logo = css`
  width: 149px;
  height: 53px;
  margin-left: 20px;
`

const icon = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 40px;
  &:hover {
    cursor: pointer;
  }
`

const NavBar = ({ firebase }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        console.log(user)
      }
    })
  },[firebase]);

  let provider = new firebase.auth.GoogleAuthProvider();
  const handleLogin = () => {
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // let token = result.credential.accessToken;
      let user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMsg = error.message;

      console.log(errorCode)
      console.log(errorMsg)
    });
  }

  const handleLogout = () => {
    firebase.auth().signOut();
    setUser(null);
  }
  return (
    <div css={navBar}>
      <a href="/"><img css={logo} src="https://cdn.shopify.com/s/files/1/0043/9802/2749/files/png_file1_150x.png?v=1591749437" alt="logo" /></a>
      { user 
        ? <img css={icon} onClick={handleLogout} src={user.photoURL} alt="user" />
        : <svg css={icon} onClick={handleLogin} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1170" width="200" height="200"><path d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512" fill="#FBBC05" p-id="1171"></path><path d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88" fill="#EA4335" p-id="1172"></path><path d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776" fill="#34A853" p-id="1173"></path><path d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667" fill="#4285F4" p-id="1174"></path></svg>
      }
    </div>
)
}

export default NavBar;