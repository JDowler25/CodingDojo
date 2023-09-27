import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom';

function App () {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App