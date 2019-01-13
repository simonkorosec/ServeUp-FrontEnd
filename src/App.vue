<template>
    <div id="app">
        <router-view/>
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
    @import "./styles/variables";

    * {
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    #app {
        background: url(assets/background.png) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        width: 100vw;
        height: 100vh;
        flex-direction: row;
        margin: 0;
        @include su-mx-scroll-bar;
    }

    .login{
        background-color: white;
        width: 30%;
        height: 100%;
    }

    .login form{
        top: 50%;
        left: 50%;
        -moz-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        position:relative;
        width: 50%;



    }
    input[type=text],[type=password]{
        background-color: #ebebeb;
        border: 1px solid rgba(0, 0, 0, .0);
        border-radius: 20px;
        padding: 10px 10px 10px 20px;
        width: 88%;
        margin: 3px 3px 6px;
        color:#444444;
    }
    input[type=text]:focus{
        border: 1px solid #00c4ab;
        outline:none;
    }
    button[type=button]{
        background-color: #00c4ab;
        border: none;
        border-radius: 20px;
        padding: 10px;
        width: 99%;
        margin: 3px;
        color:white;
    }
    button[type=button]:hover{
        background-color: #00b39b;
    }
    button[type=button]:active{
        background-color: #009985;
    }

    .companyName{
        color:#00c4ab;
        font-size: 27px;
    }
    p,label{
        color: gray;
    }
    label{
        font-size: 13px;
    }
    .forgot_pass{
        text-align: right;
        margin: 0;
        font-size: 12px;
    }
    .link{
        color:#00c4ab;
        text-decoration: none;
    }

    .su-card-wrapper {
        margin: 0;
        min-width: 25%;
        max-width: 25%;
        padding: 16px;
    }

    .su-history-line-item-wrapper {
        margin: 0;
        min-width: 25%;
        max-width: 25%;
        height: 3rem;
        padding: 8px;
    }

    @media screen and (max-width:1800px) {
        .su-card-wrapper {
            margin: 0;
            min-width: 33%;
            max-width: 33%;
            padding: 16px;
        }

        .su-history-line-item-wrapper {
            margin: 0;
            min-width: 33%;
            max-width: 33%;
            height: 3rem;
            padding: 8px;
        }
    }
</style>