<template>
    <div class="list-wrap">
        
    </div>
</template>

<script>
export default {
    methods:{
        toChatDetail(id){
            this.$router.push({
                path:"/chat",
                query:{
                    id:id
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
