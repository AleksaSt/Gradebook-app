import { HttpService } from './HttpService'

export class AuthService extends HttpService {

    register(user){
        return this.axios.post('register', user)
    }

    login(user){
        return this.axios.post('login', user)
    }
}

export const authService = new AuthService() 