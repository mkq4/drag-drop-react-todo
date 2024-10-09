import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._isLoading = false
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    
    setUser(user) {
        this._user = user
    }

    setLoading(bool) {
        this._isLoading = bool
    }

    get isAuth() {
        return this._isAuth
    }
    
    get user() {
        return this._user
    }

    get loading() {
        return this._isLoading
    }
}