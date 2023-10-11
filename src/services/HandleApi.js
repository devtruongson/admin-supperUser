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
                window.location.href = '/auth/login';
                await logoutService();
                localStorage.clear();
            }
        } else {
            return Promise.reject(error);
        }
    }
}
