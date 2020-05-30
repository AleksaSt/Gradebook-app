<template>
  <div class="container" >
      <h2>Your desired professor najba</h2>
        <h4>{{ professor.name }}</h4>
  </div>
</template>

<script>
import { professorsService } from '../services/ProfessorsService'
export default {
    data(){
        return{
            professor:{}
            
        }
    },

    created(){
        professorsService.getProfessor(this.$route.params.id).then(response => {
            this.professor = response.data
        })
    }
}
</script>

<style>

</style>