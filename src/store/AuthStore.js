import { authService } from '../services/AuthService'

export const AuthStore = {

    state:{
        token:localStorage.getItem('token'),
        loginErrors:null
    },

    mutations:{
        setToken(state, token){
            state.token = token
        },

        setLoginErrors(state, errors){
            state.loginErrors = errors
        }
    },

    actions:{
        async login(context, credentials){
            try{
                const response = await authService.login(credentials)
                authService.setHeaders({
                    Authorization: `Bearer ${response.data.token}`
                })

                context.commit('setLoginErrors', null)
                context.commit('setToken', response.data.token)
                localStorage.setItem('token', response.data.token)
            }catch(exception){
                context.commit('setLoginErrors', exception.response.data.error)
            }
        }
    },

    getters:{
        getLoginErrors(state){
            return state.loginErrors
        }
    }
}
