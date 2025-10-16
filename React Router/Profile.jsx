// This nested routes us to render the child component alongside the parent, through an Outlet component! We can rewrite the Profile component to add an Outlet which will get replaced by the various profiles when that route is visited!

import { Outlet } from "react-router";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      <Outlet />
    </div>
  );
};

export default Profile;
