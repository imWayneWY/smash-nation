/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const root = css`
  margin-top: 10px;
  width: 100%;
  h2 {
    text-transform: uppercase;
  }
`

const Title = ({title}) =>(
  <div css={root}>
    <h2>{title}</h2>
    <hr />
  </div>
)

export default Title