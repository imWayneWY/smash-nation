import React, { useState } from 'react';
import Input from '../components/input';
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Select from '../components/select';
import Title from '../components/title';
import Btn from '../components/btn';

const root = css`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

const inlineContainer = css`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-size: 24px;
    text-transform: uppercase;
  }
`

const AddPlace = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [province, setProvince] = useState('SK')
  const [tel, setTel] = useState('')
  const [postcode, setPostcode] = useState('')
  const [cost, setCost] = useState("")
  const [courtNum, setCourtNum] = useState("")
  return (
    <div css={root}>
      <Title title="required information" />
      <Input width={600} value={name} label="name" onChange={(newName) => setName(newName)}/>
      <Input width={1000} value={address} label="address" onChange={(newAddress) => setAddress(newAddress)}/>
      <Select value={province} onChange={(newProvince)=>setProvince(newProvince)}/>
      <Title title="optional information" />
      <Input width={400} value={tel} label="telphone" onChange={(newTel) => setTel(newTel)} />
      <Input width={200} value={postcode} label="Postal code" onChange={(newPostcode) => setPostcode(newPostcode)} />
      <div css={css`height: 20px`} />
      <div css={inlineContainer}><Input numberOnly={true} width={200} value={cost} label="cost" onChange={(newCost) => setCost(newCost)} /><span>/hour</span></div>
      <Input numberOnly={true} width={200} value={courtNum} label="Court Number" onChange={(newVal) => setCourtNum(newVal)} />
      <div css={css`height: 20px`} />
      <div css={css`width: 2000px; margin: 20px 0;`}>
        <Btn text="submit"/>
      </div>
    </div>
  )
}

export default AddPlace;