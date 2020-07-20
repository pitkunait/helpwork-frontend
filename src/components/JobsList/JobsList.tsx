import React from 'react';
import styles from './JobsList.module.scss'
import Post from '../Post/Post';

const JobsList = () => {
    return (
        <div className={styles.jobsList}>
            <Post />
            <Post />
        </div>
    );
};

export default JobsList;
