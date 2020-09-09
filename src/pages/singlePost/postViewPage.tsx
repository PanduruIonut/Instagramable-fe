import React, { Component } from 'react';
import PostViewComponent from '../../components/postView/postViewComponent';
import './postViewPage.css';


const SinglePostPage = ({ location }) => {
    return (
        <div className="app" >
            <div className="app_header">
                <img className="app_headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""></img>
            </div>
            <div className="app_posts">
                <PostViewComponent username={location.state.username}
                    commentsNr={location.state.commentsNr}
                    likesNr={location.state.likesNr}
                    tags={location.state.tags}
                    pictureUrl={location.state.pictureUrl}
                    avatarUrl={location.state.commentsNr.avatarUrl}
                    caption={location.state.commentsNr.caption} ></PostViewComponent>
            </div>
        </div >
    );
}

export default SinglePostPage;
