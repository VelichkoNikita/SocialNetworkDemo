import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://politobzor.net/uploads/posts/2015-05/org_vkkn955.jpeg'/>
           <div> {props.message}</div>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;

