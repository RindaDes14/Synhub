import axios from "axios";

const Api = axios.create({
    baseURL: 'http://hub.veta.host/api/',
    headers: {
        'Accept': '*/*',
        'Content-Type' : 'multipart/form-data'
    }
});

export default Api;