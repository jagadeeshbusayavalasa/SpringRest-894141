import React, { Component } from 'react';
import axios from 'axios';
import Posts from './posts/Posts';
import PostDetail from './post-detail/PostDetail';
import './Blog.css';
class Blog extends Component {
    state = {
        posts: [],
        error: false,
        post: null
    }
    getPost = (id) => {
        const localPosts = [...this.state.posts];
        const post = localPosts.find(post => post.id === id);
        this.setState({
            post: post
        })

    }
    render() {
        return (
            <div className="blog">
                <Posts click={this.getPost} error={this.state.error} posts={this.state.posts} />
                <PostDetail post={this.state.post} />
            </div>
        )
    }
    componentDidMount(prevProps, prevState) {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            const updatedPosts = response.data.slice(0, 3);
            this.setState({
                posts: updatedPosts
            });
        }).catch((err) => {
            this.setState({
                error: true
            });
        })

    }

}
export default Blog;