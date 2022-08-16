import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPlayer = () => {
  const [playerName, setPlayerName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [playerNumber, setPlayerNumber] = useState(0);
  const [playerInformation, setPlayerInformation] = useState('');
  const [playerPosition, setPlayerPosition] = useState('');
  const [classOf, setClassOf] = useState('');
  const [throws, setThrows] = useState('');
  const [bats, setBats] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/players', {
        playerName,
        imageUrl,
        playerNumber,
        playerInformation,
        playerPosition,
        classOf,
        throws,
        bats,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return(
    <div>
        
        <form onSubmit={handleSubmit}>
            <h1>Add a Player</h1>
            <div>
                <button style={{padding: "10px",position: "relative", justifySelf: "right", background: 'royalblue'}} onClick={(e) => {navigate("/")} }>Player Roster</button>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px", textAlign: "left"}}>
                
                <table>
                    <tr>
                        <td><label>Player Name:</label></td>
                        <td>
                            <input type="text" 
                            name="playerName"
                            value={playerName}
                            onChange={(e) => { setPlayerName(e.target.value) } } 
                            style={{marginBottom: "20px"}}/>
                            {errors.playerName && <span className="text-danger">{errors.playerName.message}</span>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Image Url:</label></td>
                        <td>
                            <input type="text" 
                            name="imageUrl"
                            value={imageUrl}
                            onChange={(e) => { setImageUrl(e.target.value) } } 
                            style={{marginBottom: "20px"}}/>
                            {errors.imageUrl && <span className="text-danger">{errors.imageUrl.message}</span>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Player Number:</label></td>
                        <td>
                            <input type="number" 
                            name="playerNumber"
                            value={playerNumber}
                            onChange={(e) => { setPlayerNumber(e.target.value) } } 
                            style={{marginBottom: "20px"}}/>
                            {errors.playerNumber && <span className="text-danger">{errors.playerNumber.message}</span>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Player Information:</label></td>
                        <td>
                            <textarea
                            cols="25"
                            name="catchPhrase"
                            value={playerInformation}
                            onChange={(e) => { setPlayerInformation(e.target.value) } } ></textarea>
                            {errors.playerInformation && <span className="text-danger">{errors.playerInformation.message}</span>}
                        </td>
                    </tr>
                </table>
                
                <table>
                    <tr>
                        <td><label>Player Position:</label></td>
                        <td>
                            <select value={playerPosition} name="playerPosition" onChange={(e) =>  setPlayerPosition(e.target.value)} style={{marginBottom: "20px"}}>
                                <option>Select Position</option>
                                <option value="RHP">RHP</option>
                                <option value="LHP">LHP</option>
                                <option value="C">C</option>
                                <option value="1B">1B</option>
                                <option value="2B">2B</option>
                                <option value="3B">3B</option>
                                <option value="SS">SS</option>
                                <option value="Outfield">Outfield</option>
                            </select>
                                {errors.playerPosition && <span className="text-danger">{errors.playerPosition.message}</span>}
                            
                        </td>
                    </tr>
                    <tr>
                        <td><label>Class Of:</label></td>
                        <td>
                            <input type="number" 
                            name="classOf"
                            value={classOf}
                            onChange={(e) => { setClassOf(e.target.value) } } 
                            style={{marginBottom: "20px"}}/>
                            {errors.classOf && <span className="text-danger">{errors.classOf.message}</span>}
                        </td>
                    </tr>
                    <tr>
                        <td><label>Throws:</label></td>
                        <td>
                            <input type="text" 
                            name="throws"
                            value={throws}
                            onChange={(e) => { setThrows(e.target.value) } } 
                            style={{marginBottom: "20px"}}/>
                            {errors.throws && <span className="text-danger">{errors.throws.message}</span>}
                        </td>   
                    </tr>
                    <tr>
                        <td><label>Bats:</label></td>
                        <td>
                            <input type="text" 
                            name="bats"
                            value={bats}
                            onChange={(e) => { setBats(e.target.value) } } 
                            style={{marginBottom: "20px"}}/>
                            {errors.bats && <span className="text-danger">{errors.bats.message}</span>}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>Add Player</button>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
    </div>
);
};

export default NewPlayer;