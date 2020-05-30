<template>
  <div>
      <div class="container">
        <div v-if="errors" class="alert alert-danger mt-3">
            {{ errors }}
        </div>
        <form @submit.prevent>
            <div class="form-group">
                <label class="mt-3" >Email</label>
                <input type="email" class="form-control" v-model="user.email"  placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="user.password"  placeholder="Enter your password">
            </div>
            <button type="submit" class="btn btn-success mt-3" @click="loginUser()">Login</button>
        </form>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            user:{}
        }
    },
    computed:{
        ...mapGetters({
            errors: 'getLoginErrors'
        })
    },
    methods:{
        ...mapActions({
            login: 'login'
        }),

        loginUser(){
            this.login(this.user).then(() => {
                if(!this.errors){
                    this.$router.push({name: 'Home'})
                }
            })
        }
    }
}
</script>

<style>

</style>