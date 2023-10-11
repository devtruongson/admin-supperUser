import { logoutService, refreshToken } from './authService';

export async function HandleApi(api, data = null) {
    try {
        return await api(data);
    } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
            try {
                await refreshToken();
                api();
            } catch (error) {
                await logoutService();
                window.location.href = '/auth/login';
                localStorage.clear();
            }
        } else {
            return Promise.reject(error);
        }
    }
}
