import { gradebooksService } from '../services/GradebooksService'

export const GradebooksStore = {

    state:{
        gradebooks:[],
    },

    mutations:{
        setGradebooks(state, gradebooks){
            state.gradebooks = gradebooks
        }
    },

    actions:{
        async getGradebooks(context, term){
            const response = await gradebooksService.searchGradebooks(term)
            context.commit('setGradebooks', response.data)
        },
        
    },

    getters:{
        getGradebooks(state){
            return state.gradebooks
        }
    }
}