import { PostsActionType } from '../types/PostsActionType';
import RequestsService from '../../services/RequestsService';
import TokenService from '../../services/TokenService';
import { IPost } from '../../utils/types/Posts';


export const postsStartCreatingNewPost = () => {
    return {
        type: PostsActionType.START_CREATING_NEW_POST,
    };
};

export const postsCancelCreatingNewPost = () => {
    return {
        type: PostsActionType.CANCEL_CREATING_NEW_POST,
    };
};

export const postsSubmitNewPost = (postData: any) => {
    return async(dispatch: any) => {
        try {
            await RequestsService.post('/posts/new', postData, TokenService.instance.getAuthentication() );
            dispatch({ type: PostsActionType.SUBMIT_NEW_POST });
            dispatch(postsCancelCreatingNewPost());
        } catch ( e ) {
            dispatch(postsCancelCreatingNewPost());
        }
    };
};

export const postsFetchPosts = () => {
    return async(dispatch: any) => {
        try {
            const { data } = await RequestsService.get('/posts/posts', TokenService.instance.getAuthentication());

            let posts = data.posts
                .map((item:IPost) => {return { ...item, createdAt: new Date(item.createdAt)} as IPost})
                .sort((a:IPost,b:IPost)=>b.createdAt.getTime()-a.createdAt.getTime());

            dispatch({ type: PostsActionType.FETCH_POSTS, payload:posts });
        } catch ( e ) {
            console.log("erorr fetching posts")
        }
    };
}

