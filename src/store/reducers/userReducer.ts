import { UserActions } from '../actions/userActions'
import TokenService from '../../services/TokenService';

const initialState: any = {
    isAuthenticated: false,
};

export const userReducer = (state = initialState, action: any) => {
    switch ( action.type ) {
        default:
            return state;

        case UserActions.SIGNIN: {
            return {
                ...state,
                isAuthenticated: true,
            };
        }

        case UserActions.SIGNOUT: {

            TokenService.instance.clear()

            return {
                ...state,
                isAuthenticated: false,
            };
        }
    }
};
