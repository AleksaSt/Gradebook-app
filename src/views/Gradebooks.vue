<template>
  <div class="container">
        <h2 class="mt-3" >Gradebooks:</h2>
        {{gradebooks.name}}
      <div v-for="(gradebook, index) in gradebooks" :key="index">
        <ul>
          <li>
            <router-link :to="{name: 'SingleGradebook', params:{id: gradebook.id}}">{{ gradebook.name }}</router-link>
          </li>
        </ul>
      </div>
      <button v-if="!allGradebooks.length" class="btn btn-success" @click="showAllGradebooks()">Show all gradebooks</button>
      <button v-else class="btn btn-success" @click="hideGradebooks()">Hide gradebooks</button>
      <div v-for="(gradebook, index) in allGradebooks" :key="index">
        {{ gradebook.name }}
      </div>
  </div>
</template>

<script>
import { gradebooksService } from '../services/GradebooksService'
import { mapActions, mapGetters } from 'vuex'

export default {
  data(){
    return{
      allGradebooks:{}
    }
  },
  computed:{
    ...mapGetters({
      gradebooks: 'getGradebooks'
    })
  },

  methods:{
    ...mapActions({
      getGradebooks: 'getGradebooks'
    }),

    showAllGradebooks(){
      gradebooksService.getAll().then(response => {
        this.allGradebooks = response.data
      })
    },

    hideGradebooks(){
      this.allGradebooks = {}
    }
  }
}

</script>

<style>

</style>