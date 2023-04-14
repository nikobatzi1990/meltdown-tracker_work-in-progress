import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';

function App() {

  return (
    <div>
      {/* <AuthContextProvider> */}
        <Routes>
          <Route path = "/" element = {<Login/>}></Route>
          <Route path = "/signup" element = {<Signup/>}></Route>
          <Route path = "/home" element = {<Homepage/>}></Route>
        </Routes>
      {/* </AuthContextProvider> */}
    </div>
  )
}

export default App;