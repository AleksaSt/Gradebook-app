<template>
    <div class="container">
        <div v-for="(error, index) in errors" :key="index" class="alert alert-danger mt-3">
            {{ error[0] }}
        </div>
        <form @submit.prevent>
            <div class="form-group">
                <label class="mt-3" >Name</label>
                <input type="text" class="form-control" v-model="user.name" placeholder="Enter your name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email" placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="user.password" placeholder="Enter your password">
            </div>
            <div class="form-group">
                <label>Repeat Password</label>
                <input type="password" class="form-control" v-model="user.repeat_password" placeholder="Repeat your password">
            </div>
             <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="user.accept_terms_and_conditions" value="1">
                <label class="form-check-label">Accept Terms And Conditions</label>
            </div>
            <button type="submit" class="btn btn-success mt-3" @click="registerUser()">Register</button>
        </form>
    </div>
</template>

<script>
import { authService } from '../services/AuthService'
export default {
    data(){
        return{
            user:{},
            errors:[]
        }
    },
    methods:{
        registerUser(){
            authService.register(this.user).catch(error => {
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>

<style>

</style>