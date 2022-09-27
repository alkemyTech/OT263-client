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

export const put =async(url, data)=> {
    //Si no hay token se ejecuta este bloque para las solicitudes post
    if(!token){
        try {
            return axios.put(url, data);   
        } catch (error) {
            return error;
        }
    }
    //Si hay token se ejecuta este bloque para las solicitudes post usando el token
    try {
        return axios.put(url, data, {
            headers:{"Authorization" : `Bearer ${token}`}
        });   
    } catch (error) {
        return error;
    }
}