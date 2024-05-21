import axios from 'axios';
import useUserStore from "@/store/userStore.js";
import router from "@/router/router.js";

const userStore = useUserStore();

const baseURL = 'http://10.61.150.240:8080';

const instance = axios.create({
    baseURL: baseURL,
    timeout: 200000
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${userStore.token}`;
    return config;
})

instance.interceptors.response.use((response) => {
    return response;
}, error => {
    if(error.response && error.response.status === 401) {
        userStore.$reset();
        router.push('/login');
    } else if(error.response) {
        console.log(error.response);
    }
    return Promise.reject(error);
})

export default instance;