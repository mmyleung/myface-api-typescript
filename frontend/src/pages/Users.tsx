import { useState, useEffect } from "react";
import { UserModel } from "../models/userModel";

export default function Users(){

    const [users, setUsers] = useState<UserModel[]>();

useEffect(() => {
  fetch("http://localhost:3001/users")
  .then((response) => response.json())
  .then((data) => setUsers(data.results));
}, [])

return (
  <div>
    {users === undefined 
    ? <p>Loading</p>
    : users.map( user => 
      (<div>
        <img src= {user.profileImageUrl}/>
        <h2>{user.name}</h2>
        <h3>{user.username}</h3>
      </div>))}
  </div>
)
}