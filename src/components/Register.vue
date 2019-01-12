<template>
    <div class="login">
        <form>
            <label class="companyName">ServeUp</label><br><br><br><br>
            <input type="text" v-model="full_name" placeholder="Full name"/><br>
            <input type="text" v-model="email" placeholder="Email"/><br>
            <input type="text" v-model="password" placeholder="Password"/><br>
            <input type="text" v-model="conf_password" placeholder="Confirm Password"/><br>
            <p id="error">{{error}}</p><br>
            <button type="button" v-on:click="register()">Sign up</button><br><br>
            <label>Already have account?</label><br>
            <router-link to="/" class="link">Log in</router-link>
            <router-link to="/QR" class="link">qr</router-link>

        </form>

    </div>
</template>

<script>
    import axios from 'axios';
    import {serverUrl} from "../Events";

    export default {
        name:'Register',
        data(){
            return{
                full_name:"",
                email:"",
                password:"",
                conf_password:"",
                error:""
            }
        },
        methods:{
            register: function () {
                if(this.full_name ==="" || this.email ==="" || this.password ==="" || this.conf_password ===""){
                    this.error="Vsi podatki morajo biti vnešeni";
                }
                else{
                    axios.post(serverUrl + 'api/admin_user/register/', {
                        email: this.email,
                        password: this.password,
                        format: 'json',

                    }).then(response => {
                        console.log(response.data);
                        console.log("Uporabnik uspesno dodan");
                        this.error="Registracija uspela.";

                    }).catch(error => {
                        console.log(error.response.data.description);
                        this.error=error.response.data.description;
                        console.log("Uporabnika ni bilo mogoče dodati");
                    });
                }


            }
        },
        mounted: function () {
            if (this.$session.exists()) {
                console.log('obstaja');
            }
            else{
                console.log('ne obstaja');
            }
        }
    }
</script>
<style lang="scss" scoped>
    #error{
        color:rgb(249, 102, 102);
        font-size: 12px;
        text-align: left;
        margin-left: 6px;
        margin-bottom: 0;
        margin-top: 0;
    }
</style>