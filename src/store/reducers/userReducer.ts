import { UserActions } from '../actions/userActions'

const initialState: any = {
    isAuthenticated: false,
};

export const userReducer = (state = initialState, action: any) => {
    switch ( action.type ) {
        default:
            return state;

        case UserActions.LOGIN: {
            return {
                ...state,
                isAuthed: true,
            };
        }

        case UserActions.LOGOUT: {
            return {
                ...state,
                isAuthed: false,
            };
        }
    }
};
