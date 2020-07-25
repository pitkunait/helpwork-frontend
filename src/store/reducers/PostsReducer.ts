import { IAction, Reducer } from '../../utils/types/Store';
import { PostsActionType } from '../types/PostsActionType';
import { IPost } from '../../utils/types/Posts';


interface PostState {
    creatingNewPost: boolean
    posts: IPost[]
    currentPage: number
    hasNextPage: boolean
}


const initialState: PostState = {
    creatingNewPost: false,
    posts: [],
    currentPage: 0,
    hasNextPage: true
};

export const postsReducer: Reducer<PostState> = (state = initialState, action: IAction) => {
    switch ( action.type ) {
        default:
            return state;
        case PostsActionType.FETCH_POSTS:
            return { ...state, posts: state.posts.concat(action.payload.data), hasNextPage:action.payload.hasNext };
        case PostsActionType.START_CREATING_NEW_POST:
            return { ...state, creatingNewPost: true };
        case PostsActionType.CANCEL_CREATING_NEW_POST:
            return { ...state, creatingNewPost: false };
        case PostsActionType.SUBMIT_NEW_POST:
            return { ...state };
        case PostsActionType.SET_POSTS_PAGE:
            return { ...state, currentPage: action.payload };
    }
};
