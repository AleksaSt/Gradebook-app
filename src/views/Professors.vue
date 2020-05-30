<template>
    <div class="container">
        <h3>Professors:</h3>
        <div v-for="(professor, index) in professors" :key="index">
            <router-link :to="{name: 'SingleProfessor', params:{id: professor.id}}"><h3>{{professor.name}}</h3></router-link>
            <h6>{{ professor.name }}</h6>
        </div>
         <button @click="showAll()" class="btn btn-success" >Show All Professors</button>
        <div v-for="(professor, index) in allProfessors" :key="index" >
            {{ professor.name }}
        </div>
    </div>
</template>

<script>
import { professorsService } from '../services/ProfessorsService'
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
            allProfessors:{}
        }
    },

    computed:{
        ...mapGetters({
            professors: 'getProfessors'
        })
    },

    methods:{

            ...mapActions({
                getProfessors: 'getProfessors'
            }),

            showAll(){
                professorsService.getProfessors().then(response => {
                    this.allProfessors = response.data
                })
            }
        }
}
</script>

<style>

</style>
