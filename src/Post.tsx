import React, { useState } from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    return (
        <div className="post">
            <div className="post_header">
                <Avatar className="post_avatar" alt="" src="/static/images/avatar/1/jpg"></Avatar>
                <h3>{username} </h3>
            </div>

            <img className="post_image" src={imageUrl} />
            <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
            <form className="post_commentBox">
                <input className="post_input" type="text" placeholder="Add a comment..."
                    value={comment} onChange={(e) => setComment(e.target.value)} />
                <button className="post_button" disabled={!comment} type="submit" >Post</button>
            </form>
        </div>
    );
}

export default Post
