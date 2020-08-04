import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "../components/Home.vue";


const routes = [
    {
        path:"/",
        component:home
    }
];

const router = new VueRouter({
    routes:routes
});


export default router;