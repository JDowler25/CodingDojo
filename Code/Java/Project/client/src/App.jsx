import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard'
import Properties from './components/Properties';
import CreateProp from './components/CreateProp';
import UpdateProp from './components/UpdateProp';
import { UserProvider } from './components/UserContext';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/property/new' element={<CreateProp />} />
        <Route path="/property/update/:id" element={<UpdateProp />} />
      </Routes>
    </div>
    </UserProvider>
  )
}

export default App