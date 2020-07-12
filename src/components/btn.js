/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { primaryColor } from "./../constants";

const btn=css`
  height: 46px;
  border-radius: 5px;
  border: 2px solid ${primaryColor};
  font-size: 24px;
  margin-top: 10px;
  text-transform: uppercase;
  color: #fff;
  background-color: ${primaryColor};
  margin-left: 10px;
  &:hover {
    box-shadow: 0 0 8px 10px ${primaryColor};
  }
`

const Btn = ({text, onClick}) => {
  return (
    <button css={btn} onClick={onClick}>{text}</button>
  )
}

export default Btn;