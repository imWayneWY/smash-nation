/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const input = css`
  height: 40px;
  font-size: 24px;
  border-radius: 5px;
  border: 2px solid #ff8053;
  width: 200px;
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

const Select = ({onChange, value}) => {
  const setName= (e) => {
    onChange(e.currentTarget.value);
  }
  return (
    <div css={root}>
      <label css={title}>City</label>
      <select onChange={setName} value={value} css={css`${input}`}>
        <option value="NL">NL</option>
        <option value="PE">PE</option>
        <option value="NS">NS</option>
        <option value="NB">NB</option>
        <option value="QC">QC</option>
        <option value="ON">ON</option>
        <option value="MB">MB</option>
        <option value="SK">SK</option>
        <option value="AB">AB</option>
        <option value="BC">BC</option>
        <option value="YT">YT</option>
        <option value="NT">NT</option>
        <option value="NU">NU</option>
      </select>
    </div>
  )
}

export default Select;