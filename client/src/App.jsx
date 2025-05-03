import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Entry from "./pages/Entry";
import Submission from "./pages/Submission";
import EditEntry from "./pages/EditEntry";

function App() {
  return (
    <div className="font-quicksand">
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
                <Entry />
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
            path="/entry/:entryId/edit"
            element={
              <ProtectedRoute>
                <EditEntry />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
