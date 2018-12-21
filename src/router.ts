import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import MainPage from "./components/MainPage.vue";


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/sing_up",
            name: "register",
            component: Register
        },
        {
            path: "/main_page",
            name: "main_page",
            component: MainPage
        }]
});
