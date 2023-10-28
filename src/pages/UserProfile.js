import { useEffect, useState } from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();
  const userId = params.id;
  const users = useOutletContext();

  useEffect(() =>{
    fetch(`http://localhost:4000/users/${userId}`)
    .then(r => r.json())
    .then(data => setUser(data))
    .catch(error => console.error(error));
  }, [userId]);

  if(!user.name){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
      <h1>{user.name}</h1>
      <p>
        <Link to={`/profile/${user.id}`}>View profile</Link>
      </p>
      </aside>
  );
};

export default UserProfile;