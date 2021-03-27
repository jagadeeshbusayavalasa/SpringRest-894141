import React from 'react';
import './Post.css';
const post = ({ title, body, clicked }) => {
    return (
        <div className="post" onClick={clicked}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
export default post;
