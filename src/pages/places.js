/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Input from '../components/input';
import { useState } from 'react';
import Btn from '../components/btn';

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

const Places = () => {
  const [keyword, setKeyword] = useState('')

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

export default Places;