import { UserActionType } from '../types/UserActionType';
import { UserData } from '../../utils/types/User';
import { Reducer } from '../../utils/types/Store';


interface UserState {
    isAuthenticated: boolean
    isAuthenticating: boolean
    user: UserData | null
    authMessage: string
}


const initialState: UserState = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null,
    authMessage: '',
};

export const userReducer: Reducer<UserState> = (state = initialState, action) => {
    switch ( action.type ) {
        default:
            return state;
        case UserActionType.SET_AUTHENTICATING:
            return { ...state, isAuthenticating: action.payload };
        case UserActionType.SIGN_IN:
            return { ...state, isAuthenticated: true };
        case UserActionType.SIGN_OUT:
            return { ...state, isAuthenticated: false };
        case UserActionType.SET_AUTH_MESSAGE:
            return { ...state, authMessage: action.payload };
        case UserActionType.UNSET_AUTH_MESSAGE:
            return { ...state, authMessage: '' };
        case UserActionType.FETCH_MY_USER_DATA:
            return { ...state, user: action.payload };
    }
};
