import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "Home", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
