import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard'
import Properties from './components/Properties';
import { Route, Routes } from 'react-router-dom';

function App () {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/properties' element={<Properties/>}/>
      </Routes>
    </div>
  )
}

export default App