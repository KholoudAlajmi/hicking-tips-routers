import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import  Nav from "./components/Nav";
import TripItem from "./components/TripItem";

const router = createBrowserRouter([
  {
    path: "/Home",
    element:
    (<div>
      <Nav/>
      <Home />
    </div>) ,
  },
  {
    path: "/Trips ",
    element:(<div>
      <Nav/>
      <TripsList />
    </div>) ,
  },
  {
    path: "/TripDetail/:tripSlug",
    element:(<div>
      <Nav/>
      <TripDetail />
    </div>) ,
  },
  {
    path: "/TripItem",
    element:(<div>
      <Nav/>
      <TripItem />
    </div>) ,
  },
  {
    path: "/TripsList/:tripDifficulty",
    element:(<div>
      <Nav/>
      <TripsList/>
    </div>) ,
  },
]);



ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
