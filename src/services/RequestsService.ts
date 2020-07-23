import axios from 'axios';
import TokenService from './TokenService';
import { useDispatch } from 'react-redux';
import { userSignOut } from '../store/actions/UserActions';


const apiConfig = {
    baseUrl: 'http://localhost',
    port: '8080',
    apiPrefix: '/api/v1',
    tokenRefreshPath: '/auth/refresh-token',
};

const RequestsService = axios.create({
    baseURL: `${apiConfig.baseUrl}:${apiConfig.port}${apiConfig.apiPrefix}`,
});

const getNewToken = () => {
    return new Promise((resolve, reject) => {
        const refreshJwt = TokenService.instance.getRefreshToken();
        RequestsService
            .post(apiConfig.tokenRefreshPath, { refreshJwt })
            .then(response => {
                TokenService.instance.storeAccessToken(response.data.accessJwt);
                resolve(response.data.accessJwt);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

RequestsService.interceptors.response.use((response) => {
    console.log('[API - SUCCESS] ' + response.config.url);
    return response;
}, (error) => {

    if (error.response && error.response.status !== 401) {
        console.log('[API - ERROR] ' + error.config.url);
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }

    if (error.config.url === apiConfig.tokenRefreshPath || error.response.message === 'Account is disabled.') {
        console.log('[API - ERROR] Could not refresh token. ' + error.config.url);
        // SignOut User (clears tokens from LocalStorage too)
        useDispatch()(userSignOut());
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }

    console.log('[API - ERROR] Authorization error. Refreshing token. ' + error.config.url);
    return getNewToken()
        .then((token) => {
            const config = error.config;
            config.headers['Authorization'] = `Bearer ${token}`;
            return new Promise((resolve, reject) => {
                axios.request(config)
                    .then(response => {resolve(response);})
                    .catch((error) => {reject(error);});
            });
        })
        .catch((error) => {
            Promise.reject(error);
        });
});

export default RequestsService;
