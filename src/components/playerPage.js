import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Loading from './loading';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import Product from './product';

const GetPlayerCollection = gql`
  query GetPlayerCollection($handle: String!) {
    collectionByHandle(handle: $handle) {
      title
      description
      image {
        originalSrc
      }
      products(first: 100) {
        edges{
          node
          {
            title
            onlineStoreUrl
            images(first: 1) {
              edges{
                node{
                  originalSrc
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
`
const root=css`
  display: flex;
  width: 100vw;
`
const colorChanging = keyframes`
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
`

const playerWrapper  =css`
  width: 40vw;
  box-sizing: border-box;
  /* padding: 20px; */
  text-align: center;
  color: #fff;
`

const playerCard = css`
  background-image: linear-gradient(125deg, #2c3e50, #27ae60, #2980b9, #e74c3c, #8e44ad);
  background-size: 400%;
  animation: ${colorChanging} 15s infinite;
  padding: 30px;
`

const products = css`
  width: 70vw;
  box-sizing: border-box;
  padding: 1vw;
`

const productsList = css`
  display: flex;
  flex-wrap: wrap;
`

const PlayDataShow = ({collection}) => {
  console.log(collection)
  return (
    <div css={root}>
      <div css={playerWrapper}>
        <div css={playerCard}>
          <img css={css`width: 100%`} src={collection.image.originalSrc} />
          <h2>{collection.title}</h2>        
          <p>{collection.description}</p>
        </div>
      </div>
      <div css={products}>
        <div css={productsList}>
          {
            collection.products.edges.map((node, index) => <Product key={index} product={node.node} />)
          }        
        </div>
      </div>
    </div>
  )
}

const PlayerPage = ({data}) => {
  return(
    <div>
      {
        data.loading
        ? <Loading />
        : <PlayDataShow collection = {data.collectionByHandle} />
      }
    </div>
  )
}

const PlayerWithData = graphql(GetPlayerCollection, {
  options: ({handle}) => ({ variables: { handle } }),
})(PlayerPage);

export default PlayerWithData
