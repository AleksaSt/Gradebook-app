<template>
  <div class="container">
      <div class="alert alert-danger mt-3" v-for="(error, index) in errors" :key="index">
          {{ error[0] }}
      </div>
      <form @submit.prevent>
        <div class="form-group">
            <label class="mt-3">Add Gradebook</label>
            <input type="text" v-model="gradebook.name" class="form-control" placeholder="Name Your Gradebook!">
        </div>
        <button class="btn btn-success" type="submit" @click="submit()">Add</button>
      </form>
  </div>
</template>

<script>
import { gradebooksService } from '../services/GradebooksService'
export default {
    data(){
        return{
            gradebook:{},
            errors:[]
        }
    },

    methods:{
        submit(){
            gradebooksService.addGradebook(this.gradebook).then(() =>{
                if(this.errors.length == 0){

                    this.$router.push({name: 'Gradebooks'})
                }
            }).catch(error => {
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>

<style>

</style>