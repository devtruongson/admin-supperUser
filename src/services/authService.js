import axios from '../axios';

export function RegisterService(data) {
    return axios.post('/api/v1/login', data);
}

export function checkSuperUser() {
    return axios.get('/users/info-current-userRole', {
        withCredentials: true,
    });
}

export function refreshToken() {
    return axios.get('/auth/refresh-token', {
        withCredentials: true,
    });
}

export function loginAdmin(data) {
    return axios.post('/auth/login', data, { withCredentials: true });
}

export function logoutService() {
    return axios.get('/auth/logout', { withCredentials: true });
}
