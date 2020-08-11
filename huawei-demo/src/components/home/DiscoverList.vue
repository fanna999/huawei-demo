<template>
<div class="app">
    <component :is="cartEmpty">
    
    </component>

</div>
  
</template>

<script>
import empty from "./discover/empty.vue";
import cartHave from "./discover/cartHave.vue";
import store from "../../store/index.js"
export default {
    data(){
        return {
            cartEmpty:"empty",
        }
    },
    components:{
        "empty":empty,"cartHave":cartHave
    },
    store:store,
    computed:{
        shoppingL()
        {
            return this.$store.state.shoppingList
        }
    },
    watch:{
        shoppingL(newVal){
            console.log(newVal)
            console.log(newVal.length)
            if (newVal)
            {
                this.cartEmpty = "cartHave"
            }
            if (newVal.length == 0)
            {
                this.cartEmpty = "empty"
            }
            
        }
    }
}
</script>

<style scoped>
.app
{
    /* border:1px solid black; */
    height:100%;
    overflow:auto;
    width:100%;
}


</style>