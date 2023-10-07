import axios from "axios";

export function RegisterService(data) {
    return axios.post("/api/v1/login", data);
}
