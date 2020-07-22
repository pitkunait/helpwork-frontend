import React from 'react';
import styles from './Post.module.scss';
import Divider from '@material-ui/core/Divider';
import { IPost } from '../../utils/types/Posts';
import ParserService from '../../services/ParserService';


interface PostProps extends IPost {

}


const Post = (props: PostProps) => {
    return (
        <div className={styles.post}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={styles.postTitle}>{props.title}</div>
                <div className={styles.postTime}>{ParserService.instance.timeSince(props.createdAt)}</div>
            </div>
            <Divider/>
            <div className={styles.postDescription}>{props.description}</div>
            {/*<div>Pictures</div>*/}
            {/*<div className={styles.postDetails}>details hujails</div>*/}
        </div>
    );
};

export default Post;
