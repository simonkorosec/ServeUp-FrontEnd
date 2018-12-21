<template>
    <div id="app">
        <home></home>
    </div>
</template>

<script>
    import Home from "./views/Home";
    export default {
        components: {Home}
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    * {
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100vw;
        height: 100vh;
        flex-direction: row;
        margin: 0;
    }
</style>