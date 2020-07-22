import React from 'react';
import styles from './JobsList.module.scss'
import Post from '../Post/Post';
import Button from 'react-bootstrap/Button';

const JobsList = () => {
    return (
        <div className={styles.jobsList}>
            <Button variant="outline-primary" className="btn-block" >Post a job</Button>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default JobsList;
