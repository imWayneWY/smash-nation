/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const btn=css`
  height: 46px;
  border-radius: 5px;
  border: 2px solid #ff8053;
  font-size: 24px;
  margin-top: 10px;
  text-transform: uppercase;
  color: #fff;
  background-color: #ff8053;
  margin-left: 10px;
  &:hover {
    box-shadow: 0 0 8px 10px #FF8053;
  }
`

const Btn = ({text, onClick}) => {
  return (
    <button css={btn} onClick={onClick}>{text}</button>
  )
}

export default Btn;