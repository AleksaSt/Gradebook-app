<template>
  <div>
    <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/register">Register</b-nav-item>
      <b-nav-item href="/login">Login</b-nav-item>
      <b-nav-item href="/gradebooks">Gradebooks</b-nav-item>
      <b-nav-item href="/gradebooks/add">Add Gradebook</b-nav-item>
      <b-nav-item href="/professors">Professors</b-nav-item>
      <input type="text" v-model="term" placeholder="Search">
      <button type="submit" @click="search()">Search</button>
    </b-navbar-nav>
  </b-navbar>
  </div>
</template>

<script>
// import { gradebooksService } from '../services/GradebooksService'
import { mapActions } from 'vuex'
export default {
  data(){
    return{
      term:''
    }
  },

  methods:{
    ...mapActions({
      getGradebooks: 'getGradebooks',
      getProfessors: 'getProfessors'
    }),
    search(){
      if(this.$route.name == 'Gradebooks'){
        this.getGradebooks(this.term)
        return
      }
      if(this.$route.name == 'Professors'){
        this.getProfessors(this.term)
      }
    }
  },
}
</script>

<style>

</style>
