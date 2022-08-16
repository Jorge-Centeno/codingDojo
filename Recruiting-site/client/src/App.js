import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import NewPlayer from './components/NewPlayer';
import PlayerDetails from './components/PlayerDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<PlayerList />} />
          <Route path="/new" element={<NewPlayer />} />
          <Route path="/player/:id" element={<PlayerDetails />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;