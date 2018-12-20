<template>
    <div class="login">
        <form>
            <label class="companyName">ServeUp</label><br><br><br><br>
            <input type="text" name="email" v-model="email" placeholder="Email"/><br>
            <input type="text" name="password" v-model="password" placeholder="Password"/><br>
            <p id="error">{{error}}</p>
            <p class="forgot_pass">Forgot password?</p><br>
            <button type="button" v-on:click="login()">Log in</button><br><br>
            <label>Don't have an account?</label><br>
            <router-link to="/sing_up" class="link">Sing up</router-link>
            </form>
        </div>

</template>
<script>
    import axios from 'axios';
    export default {
        name: 'Login',
        data() {
            return {
                email: "",
                password: "",
                error:""
            }
        },
        methods: {
            login:function(){
                if(this.email == "" || this.password == ""){
                    this.error="Uporabnisko ime in geslo ne smeta biti prazna.";
                }
                else{
                    axios.post('https://serveup-backend.herokuapp.com/api/admin_user/login/', {
                        email: this.email,
                        password: this.password,
                        format: 'json',

                    }).then(response => {
                        console.log(response.data);
                        console.log("Uporabnik obstaja");
                        this.$router.replace({ name: "main_page" });
                    }).catch(error => {
                        console.log(error.response.data);
                        this.error=error.response.data.description;
                        console.log("Uporabnik ne obstaja");
                    });
                }




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
        margin-bottom: 0px;
        margin-top: 0px;
    }
</style>