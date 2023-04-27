import './App.css';
import HomePage from './components/HomePage';
import Variables from './components/Variables';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/:word" element={<Variables/>}/>
        <Route path="/:word/:color/:backGround" element={<Variables/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
