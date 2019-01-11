<template>
    <div id="home">
        <div id="nav">
            <router-link to="/home/orders">Trenutna Naročila</router-link>
            <router-link to="/home/history" append>Zgodovina Naročil</router-link>
            <router-link to="/home/QRCode" append>Mize</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name:"Home",
    data() {
        return {

        }
    },

    /*beforeCreate: function () {
            try{
                if (this.$session.exists()) {
                    console.log('obstaja');
                }
                else{
                    this.$router.push({ name: "login" });
                }
            }
            catch (e) {
                this.$router.push({ name: "login" });
            }

        }*/
}
</script>

<style lang="scss">
    @import "../styles/variables";

    #home {
        width: 100%;
        height: 100%;
        display: flex;

        #nav {
            width: 15rem;
            padding: 30px;
            display: flex;
            flex-direction: column;
            background: $su-color-primary-dark;
            a {
                font-weight: bold;
                color: #2c3e50;
                &.router-link-exact-active {
                    color: #42b983;
                }
            }
        }
    }
</style>
