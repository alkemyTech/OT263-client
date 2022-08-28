import axios from "axios";

const token = localStorage.getItem('token');

export const get =async(url)=> {
    //Si no hay token se ejecuta este bloque para las solicitudes get
    if(!token){
        try {
            const response = await axios.get(url, data);
            return response;
        } catch (error) {
            return error;
        }
    }
    //Si hay token se ejecuta este bloque para las solicitudes get usando el token
    try {
        const response = await axios.get(url, data, {
            headers:{"Authorization" : `Bearer ${token}`}
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const post =async(url, data)=> {
    //Si no hay token se ejecuta este bloque para las solicitudes post
    if(!token){
        try {
            const response = await axios.post(url, data);
            return response;   
        } catch (error) {
            return error;
        }
    }
    //Si hay token se ejecuta este bloque para las solicitudes post usando el token
    try {
        const response = await axios.post(url, data, {
            headers:{"Authorization" : `Bearer ${token}`}
        });
        return response;   
    } catch (error) {
        return error;
    }
}