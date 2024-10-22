
import { $auth, $host } from "../config/api.config";

class AuthServices {
    
    async login(dataFetch, userStore) {
        const {data} = await $host.post("/user/login", dataFetch)
        
        if(data) {
            localStorage.setItem("accessToken", data?.accessToken)
            userStore.setUser(data.user)
        }
        return data
    }

    async registration(dataFetch, userStore){
        const {data} = await $host.post("/user/registration", dataFetch)
        if(data) {
            localStorage.setItem("accessToken", data?.accessToken)
            userStore.setUser(data.user)
        }
        return data
    }

    async refresh() {
        const {data} = await $auth.post("/user/refresh");
        if(data) {
            localStorage.setItem("accessToken", data?.accessToken)
        }
        return data
    }

    async logout() {
        const {data} = await $auth.post("/user/logout");
        if(data) {
            localStorage.removeItem("accessToken")
        }
        return data
    }

}
export default new AuthServices();