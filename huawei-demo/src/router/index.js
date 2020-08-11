import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "../components/Home.vue";
import DetailsPage from "../components/detailsPage/detailsPage.vue";
import loginPage from "../components/home/me/loginPage.vue";
import cartHave from "../components/home/discover/cartHave.vue"

const routes = [
    {
        path:"/",
        component:home
    },
    {
        path:"/detailspage",
        component:DetailsPage
    },
    {
        path:"/login",
        component:loginPage
    },
    {
        path:"/cartHave",
        component:cartHave
    }
];

const router = new VueRouter({
    routes:routes
});


export default router;