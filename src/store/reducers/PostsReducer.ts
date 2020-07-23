import { IAction, Reducer } from '../../utils/types/Store';
import { PostsActionType } from '../types/PostsActionType';
import { IPost } from '../../utils/types/Posts';


interface PostState {
    creatingNewPost: boolean
    posts: IPost[]
}


const initialState: PostState = {
    creatingNewPost: false,
    posts: [],
};

export const postsReducer: Reducer<PostState> = (state = initialState, action: IAction) => {
    switch ( action.type ) {
        default:
            return state;
        case PostsActionType.FETCH_POSTS:
            return { ...state, posts: action.payload };
        case PostsActionType.START_CREATING_NEW_POST:
            return { ...state, creatingNewPost: true };
        case PostsActionType.CANCEL_CREATING_NEW_POST:
            return { ...state, creatingNewPost: false };
        case PostsActionType.SUBMIT_NEW_POST:
            return { ...state };
    }
};
