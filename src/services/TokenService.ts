const LOCAL_STORAGE_TOKEN = 'helpwork_token';
const LOCAL_STORAGE_REFRESH_TOKEN = 'helpwork_refresh_token';


export default class TokenService {

    private static _instance: TokenService | null = null;

    static get instance(): TokenService {
        if (!TokenService._instance) {
            TokenService._instance = new TokenService();
        }
        return TokenService._instance;
    }

    public hasAccessToken() {
        return this.getAccessToken() !== null;
    }

    public hasRefreshToken() {
        return this.getRefreshToken() !== null;
    }

    public getAuthentication() {
        return {
            headers: { 'Authorization': 'Bearer ' + this.getAccessToken() },
        };
    }

    public storeAccessToken(token: string) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
    }

    public storeRefreshToken(refreshToken: string) {
        localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
    }

    public clear() {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN);
    }

    public getRefreshToken() {
        return localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN);
    }

    public getAccessToken() {
        return localStorage.getItem(LOCAL_STORAGE_TOKEN);
    }
}
