import React from 'react';
import style from './Post.module.css';
const Post = (props) => {
    return (
        <div >
            <h4 className={style}>{props.text}</h4>
        </div>
    );
};

export default Post;