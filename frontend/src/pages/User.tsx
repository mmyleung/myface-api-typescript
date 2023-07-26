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
        <img className="cover-image" src={user.coverImageUrl}/>
        <div className="user-info-container">
            <img className="profile-image" src={user.profileImageUrl}/>
            <div className="user-info">
                <h2 className="full-name">{user.name}</h2>
                <h3 className="username">{user.username}</h3>
                <h3 className="email">{user.email}</h3>
            </div>
        </div>
        <section>
            <h2>{user.name.split(" ")[0]}'s Post</h2>
            <div className="posts-container">
                <ol>
                    {user.posts.map(post=>(
                        <li>
                            <div className="post-container">
                                <img className="post-img" src={post.imageUrl}/>  
                                <div className="post-text-container">
                                    <h3>{user.username}</h3>
                                    <p>{post.createdAt}</p> 
                                    <h4>{post.message}</h4> 
                                </div>
                            </div>
                        </li>)
                    )}
                </ol>
            </div>
            
            
        </section>

        <section>
            <h2>Posts {user.name.split(" ")[0]} Liked</h2>
            <div className="posts-container">
                <ol>
                    {user.likes.map(post=>(
                        <li>
                            <div className="post-container">
                            <img className="post-img" src={post.imageUrl}/>  
                                <p>{post.createdAt}</p> 
                                <h4>{post.message}</h4> 
                            </div>
                        </li> 
                        )
                    )}
                </ol>
            </div>
        </section>

        <section>
            <h2>Posts {user.name.split(" ")[0]} Disliked</h2>
                <div className="posts-container">
                    <ol>
                        {user.dislikes.map(post=>(
                            <li>
                                <div className="post-container">
                                <img className="post-img" src={post.imageUrl}/>  
                                    <p>{post.createdAt}</p> 
                                    <h4>{post.message}</h4> 
                                </div>
                            </li> 
                            )
                        )}
                    </ol>
                </div>
        </section>
     </div> 
     }
  </div>
)
}