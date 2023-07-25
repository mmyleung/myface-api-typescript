import { useState, useEffect } from "react";
import { PostModel } from "../models/postModel";

export default function Posts(){

    const [posts, setPosts] = useState<PostModel[]>();

useEffect(() => {
  fetch("http://localhost:3001/posts")
  .then((response) => response.json())
  .then((data) => setPosts(data.results));
}, [])

return (
  <div>
    {posts === undefined 
    ? <p>Loading</p>
    : posts.map( post => 
      (<div>
        <img src= {post.imageUrl}/>
        <h2>{post.postedBy.name}</h2>
      </div>))}
  </div>
)
}