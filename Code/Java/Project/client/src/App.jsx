import React from 'react'
import SignIn from './components/SignIn'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App