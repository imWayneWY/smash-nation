import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Index from './pages/index';
import Player from './pages/player';
import NavBar from './components/navbar';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const main = css`
  min-height: 100vh;
  padding-top: 63px;
  box-sizing: border-box;
`
const App = () => (
  <div>
    <NavBar />
    <div css={main}>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/player/:handle' component={Player} />
        </Switch>
      </Router>    
    </div>
  </div>
)

export default App;


// nst TestProduct = gql`
//   query TestProduct($id: ID!) {
//     node(id: $id) {
//       ... on Product {
//         title
//         id
//         vendor
//         onlineStoreUrl
//         priceRange {
//           maxVariantPrice {
//             amount
//           }
//           minVariantPrice{
//             amount
//           }
//         }
//         descriptionHtml
//       }
//     }
//   }
// `


// function Test({data}) {
//   console.log(data)
//   return (
//     <div>
//       {
//         data.node
//         ? <div dangerouslySetInnerHTML={{__html: data.node.descriptionHtml}} />
//         : <div>Loading</div>
//       }
//     </div>
//   );
// }

// const App = graphql(TestProduct, {
//   options: {variables: {id: btoa("gid://shopify/Product/3499529175133")}}
// })(Test)

// export default App;
