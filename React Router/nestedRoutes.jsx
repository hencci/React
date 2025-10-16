// Now, what if you want to render a section of a page differently, based on different URLs? This is where nested routes come into play!

// We can add routes nested as the children of one another to ensure that the child gets rendered alongside the parent

{
  /*     Popeye.jsx    */
}

import { Link } from "react-router";

const Pepeye = () => {
  return (
    <>
      <p>Hi, I am Popeye! I love to eat Spinach!</p>
      <Link to="/">Click to go back</Link>
    </>
  );
};

export default Pepeye;

{
  /*     Spinach.jsx      */
}

import { Link } from "react-router";

const Spinach = () => {
  return (
    <>
      <p>Hi, I am Spinach! Popeye loves to eat me!</p>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

// {export default Spinach;}

// Now, we can rewrite the routes as given:

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
