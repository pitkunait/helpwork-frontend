import { PostsActionType } from '../types/PostsActionType';
import RequestsService from '../../services/RequestsService';
import TokenService from '../../services/TokenService';
// import DateTimeService from '../../services/DateTimeService';


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
            await RequestsService.post('/posts', postData, TokenService.instance.getAuthentication());
            dispatch({ type: PostsActionType.SUBMIT_NEW_POST });
            dispatch(postsCancelCreatingNewPost());
        } catch ( e ) {
            dispatch(postsCancelCreatingNewPost());
        }
    };
};

export const postsFetchPosts = () => {
    return async(dispatch: any, getState: any) => {
        try {
            const state = getState()
            const params: any = TokenService.instance.getAuthentication();
            const page = state.posts.currentPage
            params.params = { page }
            const { data } = await RequestsService.get('/posts', params);

            console.log(data)

            dispatch({ type: PostsActionType.SET_POSTS_PAGE, payload: { page: page + 1, hasNext: !data.posts.last } });
            dispatch({ type: PostsActionType.FETCH_POSTS, payload: data.posts.content });
        } catch ( e ) {
            console.log('erorr fetching posts');
        }
    };
};


export const postsSearchPostsByTitle = (title: string) => {
    return async(dispatch: any, getState: any) => {
        try {
            const state = getState()
            let params: any = TokenService.instance.getAuthentication();
            const page = state.posts.currentPage
            params.params = { title, page }
            const { data } = await RequestsService.get('/posts', params);

            console.log(params);

            dispatch({ type: PostsActionType.SET_POSTS_PAGE, payload: { page: page + 1, hasNext: !data.posts.last } });
            dispatch({ type: PostsActionType.FETCH_POSTS, payload: data.posts.content });
        } catch ( e ) {
            console.log('erorr fetching posts');
        }
    };
};
