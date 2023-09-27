import './App.css';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginRegistration/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
