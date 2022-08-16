import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/players')
      .then((res) => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deletePlayer = (playerId) => {
    axios
      .delete(`http://localhost:8000/api/players/${playerId}`)
      .then((res) => {
        const newPlayers = players.filter((player) => player._id !== playerId);
        setPlayers(newPlayers);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
        <h1 style={{position: "relative", justifySelf: "center"}}>Current Roster</h1>
        <div>
            <button style={{padding: "10px",position: "relative", justifySelf: "right", background: 'royalblue'}} onClick={ e => {navigate("/new")} }>Add Player</button>
        </div>
            {players.map((player) => (
            <div key={player._id} className="card">
            <h2>{player.playerName}</h2>
            <img src={player.imageUrl} alt={player.playerName} />
            <br />
            <button style={{ marginTop: '1rem', background: 'blue' }} onClick={ e => {navigate(`/player/${player._id}`)} }>View Player</button>
            <span> | </span>
            <button style={{ marginTop: '1rem', background: 'red' }} onClick={() => deletePlayer(player._id)}>Recruit Player</button>
            
            
            <br />
            </div>
      ))}
    </div>
    
  );
};

export default PlayerList;

