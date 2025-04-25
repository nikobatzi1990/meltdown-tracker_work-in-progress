import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import SingleEntry from "./pages/SingleEntry";
import Submission from "./pages/Submission";
import EditSubmission from "./pages/EditSubmission";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/entry/:entryId"
            element={
              <ProtectedRoute>
                <SingleEntry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/submission"
            element={
              <ProtectedRoute>
                <Submission />
              </ProtectedRoute>
            }
          />
          <Route
            path="/entry/:entryId/edited"
            element={
              <ProtectedRoute>
                <EditSubmission />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
