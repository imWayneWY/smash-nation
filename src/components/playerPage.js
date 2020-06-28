import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Loading from './loading';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Product from './product';

const GetPlayerCollection = gql`
  query GetPlayerCollection($handle: String!) {
    collectionByHandle(handle: $handle) {
      title
      descriptionHtml
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
  height: 100vh;
`

const playerWrapper  =css`
  width: 30vw;
  height: 100%;
  box-sizing: border-box;
  padding: 1vw;
  text-align: center;
`

const products = css`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1vw;
`

const PlayDataShow = ({collection}) => {
  console.log(collection)
  return (
    <div css={root}>
      <div css={playerWrapper}>
        <img css={css`width: 100%`} src={collection.image.originalSrc} />
        <h2>{collection.title}</h2>
      </div>
      <div css={products}>
        {
          collection.products.edges.map((node, index) => <Product key={index} product={node.node} />)
        }
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