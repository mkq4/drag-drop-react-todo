import { $authHost, $host } from "./index.js";

export const registration = async (email, password) => {
    const response = await $host.post('/user/registration', {email, password})
    return response
}

// export const login = async (email, password) => {
//     const response = await $authHost.post('/registration', {email, password})
//     return response
// }

// export const check = async (email, password) => {
//     const response = await $authHost.post('/registration', {email, password})
//     return response
// }

