import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App () {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App