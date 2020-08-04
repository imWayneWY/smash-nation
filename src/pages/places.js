/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Input from '../components/input';
import { useState, useEffect } from 'react';
import Btn from '../components/btn';
import { FirebaseContext } from '../firebaseConf';

const root = css`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const searchContainer = css`
  display: flex;
  margin: 20px 0;
`

const PlacesPage = ({ firebase }) => {
  const [keyword, setKeyword] = useState('')

  useEffect(()=>{
    console.log("keyword", keyword)
  },[keyword])

  return (
    <div css={root}>
      <div css={searchContainer}>
        <Input label="" onChange={(newKeyword) => setKeyword(newKeyword)} value={keyword} width={600} />
        <Btn text="search" />
      </div>
      <a href="/#/add">I know a place to place</a>
    </div>
  )
}

const Places = () => (
  <FirebaseContext.Consumer>
    {firebase => <PlacesPage firebase={firebase} />}
  </FirebaseContext.Consumer>
)
export default Places;