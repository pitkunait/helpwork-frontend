import axios from 'axios';
import TokenService from './TokenService';


const apiConfig = {
    baseUrl: 'http://localhost',
    port: '8080',
    apiPrefix: '/api/v1',
    // apiPrefix: '',
};

const RequestsService = axios.create({
    baseURL: `${apiConfig.baseUrl}:${apiConfig.port}${apiConfig.apiPrefix}`,
});

RequestsService.interceptors.request.use((response) => {
    console.log('[SUCCESS] ' + response.url);
    return response;
}, (error) => {
    if (error.response.status !== 401) {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }
    if (error.config.url === '/token/refresh' || error.response.message === 'Account is disabled.') {
        TokenService.instance.clear();
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }

    return getNewToken()
        .then((token) => {
            const config = error.config;
            config.headers['Authorization'] = `Bearer ${token}`;
            return new Promise((resolve, reject) => {
                axios.request(config).then(response => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        })
        .catch((error) => {
            Promise.reject(error);
        });
});

const getNewToken = () => {
    return new Promise((resolve, reject) => {
        const refresh = TokenService.instance.getRefreshToken();
        RequestsService
            .post('/token/refresh', { refresh })
            .then(response => {
                TokenService.instance.storeToken(response.data.accessJwt);
                resolve(response.data.accessJwt);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


export default RequestsService;
