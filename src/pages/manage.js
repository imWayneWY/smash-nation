import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { FirebaseContext } from "../firebaseConf";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import EditPlayer from "../components/editPlayer";

const root = css`
  width: 100vw;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ManagePage = ({ firebase, history }) => {
  const [players, setPlayers] = useState([]);
  const changePlayer = (index, player) => {
    let newPlayers = [...players];
    newPlayers[index] = player;
    setPlayers(newPlayers);
  };
  const deletePlayer = (index) => {
    let newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };
  const addPlayer = () => {
    let newPlayers = [...players];
    newPlayers.push("");
    setPlayers(newPlayers);
  };
  const reset = () => {
    firebase
      .firestore()
      .collection("players")
      .doc("playersDex")
      .get()
      .then((doc) => {
        setPlayers(doc.data().list);
      });
  };
  const submit = () => {
    let newPlayers = players.filter(d => d); // filt for the null string
    console.log(newPlayers);
    firebase.firestore().collection("players").doc("playersDex").set({
      list: newPlayers
    });
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user || user.uid !== "4hhV3X6zRLTbpR0atmuUxwobTMg1") {
        history.push("/");
      }
    });
    firebase
      .firestore()
      .collection("players")
      .doc("playersDex")
      .get()
      .then((doc) => {
        setPlayers(doc.data().list);
      });
  }, [firebase, history]);
  return (
    <div css={root}>
      <EditPlayer
        players={players}
        changePlayer={changePlayer}
        deletePlayer={deletePlayer}
        addPlayer={addPlayer}
        reset={reset}
        submit={submit}
      />
    </div>
  );
};

const Manage = ({ history }) => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <ManagePage firebase={firebase} history={history} />}
    </FirebaseContext.Consumer>
  );
};
export default withRouter(Manage);
