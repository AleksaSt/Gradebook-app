import { professorsService } from "../services/ProfessorsService"

export const ProfessorsStore = {

    state:{

        professors:[]
    },

    mutations:{

        setProfessors(state, professors){
            state.professors = professors
        }
    },

    actions:{
        async getProfessors(context, term){
            const response = await professorsService.searchProfessors(term)
            context.commit('setProfessors', response.data)
        }
    },

    getters:{
        getProfessors(state){
            return state.professors
        }
    }
}