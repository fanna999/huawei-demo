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
            return this.$store.state.shoppingList;
           
            
        },
        
    },
    mounted(){
        console.log("root")
         console.log(this.$parent.componentName)
          if (this.shoppingL.length>0)
            {
                this.cartEmpty = "cartHave"
                // this.$router.push({
                //     name:"cart",
                //     path:"/cart"
                // })
            }
            if (this.shoppingL.length == 0)
            {
                this.cartEmpty = "empty"
                // this.$router.replace("/")
            }
    },
    watch:{
        shoppingL(newVal){
            console.log("shopplingL");
            console.log(this.shoppingL.length);
            // console.log(newVal.length)
             if (newVal.length>0)
            {
                this.cartEmpty = "cartHave"
                // this.$router.push({
                //     name:"cart",
                //     path:"/cart"
                // })
            }
            if (newVal.length == 0)
            {
                this.cartEmpty = "empty"
                // this.$router.replace("/")
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