import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
const root = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const Index = () => {
  return(
    <div css={root}>
      <a href="/#/player/corrine-carr">Corrine Carr</a>
      <a href="/#/player/dean-petty">Dean Petty</a>
      <a href="/#/player/jay-gizmo-hall">Jay "Gizmo" Hall</a>
      <a href="/#/player/daniel-de-la-rosa">Daniel De La Rosa</a>
      <a href="/#/player/tyler-loong">Tyler Loong</a>
    </div>
  )
}

export default Index;