import { $authHost, $host } from "./index.js";

export const registration = async (email, password) => {
    const {data} = await $host.post('/user/registration', {email, password})
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post('/user/login', {email, password})
    return data
}

export const logout = async () => {
    const {data} = await $authHost.post('/logout')
    return  data
}

