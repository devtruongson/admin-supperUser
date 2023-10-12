import { logoutService, refreshToken } from './authService';
import { checkDeviceService } from './deviceService';
import { store } from '../app/store';

export async function HandleApi(api, data = null) {
    try {
        return await api(data);
    } catch (error) {
        if (error.response.status === 401) {
            try {
                // Làm mới token trước
                await refreshToken();

                // check again device

                if (store?.getState()?.authSlice?._token_device) {
                    const Res = await checkDeviceService(store?.getState()?.authSlice?._token_device);
                    if (!Res.data.successful) {
                        await handleLogout('');
                    }
                } else {
                    await handleLogout('');
                }

                // Gọi lại API sau khi token được làm mới
                return await api(data);
            } catch (refreshError) {
                // Xử lý lỗi làm mới token
                console.error('Lỗi làm mới token:', refreshError);
                await handleLogout(refreshError);
            }
        } else {
            return Promise.reject(error);
        }
    }
}

async function handleLogout(refreshError) {
    await logoutService();
    window.location.href = '/auth/login';
    localStorage.clear();
    return Promise.reject(refreshError);
}
