import './App.css';
import { PostModel } from './models/postModel'
import { useState, useEffect } from "react";

function App() {

    
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


export default App
