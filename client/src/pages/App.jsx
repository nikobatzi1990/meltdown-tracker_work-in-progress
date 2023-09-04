import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from '../context/ProtectedRoute';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import Entries from './Entries';
import SingleEntry from './SingleEntry';
import Submission from './Submission';
import EditSubmission from './EditSubmission';

function App() {

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path = "/" element = {<Login/>}></Route>
          <Route path = "/signup" element = {<Signup/>}></Route>
          <Route path = "/home" element = {<ProtectedRoute><Homepage/></ProtectedRoute>}></Route>
          <Route path = "/entries" element = {<ProtectedRoute><Entries/></ProtectedRoute>}></Route>
          <Route path =  "/entry/:entryId" element = {<ProtectedRoute><SingleEntry/></ProtectedRoute>}></Route>
          <Route path = "/submission" element = {<ProtectedRoute><Submission/></ProtectedRoute>}></Route>
          <Route path = "/entry/:entryId/edited" element = {<ProtectedRoute><EditSubmission/></ProtectedRoute>}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App;