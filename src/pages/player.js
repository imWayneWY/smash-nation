import React from 'react';
import {withRouter} from 'react-router-dom';
import PlayerWithData from '../components/playerPage';

const Player = ({match}) => {
  return(
    <PlayerWithData handle={match.params.handle} />
  )
}

export default withRouter(Player);