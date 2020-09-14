import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "../components/Home.vue";
import DetailsPage from "../components/detailsPage/detailsPage.vue";
import loginPage from "../components/home/me/loginPage.vue";
import cartHave from "../components/home/discover/cartHave.vue"
import Search from "../components/home-page/Search.vue";
import DiscoverList from "../components/home/DiscoverList.vue"
import registerPage from "../components/home/me/registerPage.vue"


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
        path:"/register",
        component:registerPage
    },
    // {
    //     path:"/cartHave",
    //     component:DiscoverList
    // },
    {
        path:"/search",
        component:Search
    },
    {
        name:"cart",
        path:"/cart",
        component:cartHave
    }


];

const router = new VueRouter({
    routes:routes
});


export default router;