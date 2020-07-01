import React from 'react';
import {withRouter} from 'react-router-dom';
import {PlayerPageWithData} from '../components/playerPage';

const Player = ({match}) => {
  return(
    <PlayerPageWithData handle={match.params.handle} />
  )
}

export default withRouter(Player);