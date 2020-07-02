import { useEffect, useState } from "react";
import { FirebaseContext } from "./../firebaseConf";
import { PlayerCardWithData } from "../components/playerPage";
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const header = css`
  width: 100vw;
  background: #FF8053;
  color: #fff;
  text-align: center;
  padding: 10px;
`

const PlayersPage = ({ firebase }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("players")
      .doc("playersDex")
      .get()
      .then((doc) => {
        setPlayers(doc.data().list);
        console.log(doc.data());
      });
  }, [firebase]);
  return (
    <div>
      <div css={header}>
        Click your favorite players to view & buy the equipment, apparel & footwear they use
      </div>
      {
        players &&
          players.map((player, index) => 
            <PlayerCardWithData key={index} handle={player} />)
      }
    </div>
  );
};

const Players = () => (
  <FirebaseContext.Consumer>
    {(firebase) => <PlayersPage firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Players;
