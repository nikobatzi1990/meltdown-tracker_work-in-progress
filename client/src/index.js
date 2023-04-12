import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/App';

// import Entries from "./pages/Entries";
// import SingleEntry from "./pages/SingleEntry";
// import Form from "./pages/Form";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/",
    element: <Signup />
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
    element: <Form />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = { router } />
  );
  
  */