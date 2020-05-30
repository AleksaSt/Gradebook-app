import { HttpService } from './HttpService'

export class ProfessorsService extends HttpService {

    getProfessors(){
        return this.axios.get('professors')
    }

    getProfessor(id){
        return this.axios.get(`professors/single/${id}`)
    }

    searchProfessors(term){
        return this.axios.get(`professors/search/${term}`)
    }

}

export const professorsService = new ProfessorsService()