import React, { useState } from 'react';
import Input from '../components/input';
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Select from '../components/select';
import Title from '../components/title';
import Btn from '../components/btn';
import { FirebaseContext } from '../firebaseConf';

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
const btnContainer = css`
  display: flex;
  min-width: 800px;
  margin: 20px 0;
  p {
    margin-left: 20px;
    font-size: 20px;
    color: orange;
  }
`

const AddPlacePage = ({ firebase }) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [province, setProvince] = useState('SK')
  const [city, setCity] = useState('')
  const [tel, setTel] = useState('')
  const [postcode, setPostcode] = useState('')
  const [cost, setCost] = useState("")
  const [courtNum, setCourtNum] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = () => {
    if (!name) {
      setMsg("Name is needed");
      return
    }
    if (!address) {
      setMsg("Address is needed")
      return
    }
    if (!province) {
      setMsg("Province is needed")
      return
    }
    if (!city) {
      setMsg("City is needed")
      return
    }
    firebase.firestore().collection("places").add({
      name,
      address,
      province,
      city,
    }).then((docRef) => {
      console.log('success! id:'+docRef.id);
    }).catch(e => {
      console.log(e);
    })
  }
  return (
    <div css={root}>
      <Title title="required information" />
      <Input width={600} value={name} label="name" onChange={(newName) => setName(newName)}/>
      <Input width={1000} value={address} label="address" onChange={(newAddress) => setAddress(newAddress)}/>
      <Select value={province} onChange={(newProvince)=>setProvince(newProvince)}/>
      <Input width={400} value={city} label="city" onChange={(newCity) => setCity(newCity)}/>
      <Title title="optional information" />
      <Input width={400} value={tel} label="telphone" onChange={(newTel) => setTel(newTel)} />
      <Input width={200} value={postcode} label="Postal code" onChange={(newPostcode) => setPostcode(newPostcode)} />
      <div css={css`height: 20px`} />
      <div css={inlineContainer}><Input numberOnly={true} width={200} value={cost} label="cost" onChange={(newCost) => setCost(newCost)} /><span>/hour</span></div>
      <Input numberOnly={true} width={200} value={courtNum} label="Courts Number" onChange={(newVal) => setCourtNum(newVal)} />
      <div css={css`height: 20px`} />
      <div css={btnContainer}>
        <Btn text="submit" onClick={handleSubmit} />
        <p>{msg}</p>
      </div>
    </div>
  )
}

const AddPlace = () => (
  <FirebaseContext.Consumer>
    {
      firebase => <AddPlacePage firebase={firebase} />
    }
  </FirebaseContext.Consumer>
)
export default AddPlace;