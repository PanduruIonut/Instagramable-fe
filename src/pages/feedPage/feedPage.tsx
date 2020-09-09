import React, { useEffect, useState } from 'react';
import Post from '../../components/post/Post';
import './feedPage.css';

function FeedPage() {
  const [posts, setPosts] = useState([
  ])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch('http://127.0.0.1:8000/api/posts')
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            setPosts(data.photos);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }

  return (
    <div className="app">
      <div className="app_header">
        <img className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""></img>
      </div>
      <div className="app_posts">
        {posts.map((post: any, i) => {
          return <Post key={i} username={post.user.username}
            caption={`${post.photo_caption != null ? post.photo_caption.text : ''}`}
            imageUrl={post.standard_resolution_url}
            avatarUrl={post.user.profile_picture} />
        })}
      </div>
    </div >
  );
}

export default FeedPage;
