import axios from "../axios";

export function checkDeviceService(_token_device) {
    return axios.get(`/device/check-device?_token_device=${_token_device}`, {
        withCredentials: true,
    });
}
