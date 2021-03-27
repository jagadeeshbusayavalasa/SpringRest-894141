import React, { Component } from 'react';
import Post from './post/Post';
import './Posts.css';
class Posts extends Component {
    render() {
        let posts = <h1>There is a problem in the Server</h1>
        if (!this.props.error) {
            posts = this.props.posts.map(post => {
                return <Post clicked={() => this.props.click(post.id)} key={post.id} title={post.title} body={post.body} />;
            });
        }
        return (
            <div className="posts">
                {posts}
            </div>
        )
    }
}
export default Posts;