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
      <a href="/#/players">Players Page Demo</a>
    </div>
  )
}

export default Index;