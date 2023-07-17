<template>
<main class="d-flex">
    <sidebar/>
    <div class="container ps-5">
        <b-button></b-button>
        <router-view></router-view>
    </div>
</main>

</template>
<script>
import Sidebar from "@/views/Sidebar.vue"
export default {
    components:{
        Sidebar
    }
}
</script>
<style scoped>
main{
    /* min-width: 100vw; */
}
</style>