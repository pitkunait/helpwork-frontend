import React from 'react';
import styles from './Post.module.scss'
import Divider from '@material-ui/core/Divider';

const Post = () => {
    return (
        <div className={styles.post}>

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div className={styles.postTitle}>Title</div>
                <div className={styles.postTime}>54 min ago</div>
            </div>
            <Divider/>

            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et fermentum urna. Nulla nisl orci, sodales vel ligula et, semper porta nulla. Aenean dapibus, erat et molestie convallis, dui augue </div>

            <div>Pictures</div>

            <div className={styles.postDetails}>details hujails</div>
        </div>
    );
};

export default Post;
