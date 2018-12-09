<template>
    <div class="login_register">

        <form>
            <label class="companyName">ServeUp</label><br><br><br><br>
            <input type="text" placeholder="Email"/><br>
            <input type="text" placeholder="Password"/><br>
            <p class="forgot_pass">Forgot password?</p><br>
            <input type="submit" value="Sing in"/><br><br>
            <label>Don't have an account?</label><br>
            <router-link to="/sing_up" class="link">Sing up</router-link>
        </form>
        </div>

</template>