import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import Player from './pages/player';
import NavBar from './components/navbar';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FirebaseContext } from './firebaseConf';
import Players from './pages/players';
import Login from './pages/login';
import Manage from './pages/manage';
import AddPlace from './pages/addPlace';

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
          <Route exact path='/login' component={Login} />
          <Route exact path='/manage' component={Manage} />
          <Route exact path='/add-place' component={AddPlace} />
        </Switch>
      </Router>    
    </div>
  </div>
)

export default App;

