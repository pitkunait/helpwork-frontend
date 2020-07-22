import { UserActionType } from '../types/UserActionType';
import RequestsService from '../../services/RequestsService';
import TokenService from '../../services/TokenService';
import { SignInData, SignUpData } from '../../utils/types/User';
import { history } from '../../App';


export const userSignIn = (signInData: SignInData) => {
    return async(dispatch: any, getState: any) => {
        try {

            const { data } = await RequestsService.post('/auth/signin', signInData);

            TokenService.instance.storeAccessToken(data.accessJwt);
            TokenService.instance.storeRefreshToken(data.refreshJwt);
            getState().user.authMessage && dispatch(userUnsetAuthMessage());
            dispatch({ type: UserActionType.SIGN_IN });
        } catch ( e ) {
            dispatch(userSetAuthMessage(e.response?.data?.message));
        }
    };
};


export const userSignOut = () => {
    return async(dispatch: any) => {
        TokenService.instance.clear();
        dispatch({ type: UserActionType.SIGN_OUT });
        history.push('/');
    };
};


export const userSignUp = (signUpData: SignUpData) => {
    return async(dispatch: any, getState: any) => {
        try {
            const { data } = await RequestsService.post('/auth/signup', signUpData);
            TokenService.instance.storeAccessToken(data.accessJwt);
            TokenService.instance.storeRefreshToken(data.refreshJwt);
            dispatch({ type: UserActionType.SIGN_IN });
            getState().user.authMessage && dispatch(userUnsetAuthMessage());
        } catch ( e ) {
            dispatch(userSetAuthMessage(e.response?.data?.message));
        }
    };
};


export const userGetSession = () => {
    return async(dispatch: any) => {
        try {
            if (TokenService.instance.hasRefreshToken()) {
                const { data } = await RequestsService.post(
                    '/auth/refresh-token',
                    { refreshJwt: TokenService.instance.getRefreshToken() },
                );
                TokenService.instance.storeAccessToken(data.accessJwt);
                dispatch({ type: UserActionType.SIGN_IN });
            }
        } catch ( e ) {
            dispatch(userSignOut());
        }
        dispatch(userSetAuthenticating(false));
    };
};


export const userSetAuthenticating = (bool: boolean) => {
    return {
        type: UserActionType.SET_AUTHENTICATING,
        payload: bool,
    };
};


export const userSetAuthMessage = (message: string) => {
    return {
        type: UserActionType.SET_AUTH_MESSAGE,
        payload: message,
    };
};

export const userUnsetAuthMessage = () => {
    return {
        type: UserActionType.UNSET_AUTH_MESSAGE,
    };
};


export const userFetchProfileDetails = () => {
    return async(dispatch: any) => {
        try {
            const { data } = await RequestsService.get(
                '/user/me',
                TokenService.instance.getAuthentication(),
            );
            dispatch({ type: UserActionType.FETCH_MY_USER_DATA, payload:data });
        } catch ( e ) {
            throw e;
        }
    };
};
