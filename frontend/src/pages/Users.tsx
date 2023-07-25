import { UserModel } from "../models/userModel";
import Pagination from "../components/Pagination";

function User(user: UserModel) {
  return <div>
    <img src= {user.profileImageUrl}/>
    <h2>{user.name}</h2>
    <h3>{user.username}</h3>
  </div>
}

export default function Users(){

return (
  <Pagination apiPath="users" resultElement={User}/>
)
}