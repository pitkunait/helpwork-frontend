import { PostsActionType } from '../types/PostsActionType';
import RequestsService from '../../services/RequestsService';
import TokenService from '../../services/TokenService';
import DateTimeService from '../../services/DateTimeService';


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
            await RequestsService.post('/posts/new', postData, TokenService.instance.getAuthentication());
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
            const { data } = await RequestsService.get('/posts/list', TokenService.instance.getAuthentication());
            // FIXME: Should be sorted on backend
            let posts = DateTimeService.instance.sortPosts(data.posts);
            dispatch({ type: PostsActionType.FETCH_POSTS, payload: posts });
        } catch ( e ) {
            console.log('erorr fetching posts');
        }
    };
};


export const postsSearchPostsByTitle = (title: string) => {
    return async(dispatch: any) => {
        try {
            let params: any = TokenService.instance.getAuthentication();
            params.params = { title };

            console.log(params);
            const { data } = await RequestsService.get('/posts/search', params);
            // FIXME: Should be sorted on backend
            let posts = DateTimeService.instance.sortPosts(data.posts);
            dispatch({ type: PostsActionType.FETCH_POSTS, payload: posts });
        } catch ( e ) {
            console.log('erorr fetching posts');
        }
    };
};
