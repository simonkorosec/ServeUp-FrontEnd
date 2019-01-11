import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Orders from "./views/Orders.vue"
import History from "./views/History.vue"
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import QRCode from "./components/QRCode.vue";
import MainPage from "./views/MainPage.vue"


Vue.use(Router);

export default new Router({
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
            path: "/main",
            name: "main",
            component: MainPage
        },
        {
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/QRCode",
            name: "qrcode",
            component: QRCode
        },
        {
            path: "/orders",
            name: "orders",
            component: Orders
        },
        {
            path: "/history",
            name: "history",
            component: History
        },
    ]
});
