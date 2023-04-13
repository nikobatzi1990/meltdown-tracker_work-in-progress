import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import App from "./pages/App";
import Entries from "./pages/Entries";
import SingleEntry from "./pages/SingleEntry";
import Submission from "./pages/Submission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signUp",
    element: <Signup />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/entries",
    element: <Entries />
  },
  {
    path:"/entry",
    element: <SingleEntry />
  },
  {
    path: "/newEntry",
    element: <Submission />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = { router } />
  );
  