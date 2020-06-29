import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const root = css`
  width: 15vw;
  margin: 20px;
  text-align: center;
  background: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  color: #000;
  p {
    color: #FF8053;
  }
  &:hover {
    box-shadow: 0 0 8px 10px #FF8053;
  }
`

const divider = css`
  width: 80%;
  margin: 5px 10%;
  border: 1px solid #eee;
`


const Product = ({product}) => {
  console.log(product)
  return (
    <a css={root} target="_blank" href={product.onlineStoreUrl} >
      <img css={css`width: 100%`} src={product.images.edges[0].node.originalSrc} />
      <h6>{product.title}</h6>
      <div css={divider}></div>
      <p>${product.priceRange.minVariantPrice.amount}</p>
    </a>
  )
}

export default Product;