import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const navBar = css`
  position: fixed;
  width: 100vw;
  height: 63px;
  background-color: #3A2A2F;
  display: flex;
  align-items: center;
  z-index: 1000;
`
const links = css`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  margin-left: 3vw;
`

const logo = css`
  width: 149px;
  height: 53px;
  margin-left: 20px;
`

const icon = css`
  position: absolute;
  right: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`

const signin = css`
  position: absolute;
  right: 40px;
  width: 100px;
  height: 40px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  line-height: 40px;
  margin-left: 20px;
`

const manage = css`
  position: absolute;
  right: 80px;
  width: 100px;
  height: 40px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  line-height: 40px;
  margin-left: 20px;
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

  const handleLogout = () => {
    firebase.auth().signOut();
    setUser(null);
  }
  return (
    <div css={navBar}>
      <a href="/"><img css={logo} src="https://cdn.shopify.com/s/files/1/0043/9802/2749/files/png_file1_150x.png?v=1591749437" alt="logo" /></a>
      <a css={links} href="/">Home</a>
      <a css={links} href="/#/players">Players</a>
      <a css={links} href="/#/places">Places</a>
      {
        user && user.uid==="4hhV3X6zRLTbpR0atmuUxwobTMg1"
        && 
        <a css={manage} href="/#/manage">Manage</a>
      }
      { user 
        ? user.photoURL 
          ? <img css={icon} onClick={handleLogout} src={user.photoURL} alt="user" />
          : <svg css={icon} onClick={handleLogout} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3519" width="200" height="200"><path d="M512 62.08A449.92 449.92 0 1 0 961.92 512 449.92 449.92 0 0 0 512 62.08z m0 135.04a135.04 135.04 0 1 1-135.04 135.04A134.72 134.72 0 0 1 512 197.12z m0 640a323.84 323.84 0 0 1-269.76-144.96c0-89.6 179.84-138.56 269.76-138.56s268.48 48.96 269.76 138.56A323.84 323.84 0 0 1 512 835.84z" p-id="3520" fill="#ff8053"></path></svg>
        : <a css={signin} href="/#/login">Sign in</a>
      }
    </div>
)
}

export default NavBar;