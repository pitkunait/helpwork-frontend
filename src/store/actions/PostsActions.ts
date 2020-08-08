import { PostsActionType } from '../types/PostsActionType';
import RequestsService from '../../services/RequestsService';
import TokenService from '../../services/TokenService';

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
            dispatch(postsResetPosts())
            dispatch(postsSetCurrentPage(0))
        } catch ( e ) {
            dispatch(postsCancelCreatingNewPost());
            dispatch(postsResetPosts())
            dispatch(postsSetCurrentPage(0))
        }
    };
};

export const postsFetchPosts = (page: number) => {
    return async(dispatch: any, getState: any) => {
        try {
            const params: any = TokenService.instance.getAuthentication();
            params.params = { page };
            const title = getState().posts.searchTitle
            if (title) {
                params.params.title = title
            }

            const { data } = await RequestsService.get('/posts', params);
            dispatch({ type: PostsActionType.FETCH_POSTS, payload: { data: data.posts.content, hasNext: !data.posts.last }});
        } catch ( e ) {
            console.log('erorr fetching posts');
        }
    };
};


export const postsFetchPostsByTitle = (title: string, page: number) => {
    return async(dispatch: any) => {
        try {
            let params: any = TokenService.instance.getAuthentication();
            params.params = { title, page };
            const { data } = await RequestsService.get('/posts', params)
            dispatch({ type: PostsActionType.FETCH_POSTS, payload: { data: data.posts.content } });
        } catch ( e ) {
            console.log('erorr fetching posts');
        }
    };
};


export const postsResetPosts = () => {
    return {
        type: PostsActionType.RESET_POSTS,
    };
};


export const postsSetCurrentPage = (page: number) => {
    return {
        type: PostsActionType.SET_POSTS_PAGE, payload: page,
    };
};


export const postsSetSearchTitle = (title: string) => {
    return async(dispatch:any) => {
        dispatch(postsResetPosts())
        dispatch(postsSetCurrentPage(0))
        dispatch({type: PostsActionType.SET_SEARCH_TITLE, payload: title})
        dispatch(postsFetchPosts(0))
    };
};
