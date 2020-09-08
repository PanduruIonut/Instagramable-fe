import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([{
    username: "Ionut",
    caption: "Caption",
    imageUrl: "https://reactjs.org/logo-og.png"
  }, {
    username: "Ionut",
    caption: "Caption",
    imageUrl: "https://reactjs.org/logo-og.png"
  },
  {
    username: "Ionut",
    caption: "Caption",
    imageUrl: "https://reactjs.org/logo-og.png"
  }
  ]);

  return (
    <div className="app">
      <div className="app_header">
        <img className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""></img>
      </div>
      <div className="app_posts">
        {posts.map(post => {
          return <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        })}
      </div>
    </div >
  );
}

export default App;
