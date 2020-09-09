import React, { useState } from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";

function Post({ username, commentsNr, likesNr,
    tags, pictureUrl, avatarUrl, caption }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [tagValues, setTagValues] = useState(['']);
    const [picture, setPicture] = useState('');
    const [postPicture, setPostPicture] = useState('');
    const history = useHistory();

    const onClick = () => {
        history.push({
            pathname: '/details',
            state: {
                username, commentsNr, likesNr,
                tags: tagValues, pictureUrl: postPicture, avatarUrl: picture, caption: tagValues,
            }
        }
        );
    }

    React.useEffect(() => {
        setTagValues([...tagValues, caption]);
    }, [tags]);

    React.useEffect(() => {
        setPicture(pictureUrl);
    }, [tags]);

    const onPhotoError = () => {
        setPicture("https://source.unsplash.com/random");
        setPostPicture("https://source.unsplash.com/random");
    }


    return (
        <div className="post" onClick={() => onClick()}>
            <div className="post_header">
                <Avatar className="post_avatar" alt="" src={picture} onError={onPhotoError}></Avatar>
                <h3>{username} </h3>
            </div>

            <img className="post_image" src={postPicture} onError={() => { onPhotoError() }} />
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
