import { useState, useEffect } from "react";
import { UserModel } from "../models/userModel";
import { useParams } from 'react-router-dom';

export default function User(){


    let { userId } = useParams();

    const [user, setUser] = useState<UserModel>();

useEffect(() => {
  fetch(`http://localhost:3001/users/${userId}`)
  .then((response) => response.json())
  .then((data) => setUser(data));
}, [])

return (
  <div>
    {user === undefined 
    ? <p>Loading</p>
     :<div>
        <img src={user.coverImageUrl}/>
        <img src={user.profileImageUrl}/>
        <h2>{user.name}</h2>
        <h3>{user.username}</h3>
        <h3>{user.email}</h3>
        <div>
            {user.posts.map(post=>(
                <div>
                   <img src={post.imageUrl}/>  
                   <p>{post.createdAt}</p> 
                   <p>{post.message}</p> 
                   
                </div>)
                
            )}
            
        </div>

        <div>
            <p>Likes:</p>
            {user.likes.map(post=>(
                <div>
                   <img src={post.imageUrl}/>  
                   <p>{post.createdAt}</p> 
                   <p>{post.message}</p> 
                   
                </div>)
                
            )}
        </div>

        <div>
            <p>Dislikes:</p>
            {user.dislikes.map(post=>(
                <div>
                   <img src={post.imageUrl}/>  
                   <p>{post.createdAt}</p> 
                   <p>{post.message}</p> 
                   
                </div>)
                
            )}
        </div>
     </div> 
     }
  </div>
)
}