import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const root = css`
  width: 20vw;
  margin: 4px;
  text-align: center;
`


const Product = ({product}) => {
  console.log(product)
  return (
    <a css={root} href={product.onlineStoreUrl} >
      <img css={css`width: 100%`} src={product.images.edges[0].node.originalSrc} />
      <h6>{product.title}</h6>
      <p>Price from {product.priceRange.minVariantPrice.amount}</p>
    </a>
  )
}

export default Product;