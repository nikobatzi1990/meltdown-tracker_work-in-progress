import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Entries from "./pages/Entries";
import SingleEntry from "./pages/SingleEntry";
import Form from "./pages/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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
