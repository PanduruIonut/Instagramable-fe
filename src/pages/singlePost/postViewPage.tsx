import React, { useEffect, useState } from 'react';
import './postViewPage.css';
import PostViewComponent from '../../components/postView/postViewComponent';

function SinglePostPage() {
    const [posts, setPosts] = useState([
    ])


    return (
        <div className="app">
            <div className="app_header">
                <img className="app_headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""></img>
            </div>
            <div className="app_posts">
                <PostViewComponent username={"username"} commentsNr={"commentsNr"} likesNr={"likesNr"}
                    tags={"tags"} pictureUrl={"pictureUrl"} avatarUrl={"avatarUrl"} caption={"caption"} ></PostViewComponent>
            </div>
        </div >
    );
}

export default SinglePostPage;
