// There’s a couple of ways of defining our app’s routes, we will follow the object-based approach.

{
  /*  INSTALL ROUTER: npm  install react-router    */
}

// Add the following to main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile"; //Assumed file name

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

{
  /*   The link element   */
}

//  React Router exports a custom Link element to be used instead of the regular a tag.

import { Link } from "react-router"; //Profile.jsx file

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;

// And now, we don’t get the browser reloading every time we click the link on the navbar!
