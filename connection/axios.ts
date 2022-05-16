import axios from 'axios'

const baseURL = false ? 'http://127.0.0.1:8000/' : 'https://finmang.herokuapp.com/';

const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    config => {
        console.log('config interceptors', config)
        return config;
    },
    error => {
        console.log('error interceptors', error)
        if(error.response.status == 403){
            console.log('teste')
        }
    }
);

export default instance;