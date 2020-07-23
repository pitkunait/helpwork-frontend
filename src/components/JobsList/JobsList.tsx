import React, { useEffect } from 'react';
import Post from '../Post/Post';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { postsFetchPosts, postsStartCreatingNewPost } from '../../store/actions/PostsActions';
import { IPost } from '../../utils/types/Posts';


interface JobsListProps {
    posts: IPost[]
    postsStartCreatingNewPost: () => void
    postsFetchPosts: any
}


const JobsList = (props: JobsListProps) => {

    const { postsFetchPosts } = props;
    useEffect(() => {postsFetchPosts();}, [postsFetchPosts]);

    const { posts, postsStartCreatingNewPost } = props;
    return (
        <>
            <Button variant="outline-primary" className="btn-block" onClick={postsStartCreatingNewPost}>Post a
                job</Button>
            {posts.map((post, index) => <Post {...post} key={index}/>)}
        </>
    );
};

const mapDispatchToProps = {
    postsStartCreatingNewPost,
    postsFetchPosts,
};

const mapStateToProps = (state: any) => {
    return {
        posts: state.posts.posts,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
