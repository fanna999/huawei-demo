import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "../components/Home.vue";
import Search from "../components/home-page/Search.vue"

const routes = [
    {
        path:"/",
        component:home
    },
    {
        path:"/search",
        component:Search
    }


];

const router = new VueRouter({
    routes:routes
});


export default router;