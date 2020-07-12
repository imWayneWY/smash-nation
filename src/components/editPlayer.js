/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { primaryColor } from "./../constants";

const playerInput = css`
  display: flex;
  align-items: center;
`

const input = css`
  width: 400px;
  height: 40px;
  font-size: 24px;
  border-radius: 5px;
  border: 2px solid ${primaryColor};
  margin-top: 10px;
`;

const icon = css`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
`

const Player = ({ player, changePlayer, index, deletePlayer }) => {
  const onChange = (e) => { changePlayer(index, e.target.value)};
  const onDelete = () => {deletePlayer(index)}
  return (
    <div css={playerInput}>
      <input onChange={onChange} css={input} value={player}></input>
      <svg onClick={onDelete} css={icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2088" width="200" height="200"><path d="M512.2 64.4c-247.4 0-447.9 200.6-447.9 448s200.5 447.9 447.9 447.9 447.9-200.5 447.9-447.9-200.5-448-447.9-448z m203.5 605.9c12.5 12.5 12.5 33.1 0 45.6s-33.1 12.5-45.6 0l-158-158-158 158c-12.5 12.5-33.1 12.5-45.6 0s-12.5-33.1 0-45.6l158-158-158-158c-12.5-12.5-12.5-33.1 0-45.6s33.1-12.5 45.6 0l158 158 158-158c12.5-12.5 33.1-12.5 45.6 0s12.5 33.1 0 45.6l-158 158 158 158z" p-id="2089" fill={primaryColor}></path></svg>
    </div>
  )
};
const root = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const btn = css`
  background: ${primaryColor};
  color: #fff;
  text-transform: uppercase;
  border: 0 solid #fff;
  border-radius: 5px;
  height: 40px;
  width: 200px;
  margin: 10px;
`

const EditPlayer = ({ players, changePlayer, deletePlayer, addPlayer, reset, submit }) => {

  return (
    <div css={root}>
      {players.map((player, index) => (
        <Player player={player} key={index} index={index} changePlayer={changePlayer} deletePlayer={deletePlayer} />
      ))}
      <button css={btn} onClick={addPlayer}>Add new player</button>
      <div>
        <button css={css`${btn}; background: #ccc;`} onClick={reset}>Reset</button>
        <button css={css`${btn}; background: darkgreen;`} onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
export default EditPlayer;
