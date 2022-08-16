import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const [player, setPlayer] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/players/${id}`)
            .then(res => {
                console.log(res.data);
                setPlayer(res.data);
            })
            .catch((err) => console.log('GET PLAYER BY ID ERROR', err));
  }, [id]);
                
            
  
return (
  <div style={{width: "60%", margin: "0px auto"}}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
          <h1 style={{position: "relative", justifySelf: "center"}}>{player.playerName}</h1>
          <div>
              <button style={{padding: "10px",position: "relative", justifySelf: "right", marginTop: "30%", background: 'royalblue'}} onClick={ e => {navigate("/")} }>Player Roster</button>
          </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
              <img src={player.imageUrl} width="350" height="250" style={{marginBottom: "10px", marginTop: "30px"}}/>
              <h1><textarea cols="50" value={player.playerInformation} disabled></textarea></h1>
          </div>
          <div>
              <h2 style={{textAlign: "center"}}>About</h2>
              <p>Position: {player.playerPosition}</p>
              <p>Number: {player.playerNumber}</p>
              <p>Class of: {player.classOf}</p>
              <p>Throws: {player.throws}</p>
              <p>Bats: {player.bats}</p>
              
          </div>
      </div>
  </div>
)
}

export default Player;