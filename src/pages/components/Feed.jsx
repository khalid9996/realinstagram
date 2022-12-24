import React from "react";
import "./feed.css";
import Post from "./Post";
import { posts } from "../../testdata";


console.log(posts)

const Feed = () => {
  return (
    <div className="feed">
     {posts.map(post => (
      <Post user={post.username} key={post.key} posturl={post.posturl}/>
      ))}  
    </div>
  );
};

export default Feed;
