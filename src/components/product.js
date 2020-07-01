/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const root = css`
  margin: 20px;
  text-align: center;
  background: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  color: #000;
  p {
    color: #FF8053;
    margin: 0;
  }
  h6{
    margin: 0;
  }
  &:hover {
    box-shadow: 0 0 8px 10px #FF8053;
  }
`

const divider = css`
  width: 80%;
  margin: 10px 10%;
  border: 1px solid #eee;
`


const Product = ({product, width}) => {
  console.log(product)
  return (
    <a css={css`${root}; width: ${width}`} target="_blank" rel="noopener noreferrer" href={product.onlineStoreUrl} >
      <img css={css`width: 100%`} src={product.images.edges[0].node.originalSrc} alt="product_cover" />
      <h6>{product.title}</h6>
      <div css={divider}></div>
      <p>${product.priceRange.minVariantPrice.amount}</p>
    </a>
  )
}

export default Product;