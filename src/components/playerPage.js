import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Loading from './loading';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import Product from './product';

const GetPlayerCollection = gql`
  query GetPlayerCollection($handle: String!) {
    collectionByHandle(handle: $handle) {
      handle
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
  return (
    <div css={root}>
      <div css={playerWrapper}>
        <div css={playerCard}>
          <img css={css`width: 100%;`} src={collection.image.originalSrc} alt="palyer-cover" />
          <h2>{collection.title}</h2>        
          <p>{collection.description}</p>
        </div>
      </div>
      <div css={products}>
        <div css={productsList}>
          {
            collection.products.edges.map((node, index) => <Product key={index} product={node.node} width="15vw" />)
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
const cardContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
`

const playerCardCover = css`
  width: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`
const PlayDataShowCard = ({collection}) => (
  <div>
    <h3>{collection.title}</h3>
    <hr />
    <div css={cardContainer}>
      <a css={playerCardCover} href={`/#/player/${collection.handle}`}>
        <img css={css`width: 100%; margin-top: 20px;`} src={collection.image.originalSrc} alt="player-cover"></img>
        <h6>{collection.title}</h6>
      </a>
      {
        collection.products.edges.map((node,index)=> <Product key={index} product={node.node} width="10%" />)
      }
    </div>  
  </div>
)

const card = css`
  width: 100%;
  height: 360px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
`

const PlayerCard = ({data}) => {
  return(
    <div css={card}>
      {
        data.loading
        ? <Loading />
        : <PlayDataShowCard collection = {data.collectionByHandle} />
      }
    </div>
  )
}

const PlayerPageWithData = graphql(GetPlayerCollection, {
  options: ({handle}) => ({ variables: { handle } }),
})(PlayerPage);


const PlayerCardWithData = graphql(GetPlayerCollection, {
  options: ({handle}) => ({ variables: { handle } }),
})(PlayerCard);


export  { PlayerPageWithData, PlayerCardWithData }
