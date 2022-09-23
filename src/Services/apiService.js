import axios from "axios";

const token = localStorage.getItem("token");

export const get = async (url ) => {
    if (!token) {return axios.get(url)};

    return axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
};

export const post = async (url, data) => {
    if (!token) {return axios.post(url, data)};

    return axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } });
};