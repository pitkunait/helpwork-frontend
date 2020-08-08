import React, { useCallback, useEffect } from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import { postsFetchPosts, postsResetPosts, postsSetCurrentPage } from '../../store/actions/PostsActions';
import { IPost } from '../../utils/types/Posts';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './JobsList.module.scss';
import { WholePageSpinner } from '../Spinner/Spinner';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

interface JobsListProps {
    posts: IPost[]
    postsSetCurrentPage: any
    postsFetchPosts: any
    postsResetPosts: any
    hasNextPage: boolean
    currentPage: number
}


const JobsList = (props: JobsListProps) => {

    const {postsResetPosts, postsSetCurrentPage, currentPage, hasNextPage, posts, postsFetchPosts } = props;

    const loadNewPosts = useCallback(() => {
        postsResetPosts()
        postsSetCurrentPage(0)
        postsFetchPosts(0)
    }, [postsFetchPosts, postsSetCurrentPage, postsResetPosts])

    useEffect(loadNewPosts, [loadNewPosts]);

    const fetchData = () => {
        const nextPage = currentPage + 1;
        postsFetchPosts(nextPage);
        postsSetCurrentPage(nextPage);
    };


    return (
        <div className={styles.jobsList}>
            <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasNextPage}
                loader={   <div style={{ padding: 10 }}>
                    <WholePageSpinner/>
                </div>}
                endMessage={<div style={{padding:10}}/>}

                // below props only if you need pull down functionality
                refreshFunction={loadNewPosts}
                pullDownToRefresh
                pullDownToRefreshThreshold={80}
                pullDownToRefreshContent={
                    <div style={{ padding: 10, textAlign:'center'}}>
                        Refresh<br/>
                        <ArrowDownwardIcon/>
                    </div>

                }
                releaseToRefreshContent={<WholePageSpinner/>}
            >
                <div style={{ padding: '0 20px' }}>
                    {posts.map((post, index) => <Post {...post} key={index}/>)}
                </div>

            </InfiniteScroll>


        </div>
    );
};

const mapDispatchToProps = {
    postsFetchPosts,
    postsSetCurrentPage,
    postsResetPosts,
};

const mapStateToProps = (state: any) => {
    return {
        posts: state.posts.posts,
        hasNextPage: state.posts.hasNextPage,
        currentPage: state.posts.currentPage,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
