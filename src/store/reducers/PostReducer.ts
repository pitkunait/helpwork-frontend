import { Action, Reducer } from '../../utils/types/Store';


interface PostState {
}

const initialState: PostState = {
};

export const postReducer: Reducer<PostState> = (state = initialState, action: Action) => {
    switch ( action.type ) {
        default:
            return state;

    }
};
