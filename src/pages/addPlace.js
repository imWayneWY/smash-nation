import React, { useState } from 'react';
import Input from '../components/input';
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const root = css`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

const AddPlace = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  return (
    <div css={root}>
      <Input width={800} value={name} label="name" onChange={(newName) => setName(newName)}/>
      <Input width={1200} value={address} label="address" onChange={(newAddress) => setName(newAddress)}/>
    </div>
  )
}

export default AddPlace;