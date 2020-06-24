import React from 'react';
import './App.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const TestProduct = gql`
  query TestProduct($id: ID!) {
    node(id: $id) {
      ... on Product {
        title
        id
        vendor
        onlineStoreUrl
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice{
            amount
          }
        }
        descriptionHtml
      }
    }
  }
`


function Test({data}) {
  console.log(data)
  return (
    <div>
      {
        data.node
        ? <div dangerouslySetInnerHTML={{__html: data.node.descriptionHtml}} />
        : <div>Loading</div>
      }
    </div>
  );
}

const App = graphql(TestProduct, {
  options: {variables: {id: btoa("gid://shopify/Product/3499529175133")}}
})(Test)

export default App;
