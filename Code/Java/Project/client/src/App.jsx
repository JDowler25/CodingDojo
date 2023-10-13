import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import CreateProp from './components/CreateProp';
import UpdateProp from './pages/UpdateProp';
import { UserProvider } from './context/UserContext';
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