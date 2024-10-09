import axios from 'axios'
import AuthService from '../services/auth.service';

export const httpUrl = "https://todo.webirai.ru/api";
export const appUrl = "https://todo.webirai.ru";

const $auth = axios.create({
    baseURL: httpUrl,
    origin: appUrl,
    withCredentials: true,
    credentials: 'include',
})
const $host = axios.create({
    baseURL: httpUrl,
    origin: appUrl,
    withCredentials: true,
    credentials: 'include',
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$auth.interceptors.request.use((config) =>{
    return config
}, (async (error) => {
    const originalRequest = error.config
    if(error.response.status === 401 && error.config && error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const {data} = await AuthService.refresh()
            localStorage.setItem("accessToken", data?.accessToken)
            return $auth.request(originalRequest)
        // eslint-disable-next-line no-unused-vars
        } catch(e){
            console.log("Пользователь не авторизован")
        }
    }
    throw error;
}))

$auth.interceptors.request.use(authInterceptor)

export {
    $host, $auth
}