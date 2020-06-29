import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const navBar = css`
  position: fixed;
  width: 100vw;
  height: 63px;
  background-color: #3A2A2F;
`

const logo = css`
  width: 149px;
  height: 53px;
  margin: 5px 20px;
`

const NavBar = () => (
  <div css={navBar}>
    <img css={logo} src="https://cdn.shopify.com/s/files/1/0043/9802/2749/files/png_file1_150x.png?v=1591749437" />
  </div>
)

export default NavBar;