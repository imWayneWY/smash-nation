/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const input = css`
  height: 40px;
  font-size: 24px;
  border-radius: 5px;
  border: 2px solid #ff8053;
`;

const root = css`
  display: flex;
  padding-top: 10px;
`

const title = css`
  width: 160px;
  height: 40px;
  line-height: 40px;
  margin-right: 20px;
  font-size: 24px;
  text-transform: uppercase;
`

const Input = ({label,onChange, value, width}) => {
  const setName= (e) => {
    onChange(e.currentTarget.value);
  }
  return (
  <div css={root}>
    {label && <label css={title}>{label}</label> }
    <input onChange={setName} value={value} css={css`${input}; width: ${width}px`} />
  </div>
  )
}

export default Input;