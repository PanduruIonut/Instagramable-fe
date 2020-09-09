import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar";
import './postViewComponent.css';

function PostViewComponent({ username, commentsNr, likesNr, tags, pictureUrl, avatarUrl, caption }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    return (
        <div className="post">
            <div className="post_header">
                <Avatar className="post_avatar" alt="" src={avatarUrl}></Avatar>
                <h3>{username} </h3>
            </div>

            <img className="post_image" src={pictureUrl} />
            <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
            <h4 className="post_tags">{tags}</h4>
            <div className="stats">
                <img className="love_icon" src="https://image.flaticon.com/icons/svg/148/148836.svg"></img>
                <h4 className="post_likes">{likesNr}</h4>
                <img className="bubble_icon" src="https://image.flaticon.com/icons/svg/1077/1077049.svg"></img>
                <h4 className="post_comms">{commentsNr}</h4>
            </div>
            <form className="post_commentBox">
                <input className="post_input" type="text" placeholder="Add a comment..."
                    value={comment} onChange={(e) => setComment(e.target.value)} />
                <button className="post_button" disabled={!comment} type="submit" >Post</button>
            </form>
        </div >
    );
}

export default PostViewComponent
