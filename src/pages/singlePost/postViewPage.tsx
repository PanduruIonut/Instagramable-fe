import React, { Component } from 'react';
import PostViewComponent from '../../components/postView/postViewComponent';
import './postViewPage.css';


class SinglePostPage extends Component<any> {
    public render() {

        return (
            <div className="app" >
                <div className="app_header">
                    <img className="app_headerImage"
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""></img>
                </div>
                <div className="app_posts">
                    <PostViewComponent username={this.props.location.state.username}
                        commentsNr={this.props.location.state.commentsNr}
                        likesNr={this.props.location.state.likesNr}
                        tags={this.props.location.state.tags}
                        pictureUrl={this.props.location.state.pictureUrl}
                        avatarUrl={this.props.location.state.commentsNr.avatarUrl}
                        caption={this.props.location.state.commentsNr.caption} ></PostViewComponent>
                </div>
            </div >
        );
    }
}

export default SinglePostPage;
