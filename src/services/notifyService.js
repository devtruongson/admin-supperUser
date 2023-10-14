import axios from '../axios';

export const getNotifyService = ({ page = 1, pageSize = 5 }) => {
    return axios.get(`/notify?page=${page}&pageSize=${pageSize}`, {
        withCredentials: true,
    });
};

export const updateViewNotifications = (data) => {
    return axios.put('/notify/view-trues', data, {
        withCredentials: true,
    });
};
