import './App.css';
import HeaderForm from './components/HeaderForm';
import { Route, Routes } from 'react-router-dom';
import PlanetPage from './views/PlanetPage';
import CharacterPage from './views/CharacterPage';

function App() {
  return (
    <div className="App">
      <h1>Luke-APIWalker</h1>
      <HeaderForm/>

      <Routes>
        <Route path='/planet/:id' element = {<PlanetPage/>} />
        <Route path='/people/:id' element = {<CharacterPage/>} />
      </Routes> 
    </div>
  );
}

export default App;
