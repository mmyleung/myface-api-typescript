import { useState, useEffect } from "react";
import { PostModel } from "../models/postModel";
import Pagination from "../components/Pagination";

function Post(post: PostModel) {
  return <div>
    <img src= {post.imageUrl}/>
    <h2>{post.postedBy.name}</h2>
  </div>
}

export default function Posts(){

return (
  <Pagination apiPath="posts" resultElement={Post}/>
)
}