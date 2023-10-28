import { Outlet, useOutletContext } from "react-router-dom";
import UserProfile from "../components/UserProfile";

function Home() {
  const users = useOutletContext();

  return (
    <main>
      <h1>Home!</h1>
      <Outlet />
      {userList}
    </main>
  );
}

export default Home;
