<template>
  <div class="container">
        <h3>Your desired gradebook najba</h3>
        <ul>
            <li>{{ gradebook.name }}</li>
        </ul>
  </div>
</template>

<script>
import { gradebooksService } from '../services/GradebooksService'
export default {
    data(){
        return{
            gradebook:{}
        }
    },

    created(){
        gradebooksService.getGradebook(this.$route.params.id).then(response => {
            this.gradebook = response.data
        })
    }
}
</script>

<style>

</style>