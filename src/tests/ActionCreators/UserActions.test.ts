import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../../store/actions/UserActions';
import { UserActionType } from '../../store/types/UserActionType';
import RequestsService from '../../services/RequestsService';
import { rootReducer, userReducer } from '../../store';
import TokenService from '../../services/TokenService';


/**
 * More info on moxios:
 * https://github.com/axios/moxios
 */


const mockStore = configureMockStore([thunk]);
const accessJwt = "accessJwt"
const refreshJwt = "refreshJwt"
const signInData = { username: 'user', password: 'pass' };

describe('Async actions', () => {


    beforeEach(() => {
        moxios.install(RequestsService);

    });

    afterEach(() => {
        moxios.uninstall(RequestsService);
    });



    it('should log user in if success and remove AuthMessage if there is any', () => {
        moxios.wait(function() {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { message: 'User logged in', accessJwt, refreshJwt },
            });
        });

        const store = mockStore({
            user: {
                isAuthenticated: false,
                authMessage: 'Error',
            },
        });

        const expectedActions = [
            { type: UserActionType.UNSET_AUTH_MESSAGE },
            { type: UserActionType.SIGN_IN },
        ];
        return store.dispatch(actions.userSignIn(signInData) as any).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            expect(TokenService.instance.getAccessToken()).toEqual(accessJwt)
            expect(TokenService.instance.getRefreshToken()).toEqual(refreshJwt)
        });
    });

    it('should display error message if login is unsuccessful', () => {
        const errorMessage = 'Error';
        moxios.wait(function() {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400,
                response: { message: errorMessage, accessJwt: null, refreshJwt: null },
            });
        });

        const store = mockStore({
            user: {
                isAuthenticated: false,
                authMessage: '',
            },
        });
        const expectedActions = [{ type: UserActionType.SET_AUTH_MESSAGE, payload: errorMessage }];
        return store.dispatch(actions.userSignIn(signInData) as any).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should sign user out', function() {
        const store = mockStore({
            user: {
                isAuthenticated: true,
            },
        });
        const expectedActions = [{ type: UserActionType.SIGN_OUT }];
        return store.dispatch(actions.userSignOut() as any).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            expect(TokenService.instance.getAccessToken()).toEqual(null)
            expect(TokenService.instance.getRefreshToken()).toEqual(null)
        });
    });

    it('should sign user up', function() {

    });

});
