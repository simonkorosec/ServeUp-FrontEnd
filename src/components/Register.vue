<template>
    <div class="login_register">
        <form>
            <label class="companyName">ServeUp</label><br><br><br><br>
            <input type="text" placeholder="Full name"/><br>
            <input type="text" placeholder="Email"/><br>
            <input type="text" placeholder="Password"/><br>
            <input type="text" placeholder="Confirm Password"/><br><br>
            <input type="submit" value="Sing up"/><br><br>
            <label>Already have account?</label><br>
            <router-link to="/" class="link">Sing in</router-link>
        </form>

    </div>
</template>