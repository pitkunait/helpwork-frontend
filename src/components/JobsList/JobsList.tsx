import React, { useEffect } from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import { postsFetchPosts, postsStartCreatingNewPost, setCurrentPage } from '../../store/actions/PostsActions';
import { IPost } from '../../utils/types/Posts';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './JobsList.module.scss'

interface JobsListProps {
    posts: IPost[]
    postsStartCreatingNewPost: () => void
    setCurrentPage: any
    postsFetchPosts: any
    hasNextPage: boolean
    currentPage: number
}


const JobsList = (props: JobsListProps) => {

    const {setCurrentPage, currentPage, hasNextPage, posts, postsStartCreatingNewPost, postsFetchPosts } = props;
    useEffect(() => {
        postsFetchPosts(0);
        setCurrentPage(0)
        }, [postsFetchPosts]);

    const fetchData = () => {
        const nextPage = currentPage + 1
        postsFetchPosts(nextPage)
        setCurrentPage(nextPage)
    }


    console.log(posts);
    return (
        <div className={styles.jobsList}>
            <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasNextPage}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }

                // below props only if you need pull down functionality
                // refreshFunction={() => {}}
                // pullDownToRefresh
                // pullDownToRefreshContent={
                //     <WholePageSpinner/>
                // }
                // releaseToRefreshContent={
                //     <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>}
            >
                <div style={{padding:"0 20px"}}>
                {posts.map((post, index) => <Post {...post} key={index}/>)}
            </div>

            </InfiniteScroll>

        </div>
    );
};

const mapDispatchToProps = {
    postsStartCreatingNewPost,
    postsFetchPosts,
    setCurrentPage
};

const mapStateToProps = (state: any) => {
    return {
        posts: state.posts.posts,
        hasNextPage: state.posts.hasNextPage,
        currentPage: state.posts.currentPage
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
