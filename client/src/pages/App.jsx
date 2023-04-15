import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import Entries from './Entries';
import SingleEntry from './SingleEntry';
import Submission from './Submission';

function App() {

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path = "/" element = {<Login/>}></Route>
          <Route path = "/signup" element = {<Signup/>}></Route>
          <Route path = "/home" element = {<Homepage/>}></Route>
          <Route path = "/entry" element = {<SingleEntry/>}></Route>
          <Route path = "/entries" element = {<Entries/>}></Route>
          <Route path = "/submission" element = {<Submission/>}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App;