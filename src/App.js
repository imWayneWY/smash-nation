import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import Player from './pages/player';
import NavBar from './components/navbar';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FirebaseContext } from './firebaseConf';
import Players from './pages/players';

const main = css`
  min-height: 100vh;
  padding-top: 63px;
  box-sizing: border-box;
`
const App = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <NavBar firebase={firebase} /> }
    </FirebaseContext.Consumer>
    <div css={main}>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/player/:handle' component={Player} />
          <Route exact path='/players' component={Players} />
        </Switch>
      </Router>    
    </div>
  </div>
)

export default App;

