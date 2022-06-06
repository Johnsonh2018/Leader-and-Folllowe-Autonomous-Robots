import React from 'react';
import Signin from './components/Signin'
import SignUp from './components/SignUp';
import Account from './components/Account';
import { Route,Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/  ProtectedRoute';



function App() {
  return (

    <div>

    <h1 className='text-center text-3xl font-bold'>
    Leader and Follow Autonomous Robot
    </h1>
    <AuthContextProvider>
    <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    
    </div>
    
  )
}

export default App;
