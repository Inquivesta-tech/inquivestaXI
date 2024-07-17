import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Tarang from "./pages/Tarang";
import Register from "./pages/Register";
import TarangEvents from "./pages/TarangEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/event",
    element: <Events />,
  },
  {
    path: "/tarang",
    element: <Tarang />,
  },
  {
    path: "/tarang/register",
    element: <Register />
  },
  {
    path: "/tarang/events",
    element: <TarangEvents />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
