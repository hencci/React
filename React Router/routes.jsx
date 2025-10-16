// Let’s refactor our array of routes into its own file.
// By refactoring, we can import the routes into main.jsx and create a browser router from it, as in the above example.
// What’s convenient about this is that we can also import the routes array into any test files, where we might need to create a memory router instead of a browser router.

import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;
