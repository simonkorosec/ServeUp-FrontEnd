<template>
    <div id="home">
        <div id="nav">
            <router-link to="/orders">Orders</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>

export default {
    name:"Home",
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    @import "../styles/variables";

    #home {
        width: 100%;
        height: 100%;
        display: flex;

        #nav {
            width: 15%;
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
