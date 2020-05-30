import { HttpService } from './HttpService'

export class GradebooksService extends HttpService {

    getAll(){
        return this.axios.get('gradebooks')
    }

    getGradebook(id){
        return this.axios.get(`gradebooks/single/${id}`)
    }

    addGradebook(gradebook){
        return this.axios.post('gradebooks/add', gradebook)
    }

    searchGradebooks(term){
        return this.axios.get(`gradebooks/search/${term}`)
    }
}

export const gradebooksService = new GradebooksService() 