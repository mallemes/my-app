import React from 'react';
import Post from "./Post";
const Posts = (props) => {
    const newPosts = props.posts.map((post)=> <Post key={post.text} text={post.text}/>)
    return (
        <div>
            <div><h3>POSTS</h3></div>
            <div>
                {newPosts}
            </div>
        </div>
    );
};

export default Posts;