import { IAction, Reducer } from '../../utils/types/Store';


interface AppState {
}

const initialState: AppState = {
};

export const appReducer: Reducer<AppState> = (state = initialState, action: IAction) => {
    switch ( action.type ) {
        default:
            return state;

    }
};
