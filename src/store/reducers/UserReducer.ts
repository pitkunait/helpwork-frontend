import { UserActionType } from '../types/UserActionType';
import { User } from '../../utils/types/User';
import { Reducer } from '../../utils/types/Store';


interface UserState {
    isAuthenticated: boolean
    isAuthenticating: boolean
    user: User | null
    authMessage: string
    userData: any
}


const initialState: UserState = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null,
    authMessage: '',
    userData: null
};

export const userReducer: Reducer<UserState> = (state = initialState, action) => {
    switch ( action.type ) {
        default:
            return state;
        case UserActionType.SET_AUTHENTICATING:
            return { ...state, isAuthenticating: action.payload};
        case UserActionType.SIGN_IN:
            return { ...state, isAuthenticated: true };
        case UserActionType.SIGN_OUT:
            return { ...state, isAuthenticated: false };
        case UserActionType.SET_AUTH_MESSAGE:
            return { ...state, authMessage: action.payload };
        case UserActionType.UNSET_AUTH_MESSAGE:
            return { ...state, authMessage: '' };
        case UserActionType.FETCH_MY_USER_DATA:
            return { ...state, userData: action.payload};
    }
};
