import axios from '../axios';

export const getNotifyService = ({ page = 1, pageSize = 5 }) => {
    return axios.get(`/notify?page=${page}&pageSize=${pageSize}`, {
        withCredentials: true,
    });
};
